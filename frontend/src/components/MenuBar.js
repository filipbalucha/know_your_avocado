import React, { useState } from "react";
import {
  Image,
  Dropdown,
  Menu,
  Container,
  Checkbox,
  Icon,
} from "semantic-ui-react";
import avocado from "../avocado.PNG";
import "../css/Toggle.css";

const LanguageDropdown = (props) => {
  const languageOptions = [
    { key: "English", text: "EN 🇬🇧", value: "gb" },
    { key: "Slovak", text: "SK 🇸🇰", value: "sk" },
  ];
  const [language, setLanguage] = useState("gb");
  return (
    <Dropdown
      item
      button
      text={<Icon name="world" />}
      options={languageOptions}
      onChange={(_, { value }) => setLanguage(value)}
    />
  );
};

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false); // TODO: fetch user preference
  const style = { margin: 10 };
  return (
    <React.Fragment>
      <Icon name="moon" style={style} />
      <Checkbox toggle onChange={(_, { checked }) => setDarkMode(checked)} />
      <Icon name="sun" style={style} />
    </React.Fragment>
  );
};

export const MenuBar = (props) => {
  return (
    <Menu borderless fixed="top" style={{ borderBottom: "1px solid #d2d880" }}>
      <Container>
        <Menu.Item header>
          <Image size="mini" src={avocado} style={{ marginRight: "1.5em" }} />
          KNYA!
        </Menu.Item>
        <Menu.Item position="right">
          <DarkModeToggle />
        </Menu.Item>
        <Menu.Item>
          <LanguageDropdown />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
