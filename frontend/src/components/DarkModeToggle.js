import React from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import "../css/Toggle.css";

export const DarkModeToggle = (props) => {
  const style = { margin: 10 };
  return (
    <React.Fragment>
      <Icon name="moon" style={style} />
      <Checkbox toggle onChange={(_, { checked }) => props.onChange(checked)} />
      <Icon name="sun" style={style} />
    </React.Fragment>
  );
};
