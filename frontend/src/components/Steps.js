import { Step, Icon } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

export const Steps = (props) => {
  const { status } = props;
  const { t } = useTranslation();
  return (
    <Step.Group unstackable>
      <Step active={status === "AWAIT"}>
        <Icon name="upload" />
        <Step.Content>
          <Step.Title>{t("upload")} </Step.Title>
        </Step.Content>
      </Step>

      <Step active={status !== "AWAIT"}>
        <Icon name="magic" />
        <Step.Content>
          <Step.Title>{t("predict")}</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  );
};
