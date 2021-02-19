import React, { useEffect, useState, useContext } from "react";
import { Segment } from "semantic-ui-react";
import { Result } from "./Result";
import { WelcomeElement } from "./WelcomeElement";
import { ImageCarousel } from "./ImageCarousel";
import { isBrowser } from "react-device-detect";
import ThemeContext from "../context/ThemeContext";

export const Body = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const { status, setStatus, setError } = props;
  const [uploadedImages, setUploadedImages] = useState([]);
  const [response, setResponse] = useState();

  useEffect(() => {
    setStatus("AWAIT");
  }, [uploadedImages, setStatus]);

  const handleImageUploaded = (event) => {
    event.preventDefault();
    // Append image to list of images
    setUploadedImages((prevImages) => {
      let files = [...prevImages, ...event.target.files];
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
        darkMode={darkMode}
      />
    );
  }
  return (
    <Segment
      placeholder
      inverted={darkMode}
      style={
        darkMode ? { backgroundColor: "#303030", borderColor: "#454545" } : null
      }
      content={content}
    />
  );
};
