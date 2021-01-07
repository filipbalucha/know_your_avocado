import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  List,
  Grid,
  Divider,
  Segment,
  Image,
  Icon,
  Popup,
  Modal,
} from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

const TakePicture = ({ onClick }) => {
  const cameraInputRef = useRef(null);
  return (
    <React.Fragment>
      <Button icon="camera" onClick={() => cameraInputRef.current.click()} />
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

const UploadImage = ({ onClick, icon }) => {
  const imageInputRef = useRef(null);
  return (
    <React.Fragment>
      <Button icon={icon} onClick={() => imageInputRef.current.click()} />
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

const AddPhoto = ({ allowCamera, onClick }) => {
  if (!allowCamera) {
    return <UploadImage onClick={onClick} icon="plus" />;
  } else {
    return (
      <Popup
        trigger={<Button icon="plus" />}
        flowing
        hoverable
        mouseEnterDelay={150}
        mouseLeaveDelay={150}
      >
        <Grid divided columns="equal">
          <Grid.Column>
            <TakePicture onClick={onClick} />
          </Grid.Column>
          <Grid.Column>
            <UploadImage onClick={onClick} icon="image" />
          </Grid.Column>
        </Grid>
      </Popup>
    );
  }
};

export const ImageCarousel = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const MAX_IMAGES = 4;
  const { images, onPredictPressed, onAddPressed, allowCamera } = props;
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Revoke URLs to prevent memory leaks
    // Source: post by Enioluwa Segun @https://stackoverflow.com/questions/57315551/react-uploading-multiple-images
    imageUrls.forEach((url) => URL.revokeObjectURL(url));
    const urls = images.map((image) => URL.createObjectURL(image));
    setImageUrls(urls);
  }, [images]);

  const RemoveButton = (props) => {
    return (
      <Button
        size="medium"
        icon="cancel"
        color="red"
        circular
        style={{
          position: "absolute",
          top: 20,
          left: 20,
        }}
        onClick={props.onClick}
      />
    );
  };

  const PredictButton = ({ numImagesUploaded, onClick }) => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
      <React.Fragment>
        <Button
          fluid
          onClick={() => {
            if (numImagesUploaded < 2) setModalOpen(true);
            else onClick();
          }}
        >
          Predict
        </Button>
        <Modal
          size="tiny"
          open={modalOpen}
          onClose={() => console.log("close")}
        >
          <Modal.Header>Upload more images</Modal.Header>
          <Modal.Content>
            <p>
              Uploading more images can improve prediction. Would you like to do
              so?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              onClick={() => {
                setModalOpen(false);
                onClick();
              }}
            >
              <Icon name="remove" /> No
            </Button>
            <Button color="green" onClick={() => setModalOpen(false)}>
              <Icon name="checkmark" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  };

  return (
    <Segment placeholder>
      <List horizontal={isDesktopOrLaptop} verticalAlign="middle">
        {imageUrls.map((imageUrl, index) => (
          <List.Item key={index}>
            <Image />
            <List.Content>
              <Segment basic>
                <Image centered rounded src={imageUrl} size="medium" />
                <RemoveButton onClick={() => props.onRemovePressed(index)} />
              </Segment>
            </List.Content>
          </List.Item>
        ))}
        {images.length < MAX_IMAGES && (
          <List.Item>
            <Image />
            <List.Content>
              <AddPhoto allowCamera={allowCamera} onClick={onAddPressed} />
            </List.Content>
          </List.Item>
        )}
      </List>
      <Divider />
      <PredictButton
        numImagesUploaded={images.length}
        onClick={onPredictPressed}
      />
    </Segment>
  );
};
