import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Transition,
} from "semantic-ui-react";
import avocado from "./avocado.png";
import { TakePictureButton, UploadImageButton } from "./components/Buttons";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [status, setStatus] = useState("AWAIT");
  const [response, setResponse] = useState();

  useEffect(() => {
    setStatus("AWAIT");
  }, [uploadedImage]);

  const handleImageUploaded = (event) => {
    event.preventDefault();
    const image = event.target.files[0];
    setUploadedImage(image);
  };

  const handlePredictPressed = () => {
    const data = new FormData();
    data.append("file", uploadedImage);
    setStatus("LOADING");
    fetch("/predict", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setResponse(data);
          setStatus("FINISHED");
          console.log(data);
        }, 500); // TODO: simulate request timeout
      })
      .catch((err) => console.error(err));
  };

  return (
    <React.Fragment>
      <Segment
        basic
        padded="very"
        textAlign="center"
        style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
      >
        <Image centered src={avocado} size="small" />
        <Header as="h1">Know your avocado!</Header>
        <Header as="h3">Say no to unripe avocados.</Header>
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
        {uploadedImage && (
          <Segment placeholder stackable>
            <Grid columns={2} celled="internally" textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Transition
                    visible={uploadedImage}
                    animation="fade"
                    duration={500}
                  >
                    <Image
                      centered
                      rounded
                      src={uploadedImage && URL.createObjectURL(uploadedImage)}
                      size="large"
                      verticalAlign="middle"
                    />
                  </Transition>
                  <Divider horizontal />
                  {status === "AWAIT" && (
                    <Button
                      disabled={!uploadedImage}
                      onClick={handlePredictPressed}
                    >
                      Predict
                    </Button>
                  )}
                </Grid.Column>
                {status !== "AWAIT" && (
                  <Grid.Column>
                    <Result
                      loading={status === "LOADING"}
                      response={response}
                    ></Result>
                  </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          </Segment>
        )}
      </Segment>
      <Footer />
    </React.Fragment>
  );
}

export default App;
