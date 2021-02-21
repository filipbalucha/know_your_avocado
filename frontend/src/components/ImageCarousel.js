import React, { useEffect, useState } from "react";
import { List, Divider, Segment, Image } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import AddPhotoButton from "./Buttons/AddPhotoButton";
import PredictButton from "./Buttons/PredictButton";
import RemoveButton from "./Buttons/RemoveButton";

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

  return (
    <React.Fragment>
      <List horizontal={isDesktopOrLaptop} verticalAlign="middle">
        {imageUrls.map((imageUrl, index) => (
          <List.Item key={index}>
            <Image />
            <List.Content>
              <Segment basic>
                <Image centered rounded src={imageUrl} size="medium" />
                <RemoveButton
                  onClick={() => props.handleRemovePressed(index)}
                />
              </Segment>
            </List.Content>
          </List.Item>
        ))}
        {images.length < MAX_IMAGES && (
          <List.Item>
            <Image />
            <List.Content>
              <AddPhotoButton
                allowCamera={allowCamera}
                onClick={onAddPressed}
              />
            </List.Content>
          </List.Item>
        )}
      </List>
      <Divider />
      <PredictButton
        numImagesUploaded={images.length}
        onClick={onPredictPressed}
      />
    </React.Fragment>
  );
};
