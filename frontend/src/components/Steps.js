import { Step, Icon } from "semantic-ui-react";

export const Steps = (props) => {
  const { status } = props;
  return (
    <Step.Group unstackable>
      <Step active={status === "AWAIT"}>
        <Icon name="upload" />
        <Step.Content>
          <Step.Title>Upload </Step.Title>
        </Step.Content>
      </Step>

      <Step active={status !== "AWAIT"}>
        <Icon name="magic" />
        <Step.Content>
          <Step.Title>Predict</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
};
