import React, { useEffect, useState } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import avocado from "./avocado.PNG";
import { Footer } from "./components/Footer";
import { MenuBar } from "./components/MenuBar";
import { Body } from "./components/Body";
import { ErrorMessage } from "./components/ErrorMessage";
import { useTranslation } from "react-i18next";
import i18n from "./i18next";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const [status, setStatus] = useState("AWAIT");
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState();

  useEffect(() => {
    // Fetch user preference on dark mode
    const prefers_dm =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefers_dm);
  }, []);

  // Listen for user preference on dark mode
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      setDarkMode(matches);
    });

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(false), 2500);
    return () => clearTimeout(timer);
  }, [error]);

  const setLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Segment
        inverted={darkMode}
        basic
        padded={"very"}
        textAlign="center"
        style={{
          paddingTop: "5em",
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          margin: 0,
        }}
      >
        <MenuBar setLanguage={setLanguage} />
        <Image centered src={avocado} size="small" />
        <Header as="h1">Know Your Avocado!</Header>
        <p>{t("motto")}</p>
        <Body status={status} setStatus={setStatus} setError={setError} />
      </Segment>
      <ErrorMessage visible={error} />
      <Footer />
    </ThemeContext.Provider>
  );
};

export default App;
