import io
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision.transforms as transforms
import torchvision.models as models
from PIL import Image
from flask import Flask, request

CLASSES = {0: 'ripe', 1: 'unripe'}
TRAIN_MEAN = [0.5751, 0.5640, 0.4498]
TRAIN_STD = [0.2618, 0.2595, 0.2629]
IMAGE_SIZE = 125

# Source: https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html
app = Flask(__name__)
model = models.resnet18(pretrained=True)

num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, len(CLASSES))

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
    image = Image.open(io.BytesIO(image_bytes))
    return my_transforms(image).unsqueeze(0)


def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)
    outputs = F.softmax(model.forward(tensor))
    p, y_hat = outputs.max(1)
    predicted_idx = y_hat.item()
    return CLASSES[predicted_idx], p.item()


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        predicted_idx, confidence = get_prediction(image_bytes=img_bytes)
        return {'ripeness': predicted_idx, 'confidence': confidence}


if __name__ == '__main__':
    app.run()
