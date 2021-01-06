import React, { useEffect, useState } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import avocado from "./avocado.PNG";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { WelcomeElement } from "./components/WelcomeElement";
import { ImageCarousel } from "./components/ImageCarousel";
// import { Steps } from "./components/Steps";

function App() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [status, setStatus] = useState("AWAIT");
  const [response, setResponse] = useState();

  useEffect(() => {
    setStatus("AWAIT");
  }, [uploadedImages]);

  const handleImageUploaded = (event) => {
    console.log("here1");
    event.preventDefault();
    console.log("here");
    const image = event.target.files[0];
    // Append image to list of images
    setUploadedImages((prevImages) => [...prevImages, image]);
  };

  const handlePredictPressed = () => {
    const data = new FormData();
    // TODO: How to add multiple files?
    uploadedImages.forEach((image, i) => {
      data.append("file", image);
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
          console.log(data);
        }, 500); // TODO: simulate request timeout
      })
      .catch((err) => console.error(err));
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
        {/* <Steps /> */}
        <Body />
      </Segment>
      <Footer />
    </React.Fragment>
  );
}

export default App;
