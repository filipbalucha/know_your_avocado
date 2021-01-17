import { Image, Menu, Container } from "semantic-ui-react";
import { LanguageDropdown } from "./LanguageDropdown";
import { DarkModeToggle } from "./DarkModeToggle";
import avocado from "../avocado.PNG";
import "../css/Toggle.css";

export const MenuBar = (props) => {
  return (
    <Menu borderless fixed="top" style={{ borderBottom: "1px solid #d2d880" }}>
      <Container>
        <Menu.Item header>
          <Image size="mini" src={avocado} style={{ marginRight: "1.5em" }} />
          KYA!
        </Menu.Item>
        <Menu.Item position="right">
          <DarkModeToggle onChange={() => {}} />
        </Menu.Item>
        <Menu.Item>
          <LanguageDropdown setLanguage={props.setLanguage} />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
