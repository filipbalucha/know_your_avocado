import React from "react";
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

const Graph = (props) => {
  const { result, summary } = props.response;
  const to_percentage = (val) => (val * 100).toFixed(2);
  const probability = to_percentage(result.probability);

  const ripeness = result.category.replace("avocado_", ""); // TODO: temp
  const data = {
    labels: summary.categories.map((cat) => cat.replace("avocado_", "")),
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
              <Header as="h3">
                This 🥑 is <i>{ripeness}</i>
              </Header>
              <p>with a {probability}% probability</p>
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
  return (
    <React.Fragment>
      <Header as="h3">Sorry, I was unable to spot any 🥑</Header>
      <p>Could you try retaking the photo?</p>
    </React.Fragment>
  );
};

const ButtonBack = ({ onClick }) => (
  <Button animated onClick={onClick}>
    <Button.Content visible>Back</Button.Content>
    <Button.Content hidden>
      <Icon name="arrow left" />
    </Button.Content>
  </Button>
);

export const Result = (props) => {
  const { loading, onBackClicked } = props;
  if (loading) return <Loader active content="Loading" />;
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
