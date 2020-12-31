import avocado from "./avocado.png";
import React, { useState } from "react";
import {
  Segment,
  Button,
  Grid,
  Header,
  Icon,
  Divider,
  Image,
  Transition,
} from "semantic-ui-react";
import { TakePictureButton, UploadImageButton } from "./components/Buttons";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [category, setCategory] = useState();
  const [confidence, setConfidence] = useState();

  const handleImageUploaded = (event) => {
    const image = event.target.files[0];
    setUploadedImage(image);
  };

  const handlePredictPressed = () => {
    const data = new FormData();
    data.append("file", uploadedImage);
    fetch("/predict", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setCategory(data.category);
        setConfidence(data.confidence * 100);
      });
  };

  const Result = (props) => {
    let message;
    if (category == null || confidence == null) {
      return <React.Fragment />;
    } else if (category === "other") {
      message = "Sorry, I was unable to spot any 🥑";
    } else {
      let temp = category.replace("avocado_", "");
      message = `This 🥑 is ${temp} with a ${confidence.toFixed(2)}%
      probability!`;
    }
    return (
      <React.Fragment>
        <Divider />
        <p>{message}</p>
      </React.Fragment>
    );
  };

  return (
    <Segment padded="very" textAlign="center">
      <Image centered src={avocado} size="small" />
      <Header as="h1">Know your avocado!</Header>
      <Segment placeholder stackable>
        <Grid columns={2} textAlign="center">
          <Divider vertical>Or</Divider>
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="photo" />
              </Header>
              <TakePictureButton onClick={handleImageUploaded} />
            </Grid.Column>
            <Grid.Column>
              <Header icon>
                <Icon name="images" />
              </Header>
              <UploadImageButton onClick={handleImageUploaded} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment placeholder>
        <Transition visible={uploadedImage} animation="fade" duration={500}>
          <Image
            centered
            rounded
            src={uploadedImage && URL.createObjectURL(uploadedImage)}
            size="large"
            verticalAlign="middle"
          />
        </Transition>
        <Divider horizontal />
        <Button disabled={!uploadedImage} onClick={handlePredictPressed}>
          Predict
        </Button>
        <Result category={category} confidence={confidence}></Result>
      </Segment>
    </Segment>
  );
}

export default App;
