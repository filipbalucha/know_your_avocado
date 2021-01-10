import { Message, Transition, Container } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
export const ErrorMessage = (props) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const { visible } = props;
  const styleDesktop = {
    position: "absolute",
    width: "20vw",
    bottom: "1em",
    right: "1em",
    opacity: 0.9,
  };
  const styleMobile = {
    position: "fixed",
    width: "100%",
    top: 15,
    left: 0,
    right: 0,
    opacity: 0.9,
    zIndex: 2, // raise above Steps component
  };

  const animation = isDesktopOrLaptop ? "fade left" : "fade down";
  const style = isDesktopOrLaptop ? styleDesktop : styleMobile;
  return (
    <Transition visible={visible} animation={animation} duration={500}>
      <Container style={style}>
        <Message negative>
          <Message.Header>Server error</Message.Header>
          <p>Please try again later</p>
        </Message>
      </Container>
    </Transition>
  );
};
