import React, { useRef, useContext } from "react";
import { Button } from "semantic-ui-react";
import ThemeContext from "../../context/ThemeContext";

const UploadImageButton = ({ onClick, icon }) => {
  const { darkMode } = useContext(ThemeContext);
  const imageInputRef = useRef(null);
  return (
    <React.Fragment>
      <Button
        inverted={darkMode}
        icon={icon}
        onClick={() => imageInputRef.current.click()}
      />
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={onClick}
      />
    </React.Fragment>
  );
};

export default UploadImageButton;
