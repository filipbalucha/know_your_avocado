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
  return (
    <React.Fragment>
      <Icon name="moon" />
      <Checkbox toggle onChange={(_, { checked }) => setDarkMode(checked)} />
      <Icon name="sun " />
    </React.Fragment>
  );
};

export const MenuBar = (props) => {
  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item header>
          <Image size="mini" src={avocado} style={{ marginRight: "1.5em" }} />
          KNYA
        </Menu.Item>
        <LanguageDropdown />
        <Menu.Item>
          <DarkModeToggle />
        </Menu.Item>
      </Container>
    </Menu>
  );
};
