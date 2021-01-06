import React, { useEffect, useState } from "react";
import {
  Header,
  Image,
  Segment,
  Message,
  Transition,
  Container,
} from "semantic-ui-react";
import avocado from "./avocado.PNG";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { WelcomeElement } from "./components/WelcomeElement";
import { ImageCarousel } from "./components/ImageCarousel";
import { Steps } from "./components/Steps";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [status, setStatus] = useState("AWAIT");
  const [response, setResponse] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus("AWAIT");
  }, [uploadedImages]);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => {
      setError(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleImageUploaded = (event) => {
    event.preventDefault();
    // Append image to list of images
    setUploadedImages((prevImages) => [...prevImages, ...event.target.files]);
  };

  const handlePredictPressed = () => {
    const data = new FormData();
    // TODO: How to add multiple files?
    uploadedImages.forEach((image, i) => {
      data.append("files[]", image);
    });
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
        }, 500); // TODO: simulate request timeout
      })
      .catch((err) => {
        console.error(err);
        setStatus("AWAIT");
        setError(true);
      });
  };

  const MessageExampleNegative = () => (
    <Message negative>
      <Message.Header>Server error</Message.Header>
      <p>Please try again later</p>
    </Message>
  );

  const handleImageRemoved = (index) => {
    if (index === -1) return;
    const images = Array.from(uploadedImages);
    images.splice(index, 1);
    setUploadedImages(images);
  };

  const Body = () => {
    // const { status, response, handlePredictPressed } = props; // TODO: decide if necessary
    if (status !== "AWAIT")
      return <Result loading={status === "LOADING"} response={response} />;
    if (uploadedImages.length)
      return (
        <ImageCarousel
          images={uploadedImages}
          onPredictPressed={handlePredictPressed}
          onAddPressed={handleImageUploaded}
          onRemovePressed={handleImageRemoved}
        />
      );
    return <WelcomeElement onClick={handleImageUploaded} />;
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
        <Steps />
        <Body />
      </Segment>

      <Transition visible={error} animation="fade up" duration={500}>
        <Container
          style={{
            position: "absolute",
            width: "20vw",
            bottom: 10,
            right: 10,
          }}
        >
          <MessageExampleNegative />
        </Container>
      </Transition>
      <Footer />
    </React.Fragment>
  );
}

export default App;
