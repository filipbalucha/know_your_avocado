import io
import json
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from functools import reduce

with open('details.json') as f:
    details = json.load(f)
    train_mean = details['train_mean']
    train_std = details['train_std']
    imsize = details['imsize']
    class_names = details['class_names']

CAT_OTHER = 'other'
IDX_OTHER = class_names.index(CAT_OTHER)
CATEGORIES_NO_OTHER = [cat for cat in class_names if cat is not CAT_OTHER]

# Source: https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html
app = Flask(__name__, static_folder='frontend/build', static_url_path='')
cors = CORS(app)

model = models.resnet18(pretrained=True)

num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, len(class_names))

model.load_state_dict(torch.load('model'))
model.eval()


def transform_image(image_bytes):
    my_transforms = transforms.Compose([
        transforms.Resize(imsize),
        transforms.ToTensor(),
        transforms.Normalize(
            mean=train_mean,
            std=train_std
        )
    ])
    img = Image.open(io.BytesIO(image_bytes))
    return my_transforms(img).unsqueeze(0)


def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)

    logits = model.forward(tensor)
    probas = F.softmax(logits, dim=-1)
    return probas

def generate_response(p):
    """[Generate a response to be returned by the API]

    Args:
        prediction ([torch.Tensor]): [model's prediction]

    Returns:
        [dict]: [response]
    """    
    _, y_hat = p.max(1)
    predicted_idx = y_hat.item()
    predicted_cat = class_names[predicted_idx]

    response = {}
    if predicted_cat == CAT_OTHER:
        response['fruit_visible'] = False
    else:
        response['fruit_visible'] = True
        # Calculate probability distribution ignoring 'other'
        new_p = p.flatten().tolist()
        del new_p[IDX_OTHER]
        # Scale so probabilities sum up to 1
        scale = 1 / sum(new_p)
        new_p = [scale * x for x in new_p]
        # Store category with highest probability
        response['result'] = {
            'category': predicted_cat,
            'probability': max(new_p)
        }
        # Store summary of all class_names and associated probabilities
        response['summary'] = {
            'class_names': CATEGORIES_NO_OTHER,
            'probabilities': new_p
        }
    return response

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        files = request.files.getlist('file[]')
        # Summarise predictions for each file
        ps = [get_prediction(image_bytes=file.read()) for file in files]
        ps_sum = reduce(torch.add, ps)
        ps_avg = torch.div(ps_sum, len(ps))
        # Process average of all predictions
        response = generate_response(ps_avg)
        return response, 200

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
