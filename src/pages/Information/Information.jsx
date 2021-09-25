import React from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";

const Information = () => {
  const intl = useIntl();

  const infoData = [
    {
      header: intl.formatMessage({ id: "Info-first-header" }),
      defaultMessage: "What is HacktoberFest?",
    },
    {
      paragraph: intl.formatMessage({ id: "Info-first-paragraph" }),
      defaultMessage: "Lorem ipsum...",
    },
    {
      header: intl.formatMessage({ id: "Info-second-header" }),
      defaultMessage: "When & Where",
    },
    {
      paragraph: intl.formatMessage({ id: "Info-second-paragraph" }),
      defaultMessage: "Lorem ipsum...",
    },
    {
      header: intl.formatMessage({ id: "Info-third-header" }),
      defaultMessage: "Come join the FUN!",
    },
    {
      paragraph: intl.formatMessage({ id: "Info-third-paragraph" }),
      defaultMessage: "Lorem ipsum...",
    },
  ];

  const displayInfo = () => {
    let i = 0;
    return (
      <>
        <div data-test="information-display">
          {infoData.map(({ header, paragraph, defaultMessage }) => {
            const result = (
              <div>
                <Typography
                  mt={2}
                  variant="h4"
                  data-test="heading-display"
                  defaultMessage={defaultMessage}
                >
                  {header}
                </Typography>

                <Typography
                  paragraph="true"
                  data-test="para-display"
                  defaultMessage={defaultMessage}
                >
                  {paragraph}
                </Typography>
                {i === 1 && (
                  <img
                    data-test="image-display"
                    src="../src/assets/pumpkin_PNG86719.png"
                    alt="hacktoberfest"
                    style={{ height: 100 }}
                  />
                )}
              </div>
            );
            i += 1;
            return result;
          })}
        </div>
      </>
    );
  };

  return displayInfo();
};

export default Information;
