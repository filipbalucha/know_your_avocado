import { Step, Icon } from "semantic-ui-react";

export const Steps = (props) => {
  const { status } = props;
  return (
    <Step.Group>
      <Step active={status === "AWAIT"}>
        <Icon name="camera" />
        <Step.Content>
          <Step.Title>Upload </Step.Title>
          {/* <Step.Description>Predict the ripeness of your 🥑</Step.Description> */}
        </Step.Content>
      </Step>

      <Step active={status !== "AWAIT"}>
        <Icon name="magic" />
        <Step.Content>
          <Step.Title>Predict</Step.Title>
          {/* <Step.Description>Predict the ripeness of your 🥑</Step.Description> */}
        </Step.Content>
      </Step>

      {/* <Step active={status === "FEEDBACK"}>
        <Icon name="file" />
        <Step.Content>
          <Step.Title>Feedback</Step.Title>
          <Step.Description>Predict the ripeness of your 🥑</Step.Description>
        </Step.Content>
      </Step> */}
    </Step.Group>
  );
};
