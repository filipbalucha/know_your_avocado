import { useContext } from "react";
import { Icon, Form } from "semantic-ui-react";
import ThemeContext from "../context/ThemeContext";

export const LanguageDropdown = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const languageOptions = [
    { key: "English", text: "EN 🇬🇧", value: "gb" },
    { key: "Slovak", text: "SK 🇸🇰", value: "sk" },
  ];
  return (
    <Form.Dropdown
      inverted
      item
      button
      text={<Icon name="world" />}
      options={languageOptions}
      onChange={(_, { value }) => props.setLanguage(value)}
      // style={darkMode ? { backgroundColor: "red !important" } : null}
    />
  );
};
