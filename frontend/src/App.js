import React, { useEffect, useState } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import avocado from "./avocado.PNG";
import { Result } from "./components/Result";
import { Footer } from "./components/Footer";
import { WelcomeElement } from "./components/WelcomeElement";
import { ImageCarousel } from "./components/ImageCarousel";
import { Steps } from "./components/Steps";
import { MenuBar } from "./components/MenuBar";
import { ErrorMessage } from "./components/ErrorMessage";
import { isBrowser } from "react-device-detect";

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
    const timer = setTimeout(() => setError(false), 2500);
    return () => clearTimeout(timer);
  }, [error]);

  const handleImageUploaded = (event) => {
    event.preventDefault();
    // Append image to list of images
    setUploadedImages((prevImages) => {
      let files = [...prevImages, ...event.target.files];
      const fileNames = files.map((file) => file.name);
      // Drop duplicate files
      files = files.filter((file, i) => fileNames.indexOf(file.name) === i);
      return files;
    });
  };

  const handlePredictPressed = () => {
    const data = new FormData();
    uploadedImages.forEach((image, i) => {
      data.append("file[]", image);
    });
    setStatus("LOADING");
    fetch("/predict", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setStatus("FINISHED");
      })
      .catch((err) => {
        console.error(err);
        setStatus("AWAIT");
        setError(true);
      });
  };

  const handleRemovePressed = (index) => {
    if (index === -1) return;
    const images = Array.from(uploadedImages);
    images.splice(index, 1);
    setUploadedImages(images);
  };

  const Body = () => {
    // const { status, response, handlePredictPressed } = props; // TODO: decide if necessary
    let content;
    if (status !== "AWAIT") {
      content = (
        <Result
          loading={status === "LOADING"}
          response={response}
          onBackClicked={() => setStatus("AWAIT")}
        />
      );
    } else if (uploadedImages.length) {
      content = (
        <ImageCarousel
          images={uploadedImages}
          onPredictPressed={handlePredictPressed}
          onAddPressed={handleImageUploaded}
          handleRemovePressed={handleRemovePressed}
          allowCamera={!isBrowser}
        />
      );
    } else {
      content = (
        <WelcomeElement
          allowCamera={!isBrowser}
          onClick={handleImageUploaded}
        />
      );
    }
    return <Segment placeholder content={content} />;
  };

  return (
    <React.Fragment>
      <Segment
        basic
        padded={"very"}
        textAlign="center"
        style={{
          paddingTop: "5em",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          margin: 0,
        }}
      >
        <MenuBar />
        <Image centered src={avocado} size="small" />
        <Header as="h1">Know Your Avocado!</Header>
        <p>Say No to Unripe Avocados.</p>
        <Steps status={status} handleUploadClicked={() => setStatus("AWAIT")} />
        <Body />
      </Segment>
      <ErrorMessage visible={error} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
