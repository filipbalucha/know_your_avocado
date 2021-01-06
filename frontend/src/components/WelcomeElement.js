import React from "react";
import {
  Grid,
  Button,
  Header,
  Divider,
  Icon,
  Segment,
} from "semantic-ui-react";

const TakePicture = (props) => (
  <React.Fragment>
    <Button as="label" htmlFor="cameraInput" content="Take a Picture" />
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
    <Button as="label" htmlFor="libraryInput" content="Upload an Image" />
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

export const WelcomeElement = (props) => {
  const { allowCamera, onClick } = props;
  let element;
  if (!allowCamera) {
    element = (
      <Segment basic>
        <Header icon>
          <Icon name="images" />
        </Header>
        <UploadImage onClick={onClick} />
      </Segment>
    );
  } else {
    element = (
      <Grid columns={2} textAlign="center">
        <Divider vertical>Or</Divider>
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <Header icon>
              <Icon name="photo" />
            </Header>
            <TakePicture onClick={onClick} />
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="images" />
            </Header>
            <UploadImage onClick={onClick} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
  return <Segment placeholder>{element}</Segment>;
};
