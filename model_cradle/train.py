#!/usr/bin/env python
# coding: utf-8

import time
import copy
import torch
import torch.nn as nn
import torchvision.models as models
import torchvision.transforms as transforms
from torchvision.datasets import ImageFolder
from torch.utils.data.dataloader import DataLoader
from torch.utils.data import random_split, Dataset
from argparse import ArgumentParser

class DatasetFromSubset(Dataset):
    def __init__(self, subset, transform=None):
        self.subset = subset
        self.transform = transform

    def __getitem__(self, index):
        x, y = self.subset[index]
        if self.transform:
            x = self.transform(x)
        return x, y

    def __len__(self):
        return len(self.subset)


def get_mean_std(loader):
    # Source: Post by "kuzand" @https://discuss.pytorch.org/t/computing-the-mean-and-std-of-dataset/34949/2
    mean = 0.
    std = 0.
    for images, _ in loader:
        batch_samples = images.size(0) # batch size (the last batch can have smaller size!)
        images = images.view(batch_samples, images.size(1), -1)
        mean += images.mean(2).sum(0)
        std += images.std(2).sum(0)
    mean /= len(loader.dataset)
    std /= len(loader.dataset)
    return mean, std

# Train the model
def train_model(model, criterion, optimizer, scheduler, dataloaders, dataset_sizes, device, num_epochs=25):
    since = time.time()

    best_model_wts = copy.deepcopy(model.state_dict())
    best_acc = 0.0

    for epoch in range(num_epochs):
        print('Epoch {}/{}'.format(epoch, num_epochs - 1))
        print('-' * 10)

        # Each epoch has a training and validation phase
        for phase in ['train', 'val']:
            if phase == 'train':
                model.train()  # Set model to training mode
            else:
                model.eval()   # Set model to evaluate mode

            running_loss = 0.0
            running_corrects = 0

            # Iterate over data.
            for inputs, labels in dataloaders[phase]:
                inputs = inputs.to(device)
                labels = labels.to(device)

                # zero the parameter gradients
                optimizer.zero_grad()

                # forward
                # track history if only in train
                with torch.set_grad_enabled(phase == 'train'):
                    if phase=='train': 
                        outputs, _ = model(inputs) 
                    else: 
                        outputs=model(inputs)
                    _, preds = torch.max(outputs, 1)
                    loss = criterion(outputs, labels)

                    # backward + optimize only if in training phase
                    if phase == 'train':
                        loss.backward()
                        optimizer.step()

                # statistics
                running_loss += loss.item() * inputs.size(0)
                running_corrects += torch.sum(preds == labels.data)
            if phase == 'train':
                scheduler.step()

            epoch_loss = running_loss / dataset_sizes[phase]
            epoch_acc = running_corrects.double() / dataset_sizes[phase]

            print('{} Loss: {:.4f} Acc: {:.4f}'.format(phase, epoch_loss, epoch_acc))

            # deep copy the model
            if phase == 'val' and epoch_acc > best_acc:
                best_acc = epoch_acc
                best_model_wts = copy.deepcopy(model.state_dict())

        print()

    time_elapsed = time.time() - since
    print('Training complete in {:.0f}m {:.0f}s'.format(
        time_elapsed // 60, time_elapsed % 60))
    print('Best val Acc: {:4f}'.format(best_acc))

    # load best model weights
    model.load_state_dict(best_model_wts)
    return model


DATA_DIR = 'data'

def main():
    # Parse arguments
    parser = ArgumentParser()
    parser.add_argument("--imsize", dest="imsize",
                        help="size of images used to train the CNN")
    parser.add_argument("-o", "--out", dest="output",
                        help="location to which trained model will be exported"
                        )
    parser.add_argument("-e", "--epochs", dest="num_epochs",
                        help="number of epochs"
                        )
    imsize = parser.parse_args().imsize
    imsize = int(imsize)
    output = parser.parse_args().output
    num_epochs = parser.parse_args().num_epochs
    num_epochs = int(num_epochs)
    
    print(f'Imsize: {imsize}')
    print(f'Num epochs: {num_epochs}')
    
    # Fixed seed for reproducibility of results
    torch.manual_seed(42)

    # Set device
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    print(f'Device: {device}')

    # Load dataset
    full_dataset = ImageFolder(DATA_DIR)
    class_names = full_dataset.classes
    
    # Random split into training and testing dataset
    train_size = int(0.8 * len(full_dataset))
    test_size = len(full_dataset) - train_size
    train_subset, test_subset = random_split(full_dataset, [train_size, test_size])

    # Compute mean and std of training data
    train_copy = copy.copy(train_subset)  # Copy training dataset to prevent in-place modifications
    train_dataset = DatasetFromSubset(train_copy, transform=transforms.Compose([
        transforms.Resize((imsize, imsize)),
        transforms.ToTensor()
    ]))
    data_loader = DataLoader(train_dataset, batch_size=4, shuffle=False, num_workers=8)
    train_mean, train_std = get_mean_std(data_loader)
    print(f'Training dataset:')
    print(f'\tmean: {train_mean}')
    print(f'\tstd:  {train_std}')

    # Source: https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html
    # Data augmentation and normalization for training
    data_transforms = {
        'train': transforms.Compose([
            # transforms.RandomResizedCrop(int(0.8 * imsize)),
            transforms.RandomResizedCrop(imsize),
            transforms.RandomHorizontalFlip(),
            transforms.ToTensor(),
            transforms.Normalize(mean=train_mean, std=train_std)
        ]),
        'val': transforms.Compose([
            transforms.Resize(imsize),
            transforms.CenterCrop(int(0.8 * imsize)),
            transforms.ToTensor(),
            transforms.Normalize(mean=train_mean, std=train_std)
        ]),
    }

    train_dataset = DatasetFromSubset(train_subset, transform=data_transforms['train'])
    val_dataset = DatasetFromSubset(test_subset, transform=data_transforms['val'])
    dataloaders = {
        'train': DataLoader(train_dataset, batch_size=4, shuffle=True, num_workers=8),
        'val': DataLoader(val_dataset, batch_size=4, shuffle=True, num_workers=8)
    }
    dataset_sizes = { 'train': len(train_subset), 'val': len(test_subset) }

    # Load pre-trained model
    # model_ft = models.resnet18(pretrained=True)
    model_ft = models.inception_v3(pretrained=True)

    num_ftrs = model_ft.fc.in_features
    model_ft.fc = nn.Linear(num_ftrs, len(class_names))
    model_ft = model_ft.to(device)
    criterion = nn.CrossEntropyLoss()
    # Observe that all parameters are being optimized
    optimizer_ft = torch.optim.SGD(model_ft.parameters(), lr=0.001, momentum=0.9)

    # Decay LR by a factor of 0.1 every 7 epochs
    exp_lr_scheduler = torch.optim.lr_scheduler.StepLR(optimizer_ft, step_size=7, gamma=0.1)

    # Train model
    model_ft = train_model(
        model_ft, 
        criterion, 
        optimizer_ft, 
        exp_lr_scheduler, 
        dataloaders, 
        dataset_sizes, 
        device=device, 
        num_epochs=num_epochs
    )

    # Save trained model
    torch.save(model_ft.state_dict(), output)

if __name__ == "__main__":
    main()