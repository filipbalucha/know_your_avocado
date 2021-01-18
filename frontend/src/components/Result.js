import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import {
  Grid,
  Loader,
  Header,
  Popup,
  Segment,
  Button,
  Icon,
} from "semantic-ui-react";
import "chartjs-plugin-labels";
import { useTranslation } from "react-i18next";
import ThemeContext from "../context/ThemeContext";

const Graph = (props) => {
  const { result, summary } = props.response;
  const { t } = useTranslation();

  const to_percentage = (val) => (val * 100).toFixed(2);
  const probability = to_percentage(result.probability);

  const ripeness = t(result.category);
  const data = {
    labels: summary.categories.map((cat) => t(cat)),
    datasets: [
      {
        backgroundColor: ["#d9a26f", "#b5ba6a"],
        borderWidth: 1,
        data: summary.probabilities,
      },
    ],
  };
  return (
    <Grid textAlign="center" columns="equal">
      <Grid.Row>
        <Popup
          content={
            "The percentage indicates to what extent the 'AI' is certain about its prediction. It does not quantify the ripeness of the 🥑 as such."
          }
          header={"What does this mean?"}
          trigger={
            <Segment basic>
              <Header as="h3" content={t()}>
                {t("this_avocado")} <i>{ripeness}</i>
              </Header>
              <p>{t("with_probability", { probability })}</p>
            </Segment>
          }
        />
      </Grid.Row>
      <Grid.Row>
        <Segment basic style={{ height: "30vh" }}>
          <Pie
            data={data}
            options={{
              maintainAspectRatio: false,
              events: [], // disable everything on hover
              legend: {
                display: false,
              },
              plugins: {
                labels: {
                  render: "label",
                  fontColor: "white",
                  fontSize: 16,
                },
              },
            }}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};

const NotVisibleMessage = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Header as="h3" content={t("cannot_spot")} />
      <p>{t("retake_photo")}</p>
    </React.Fragment>
  );
};

const ButtonBack = ({ onClick }) => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <Button animated inverted={darkMode} onClick={onClick}>
      <Button.Content visible content={t("back")} />
      <Button.Content hidden>
        <Icon name="arrow left" />
      </Button.Content>
    </Button>
  );
};

export const Result = (props) => {
  const { loading, onBackClicked } = props;
  const { t } = useTranslation();

  if (loading) return <Loader active content={t("loading")} />;

  let out;
  if (props.response.fruit_visible) {
    out = <Graph {...props} />;
  } else {
    out = <NotVisibleMessage />;
  }
  return (
    <React.Fragment>
      {out}
      <ButtonBack onClick={onBackClicked} />
    </React.Fragment>
  );
};
