import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FormattedMessage } from "react-intl";
import InformationData from "./InformationData";

const Information = () => {
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
