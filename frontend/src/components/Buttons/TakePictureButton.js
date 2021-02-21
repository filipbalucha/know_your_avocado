import React, { useRef, useContext } from "react";
import { Button } from "semantic-ui-react";
import ThemeContext from "../../context/ThemeContext";

const TakePictureButton = ({ onClick }) => {
  const { darkMode } = useContext(ThemeContext);
  const cameraInputRef = useRef(null);
  return (
    <React.Fragment>
      <Button
        inverted={darkMode}
        icon="camera"
        onClick={() => cameraInputRef.current.click()}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        onChange={onClick}
      />
    </React.Fragment>
  );
};

export default TakePictureButton;
