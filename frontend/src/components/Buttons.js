import React, { useRef } from "react";
import { Button } from "semantic-ui-react";

export const TakePictureButton = (props) => {
  const inputEl = useRef(null);
  return (
    <React.Fragment>
      <input
        hidden
        ref={inputEl}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={props.onClick}
      />
      <Button primary onClick={() => inputEl.current.click()}>
        Take a picture
      </Button>
    </React.Fragment>
  );
};

export const UploadImageButton = (props) => {
  const inputEl = useRef(null);
  return (
    <React.Fragment>
      <input
        hidden
        ref={inputEl}
        type="file"
        accept="image/*"
        onChange={props.onClick}
      />
      <Button primary onClick={() => inputEl.current.click()}>
        Upload an image
      </Button>
    </React.Fragment>
  );
};
