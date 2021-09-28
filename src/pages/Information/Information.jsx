import React from "react";
import Typography from "@mui/material/Typography";
import { useIntl } from "react-intl";
import Box from "@mui/material/Box";

const Information = () => {
  const intl = useIntl();

  const infoData = [
    {
      header: intl.formatMessage({
        id: "Info-first-header",
        values: { defaultMessage: "What is HacktoberFest?" },
      }),
      paragraph: intl.formatMessage({
        id: "Info-first-paragraph",
        values: { defaultMessage: "Lorem ipsum..." },
      }),
    },
    {
      header: intl.formatMessage({
        id: "Info-second-header",
        values: { defaultMessage: "When & Where" },
      }),
      paragraph: intl.formatMessage({
        id: "Info-second-paragraph",
        values: { defaultMessage: "Lorem ipsum..." },
      }),
    },
    {
      header: intl.formatMessage({
        id: "Info-third-header",
        values: { defaultMessage: "Come join the FUN!" },
      }),
      paragraph: intl.formatMessage({
        id: "Info-third-paragraph",
        values: { defaultMessage: "Lorem ipsum..." },
      }),
    },
  ];

  const displayInfo = () => {
    let i = 0;
    return (
      <>
        <div data-test="information-display">
          {infoData.map(({ header, paragraph, values }) => {
            const result = (
              <div>
                <Typography
                  m={4}
                  variant="h4"
                  data-test="heading-display"
                  defaultMessage={values}
                  textAlign="center"
                >
                  {header}
                  <Typography variant="body1" pt={1} data-test="para-display">
                    {paragraph}
                  </Typography>
                </Typography>
                {i === 0 && (
                  <Box justifyContent="center" display="flex">
                    <img
                      data-test="image-display"
                      src="../src/assets/pumpkin_PNG86719.png"
                      alt="hacktoberfest"
                      style={{ height: 100 }}
                    />
                  </Box>
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
