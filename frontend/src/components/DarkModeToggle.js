import React, { useContext } from "react";
import { Checkbox, Icon } from "semantic-ui-react";
import "../css/Toggle.css";
import ThemeContext from "../context/ThemeContext";

export const DarkModeToggle = (props) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const style = { margin: 10 };
  return (
    <React.Fragment>
      <Icon name="sun" style={style} />
      <Checkbox
        checked={darkMode}
        toggle
        onChange={(_, { checked }) => setDarkMode(checked)}
      />
      <Icon name="moon" style={style} />
    </React.Fragment>
  );
};
