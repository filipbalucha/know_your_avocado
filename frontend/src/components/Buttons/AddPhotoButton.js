import React, { useContext } from "react";
import { Button, Grid, Popup } from "semantic-ui-react";
import ThemeContext from "../../context/ThemeContext";
import TakePictureButton from "./TakePictureButton";
import UploadImageButton from "./UploadImageButton";

const AddPhotoButton = ({ allowCamera, onClick }) => {
  const { darkMode } = useContext(ThemeContext);
  if (!allowCamera) {
    return <UploadImageButton onClick={onClick} icon="plus" />;
  } else {
    return (
      <Popup
        inverted={darkMode}
        trigger={<Button inverted={darkMode} icon="plus" />}
        flowing
        hoverable
        mouseEnterDelay={150}
        mouseLeaveDelay={150}
      >
        <Grid divided columns="equal">
          <Grid.Column>
            <TakePictureButton onClick={onClick} />
          </Grid.Column>
          <Grid.Column>
            <UploadImageButton onClick={onClick} icon="image" />
          </Grid.Column>
        </Grid>
      </Popup>
    );
  }
};

export default AddPhotoButton;
