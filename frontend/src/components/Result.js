import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Grid, Loader, Header, Popup } from "semantic-ui-react";

const Graph = (props) => {
  const NUM_DP = 2;
  const { result, summary } = props.response;

  const to_percentage = (val) => (val * 100).toFixed(NUM_DP);
  const probabilities = summary.probabilities.map(to_percentage);
  const probability = to_percentage(result.probability);

  const ripeness = result.category.replace("avocado_", ""); // TODO: temp
  const data = {
    labels: summary.categories,
    datasets: [
      {
        backgroundColor: ["#d9a26f", "#b5ba6a"],
        borderWidth: 1,
        label: "TBA",
        data: probabilities,
      },
    ],
  };
  return (
    <Grid textAlign="center">
      <Grid.Row>
        <Popup
          content={
            "The percentage indicates to what extent the 'AI' is certain about its prediction. It does not quantify the ripeness of the 🥑 as such."
          }
          header={"What does this mean?"}
          trigger={
            <Header as="h3">
              This 🥑 is <b>{ripeness}</b> with a {probability}% probability!
            </Header>
          }
        />
      </Grid.Row>
      <Grid.Row>
        <Doughnut data={data} />
      </Grid.Row>
    </Grid>
  );
};

const NotVisibleMessage = () => (
  <React.Fragment>
    <Header as="h3">Sorry, I was unable to spot any 🥑</Header>
    <p>Could you try retaking the photo?</p>
  </React.Fragment>
);

export const Result = (props) => {
  const { loading } = props;
  const { fruit_visible } = props.response;
  if (loading) {
    return <Loader active>Loading</Loader>;
  } else if (fruit_visible) {
    return <Graph {...props} />;
  } else {
    return <NotVisibleMessage />;
  }
};
