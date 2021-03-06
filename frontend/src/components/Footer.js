import { useState, useContext } from "react";
import {
  Segment,
  Container,
  Icon,
  Grid,
  Header,
  List,
} from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../context/ThemeContext";

const URL_LINKEDIN = "https://www.linkedin.com/in/filip-balucha/";
const URL_GITHUB = "https://github.com/filipbalucha";
const URL_FACEBOOK = "https://www.facebook.com/filiposlav";
const EMAIL = "balucha.filip2@gmail.com";
const model = "ResNet-18 CNN";
var year = new Date().getFullYear();

export const Footer = (props) => {
  const { t } = useTranslation();
  const { darkMode } = useContext(ThemeContext);

  const [accuracy, setAccuracy] = useState(null);
  const to_percent = (val) => Math.round(val * 100) + "%";
  fetch("/model_accuracy", {
    method: "GET",
  })
    .then((res) => res.json())
    .then(({ accuracy }) => {
      setAccuracy(to_percent(accuracy));
    })
    .catch((err) => {
      console.error(err);
    });
  const style = {
    padding: "1.5em 0em",
    width: "100%",
    bottom: 0,
    flex: 1,
  };
  if (darkMode) {
    style.borderTop = "1px solid #C5844B";
  }
  return (
    <Segment inverted vertical style={style}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content={t("author")} />
              <p>Filip Balucha &copy;{year}</p>
            </Grid.Column>

            <Grid.Column width={7}>
              <Header as="h4" inverted content={t("why")} />

              <p>{t("motivation", { model, accuracy })}</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Cookies" />
              <p>{t("cookie_use")}</p>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header as="h4" inverted content={t("contact")} />
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
              <p>{t("get_in_touch")}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
