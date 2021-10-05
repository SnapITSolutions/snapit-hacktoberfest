import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FormattedMessage } from "react-intl";
import InformationData from "./InformationData";

const Information = () => {
  //   const intl = useIntl();

  //   const infoData = [
  //     {
  //       header: intl.formatMessage({
  //         id: "Info-first-header",
  //         values: { defaultMessage: "What is HacktoberFest?" },
  //       }),
  //       paragraph: intl.formatMessage({
  //         id: "Info-first-paragraph",
  //         values: { defaultMessage: "Lorem ipsum..." },
  //       }),
  //     },
  //     {
  //       header: intl.formatMessage({
  //         id: "Info-second-header",
  //         values: { defaultMessage: "When & Where" },
  //       }),
  //       paragraph: intl.formatMessage({
  //         id: "Info-second-paragraph",
  //         values: { defaultMessage: "Lorem ipsum..." },
  //       }),
  //     },
  //     {
  //       header: intl.formatMessage({
  //         id: "Info-third-header",
  //         values: { defaultMessage: "Come join the FUN!" },
  //       }),
  //       paragraph: intl.formatMessage({
  //         id: "Info-third-paragraph",
  //         values: { defaultMessage: "Lorem ipsum..." },
  //       }),
  //     },
  //   ];

  const displayInfo = () => {
    let i = 0;
    return (
      <>
        <div data-test="information-display">
          {InformationData.map(({ header, paragraph }) => {
            const result = (
              <div key={header.id}>
                <Typography
                  m={4}
                  variant="h4"
                  data-test="heading-display"
                  textAlign="center"
                >
                  <FormattedMessage
                    id={header.id}
                    defaultMessage={header.values}
                  />
                  <Typography variant="body1" pt={1} data-test="para-display">
                    <FormattedMessage
                      id={paragraph.id}
                      defaultMessage={paragraph.values}
                    />
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
