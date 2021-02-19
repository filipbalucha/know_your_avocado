# Model

The model of choice is the ResNet-18 CNN. The complexity of the task at hand is admittedly limited so 18 layers are sufficient.

Training was done using the Paperspace Gradient CLI, namely using the [P4000 machine](https://docs.paperspace.com/gradient/instances/instance-types).

## Dataset

Data was retrieved using Google and Bing. I do not own _any_ of the images used for training.

## Training

### 1. Create a new job

To retrain the model, we create a new job.

`gradient jobs create --container ufoym/deepo:all-py36 --machineType P4000 --command "cd model_cradle && python train.py --imsize 300 --out /artifacts --epochs 150" --workspace https://github.com/filipbalucha/know_your_avocado.git --projectId <project_id>`

After running the above command, the CLI will yield a job id.

### 2. View job logs

Once the job starts executing, we can view job logs using the job id:

`gradient jobs logs --id <job_id>`

### 3. Download the trained model

The model is saved in the `/artifacts` directory and can be downloaded to `your_path` using the following command:

`gradient jobs artifacts download --id <job_id> --destinationDir <your_path>`

## Serving

The model is served using a REST API built on the Python Flask micro-framework.

To run the API in development mode run:

`FLASK_ENV=development FLASK_APP=app.py flask run`

# UI

The UI is a React webpage developed using the Semantic UI frontend framework.

To fire up the UI in development mode run:

`yarn start`

from the `/frontend` directory.

# Deployment

The project is deployed on a free Heroku Dyno.
