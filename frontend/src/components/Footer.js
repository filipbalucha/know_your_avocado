import {
  Segment,
  Container,
  Icon,
  Grid,
  Header,
  List,
} from "semantic-ui-react";

const URL_LINKEDIN = "https://www.linkedin.com/in/filip-balucha/";
const URL_GITHUB = "https://github.com/filipbalucha";
const URL_FACEBOOK = "https://www.facebook.com/filiposlav";
const EMAIL = "balucha.filip2@gmail.com";
const model = "ResNet-18 CNN";
var year = new Date().getFullYear();

export const Footer = (props) => {
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: "1.5em 0em",
        width: "100%",
        bottom: 0,
        flex: 1,
      }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Author" />
              <p>Filip Balucha &copy;{year}</p>
            </Grid.Column>
            <Grid.Column width={10}>
              <Header as="h4" inverted>
                Why?
              </Header>
              <p>
                I struggle to tell ripe avocados from unripe ones, so I trained
                a deep learning model based on the {model} to help me with the
                task. Hope it can help you too 😊. Get in touch if you have any
                requests or suggestions.
              </p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted>
                Contact
              </Header>
              <List horizontal inverted verticalAlign="middle">
                <List.Item href={URL_LINKEDIN}>
                  <Icon name="linkedin" />
                </List.Item>
                <List.Item href={URL_GITHUB}>
                  <Icon name="github" />
                </List.Item>
                <List.Item href={URL_FACEBOOK}>
                  <Icon name="facebook" />
                </List.Item>
                <List.Item href={`mailto: ${EMAIL}`}>
                  <Icon name="mail" />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
