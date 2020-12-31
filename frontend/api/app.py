import io
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image
from flask import Flask, request

CATEGORIES = ['avocado_ripe', 'avocado_unripe', 'other']
TRAIN_MEAN = [0.5926, 0.5690, 0.4799]
TRAIN_STD = [0.2370, 0.2411, 0.2543]
IMAGE_SIZE = 125

# Source: https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html
app = Flask(__name__)

model = models.resnet18(pretrained=True)

num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, len(CATEGORIES))

model.load_state_dict(torch.load('../../notebook/model'))
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
    outputs = F.softmax(model.forward(tensor), dim=-1)
    p, y_hat = outputs.max(1)
    predicted_idx = y_hat.item()
    predicted_cat = CATEGORIES[predicted_idx]
    return predicted_cat, p.item()


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        predicted_cat, confidence = get_prediction(image_bytes=img_bytes)
        return {'category': predicted_cat, 'confidence': confidence}


if __name__ == '__main__':
    app.run()
