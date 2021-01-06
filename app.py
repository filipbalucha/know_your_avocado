import io
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image
from flask import Flask, request, send_from_directory
from flask_cors import CORS
from functools import reduce

CATEGORIES = ['avocado_ripe', 'avocado_unripe', 'other']
TRAIN_MEAN = [0.5926, 0.5690, 0.4799]
TRAIN_STD = [0.2370, 0.2411, 0.2543]
IMAGE_SIZE = 125

CAT_OTHER = 'other'
IDX_OTHER = CATEGORIES.index(CAT_OTHER)
CATEGORIES_NO_OTHER = [cat for cat in CATEGORIES if cat is not CAT_OTHER]

# Source: https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html
app = Flask(__name__, static_folder='frontend/build', static_url_path='')
cors = CORS(app)

model = models.resnet18(pretrained=True)

num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, len(CATEGORIES))

model.load_state_dict(torch.load('notebook/model'))
model.eval()


def transform_image(image_bytes):
    my_transforms = transforms.Compose([
        transforms.Resize(IMAGE_SIZE),
        transforms.ToTensor(),
        transforms.Normalize(
            mean=TRAIN_MEAN,
            std=TRAIN_STD
        )
    ])
    img = Image.open(io.BytesIO(image_bytes))
    return my_transforms(img).unsqueeze(0)


def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)

    logits = model.forward(tensor)
    probas = F.softmax(logits, dim=-1)
    return probas

def process_probas(ps):
    _, y_hat = ps.max(1)
    predicted_idx = y_hat.item()
    predicted_cat = CATEGORIES[predicted_idx]

    response = {}
    if predicted_cat == CAT_OTHER:
        response['fruit_visible'] = False
    else:
        response['fruit_visible'] = True
        # Calculate softmax over all categories except 'other'
        new_ps = ps.flatten().tolist()
        del new_ps[IDX_OTHER]
        new_ps = torch.Tensor(new_ps)
        # Scale so probabilities sum up to 1
        ps_sum = torch.sum(new_ps)
        coef = 1 / ps_sum
        new_ps = torch.mul(new_ps, coef)
        new_ps = new_ps.flatten().tolist()
        # Store category with highest probability
        response['result'] = {
            'category': predicted_cat,
            'probability': max(new_ps)
        }
        # Store summary of all categories and associated probabilities
        response['summary'] = {
            'categories': CATEGORIES_NO_OTHER,
            'probabilities': new_ps
        }
    return response

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        files = request.files.getlist('file[]')
        ps = []
        len_ps = len(files)
        for file in files: 
            img_bytes = file.read()
            p = get_prediction(image_bytes=img_bytes)
            ps.append(p)
        sum_ps = reduce(torch.add, ps)
        avg_ps = torch.div(sum_ps, len_ps)
        
        response = process_probas(avg_ps)
        return response, 200

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run()
