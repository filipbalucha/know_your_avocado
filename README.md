# Dataset

Data retrieved from Google and Bing. I do# _not_ own any of the photos used for training.

# Model

The model of choice is the ResNet-18 CNN. The complexity of the task at hand is admittedly limited so the 18 layers are sufficient.

## Training

Training is done using the Paperspace Gradient CLI. We train on the [P4000 machine](https://docs.paperspace.com/gradient/instances/instance-types). The reason is twofold: it's free and it sports the CUDA-enabled NVIDIA Quadro P4000 GPU.

Every time the model is to be trained, a new _job_ is created.

### Create a new job

`gradient jobs create --container ufoym/deepo:all-py36 --machineType P4000 --command "cd model_cradle && python train.py --imsize 250 --out /artifacts --epochs 150" --workspace https://github.com/filipbalucha/know_your_avocado.git --projectId <project_id>`

After running the above command, the CLI will yield a job id.

### View job logs

Once the job starts executing, we can view job logs using the job id obtained above:

`gradient jobs logs --id <job_id>`

### Download the trained model

The model (which we saved to the `/artifacts` directory) can be downloaded to `your_path` using the following command:

`gradient jobs artifacts download --id <job_id> --destinationDir <your_path>`

# Serving the model

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
