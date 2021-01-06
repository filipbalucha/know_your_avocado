import React, { useEffect, useState } from "react";
import {
  Button,
  List,
  Divider,
  Segment,
  Image,
  Popup,
  Icon,
} from "semantic-ui-react";

const TakePicture = (props) => (
  <React.Fragment>
    <Button as="label" htmlFor="cameraInput" animated="fade">
      <Button.Content visible>
        <Icon name="photo" />
      </Button.Content>
      <Button.Content hidden>Picture</Button.Content>
    </Button>
    <input
      id="cameraInput"
      type="file"
      accept="image/*"
      capture="environment"
      hidden
      onChange={props.onClick}
    />
  </React.Fragment>
);

const UploadImage = (props) => (
  <React.Fragment>
    <Button as="label" htmlFor="libraryInput" animated="fade">
      <Button.Content visible>
        <Icon name="images" />
      </Button.Content>
      <Button.Content hidden>File</Button.Content>
    </Button>
    <input
      id="libraryInput"
      type="file"
      accept="image/*"
      multiple
      hidden
      onChange={props.onClick}
    />
  </React.Fragment>
);

const AddPhoto = (props) => {
  return (
    <Popup
      wide
      flowing
      size="large"
      trigger={<Button icon="plus" />}
      on={["hover", "click"]}
      mouseEnterDelay={7000}
      mouseLeaveDelay={7000}
    >
      <Button.Group>
        <TakePicture onClick={props.onClick} />
        <Button.Or />
        <UploadImage onClick={props.onClick} />
      </Button.Group>
    </Popup>
  );
};

export const ImageCarousel = (props) => {
  const MAX_IMAGES = 4;
  const { images, onPredictPressed, onAddPressed } = props;
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

  return (
    <Segment placeholder>
      <List animated horizontal verticalAlign="middle">
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
            <List.Content>
              <AddPhoto onClick={onAddPressed} />
            </List.Content>
          </List.Item>
        )}
      </List>
      <Divider horizontal />
      <Button disabled={images.length === 0} onClick={onPredictPressed}>
        Predict
      </Button>
    </Segment>
  );
};
