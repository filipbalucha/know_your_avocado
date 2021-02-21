import { Button } from "semantic-ui-react";

const RemoveButton = (props) => {
  return (
    <Button
      inverted
      size="medium"
      icon="trash alternate"
      color="red"
      circular
      style={{
        position: "absolute",
        top: 20,
        left: 20,
      }}
      onClick={props.onClick}
    />
  );
};

export default RemoveButton;
