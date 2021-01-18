import React from "react";
import {
  Grid,
  Button,
  Header,
  Divider,
  Icon,
  Segment,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const TakePicture = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Button as="label" htmlFor="cameraInput" content={t("take_picture")} />
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
};

const UploadImage = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Button as="label" htmlFor="libraryInput" content={t("upload_image")} />
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
};

export const WelcomeElement = (props) => {
  const { t } = useTranslation();
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
        <Divider vertical content={t("or")} />
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
  return element;
};
