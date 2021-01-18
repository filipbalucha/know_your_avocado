import { useContext } from "react";
import { Image, Menu, Container } from "semantic-ui-react";
import { LanguageDropdown } from "./LanguageDropdown";
import { DarkModeToggle } from "./DarkModeToggle";
import avocado from "../avocado.PNG";
import "../css/Toggle.css";
import ThemeContext from "../context/ThemeContext";

export const MenuBar = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const underlineColor = darkMode ? "#C5844B" : "#d2d880";
  return (
    <Menu
      inverted={darkMode}
      borderless
      fixed="top"
      style={{
        borderBottom: `1px solid ${underlineColor}`,
      }}
    >
      <Container>
        <Menu.Item header>
          <Image size="mini" src={avocado} style={{ marginRight: "1.5em" }} />
          KYA!
        </Menu.Item>
        <Menu.Item position="right">
          <DarkModeToggle />
        </Menu.Item>
        <Menu.Item>
          <LanguageDropdown setLanguage={props.setLanguage} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
