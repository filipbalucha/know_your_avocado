import React, { useEffect, useState } from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import avocado from "./avocado.PNG";
import { Footer } from "./components/Footer";
import { Steps } from "./components/Steps";
import { MenuBar } from "./components/MenuBar";
import { Body } from "./components/Body";
import { ErrorMessage } from "./components/ErrorMessage";

function App() {
  const [status, setStatus] = useState("AWAIT");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(false), 2500);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <React.Fragment>
      <Segment
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
        <MenuBar />
        <Image centered src={avocado} size="small" />
        <Header as="h1">Know Your Avocado!</Header>
        <p>Say No to Unripe Avocados.</p>
        <Steps status={status} handleUploadClicked={() => setStatus("AWAIT")} />
        <Body status={status} setStatus={setStatus} setError={setError} />
      </Segment>
      <ErrorMessage visible={error} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
