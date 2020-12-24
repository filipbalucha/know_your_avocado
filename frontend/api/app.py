import io
import torchvision.transforms as transforms
import torch
from PIL import Image
from flask import Flask, request

import torch.nn as nn
import torch.nn.functional as F


class NN(nn.Module):
    def __init__(self, input_size, output_size):
        super(NN, self).__init__()
        self.linear_1 = nn.Linear(input_size, 128)
        self.linear_2 = nn.Linear(128, 64)
        self.linear_3 = nn.Linear(64, 32)
        self.linear_4 = nn.Linear(32, output_size)

    def forward(self, x):
        x = x.view(x.size(0), -1)
        out = self.linear_1(x)
        out = F.relu(out)
        out = self.linear_2(out)
        out = F.relu(out)
        out = self.linear_3(out)
        out = F.relu(out)
        out = self.linear_4(out)
        return out


CLASSES = {0: 'unripe', 1: 'ripe'}

# Source: https://pytorch.org/tutorials/intermediate/flask_rest_api_tutorial.html


app = Flask(__name__)
# TODO do something with these hideous 'magic' constants
model = NN(input_size=30000, output_size=2)
model.load_state_dict(torch.load('avocado_classifier'))
model.eval()  # TODO remove once training pipeline is setup


def transform_image(image_bytes):
    my_transforms = transforms.Compose([
        transforms.Resize((100, 100)),
        transforms.ToTensor(),
        # transforms.Normalize(
        #     [0.485, 0.456, 0.406],
        #     [0.229, 0.224, 0.225])
        # TODO normalize?
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
