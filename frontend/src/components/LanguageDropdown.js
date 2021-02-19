import { Icon, Form } from "semantic-ui-react";

export const LanguageDropdown = (props) => {
  const languageOptions = [
    { key: "English", text: "EN 🇬🇧", value: "gb" },
    { key: "Slovak", text: "SK 🇸🇰", value: "sk" },
  ];
  return (
    <Form>
      <Form.Dropdown
        item
        button
        text={<Icon name="world" />}
        options={languageOptions}
        onChange={(_, { value }) => props.setLanguage(value)}
      />
    </Form>
  );
};
