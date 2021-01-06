import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  List,
  Divider,
  Segment,
  Image,
  Popup,
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
        wide
        flowing
        size="large"
        trigger={<Button icon="plus" />}
        on={["hover", "click"]}
        mouseEnterDelay={7000}
        mouseLeaveDelay={7000}
      >
        <Button.Group compact>
          <TakePicture onClick={onClick} icon="image" />
          <Button.Or />
          <UploadImage onClick={onClick} />
        </Button.Group>
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
            <List.Content>
              <AddPhoto allowCamera={allowCamera} onClick={onAddPressed} />
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
