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
      hidden
      onChange={props.onClick}
    />
  </React.Fragment>
);

export const WelcomeElement = (props) => (
  <Segment placeholder>
    <Grid columns={2} textAlign="center">
      <Divider vertical>Or</Divider>
      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <Header icon>
            <Icon name="photo" />
          </Header>
          <TakePicture onClick={props.onClick} />
        </Grid.Column>
        <Grid.Column>
          <Header icon>
            <Icon name="images" />
          </Header>
          <UploadImage onClick={props.onClick} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
