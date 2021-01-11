import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import { Result } from "./Result";
import { WelcomeElement } from "./WelcomeElement";
import { ImageCarousel } from "./ImageCarousel";
import { isBrowser } from "react-device-detect";

export const Body = (props) => {
  const { status, setStatus, setError } = props; // TODO: decide if necessary
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
      <WelcomeElement allowCamera={!isBrowser} onClick={handleImageUploaded} />
    );
  }
  return <Segment placeholder content={content} />;
};
