import React, { useState, useContext } from "react";
import { Button, Icon, Modal, Header } from "semantic-ui-react";
import { useTranslation } from "react-i18next";
import ThemeContext from "../../context/ThemeContext";

const PredictButton = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);

  const predict = () => {
    if (props.numImagesUploaded < 2) setModalOpen(true);
    else props.onClick();
  };
  return (
    <React.Fragment>
      <Button inverted={darkMode} fluid animated onClick={predict}>
        <Button.Content visible content={t("predict")} />
        <Button.Content hidden content={<Icon name="arrow right" />} />
      </Button>
      <Modal size="tiny" open={modalOpen} onClose={() => setModalOpen(false)}>
        <Header icon="camera" content={t("upload_extra")} />
        <Modal.Content>
          <p>{t("upload_extra_detail")}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            onClick={() => {
              setModalOpen(false);
              props.onClick();
            }}
          >
            <Icon name="remove" /> {t("no")}
          </Button>
          <Button color="green" onClick={() => setModalOpen(false)}>
            <Icon name="checkmark" /> {t("yes")}
          </Button>
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  );
};

export default PredictButton;
