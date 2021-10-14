import React from "react";
import { Typography, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";
import informationData from "./informationData";
import Map from "../../components/Map";

const Information = () => (
  <>
    <Box data-test="information-display">
      {informationData.map(({ header, paragraph }) => {
        const result = (
          <Box key={header.id} m={4} textAlign="center">
            <Typography variant="h4" data-test="heading-display">
              <FormattedMessage id={header.id} defaultMessage={header.values} />
            </Typography>
            <Typography variant="body1" pt={1} data-test="para-display">
              <FormattedMessage
                id={paragraph.id}
                defaultMessage={paragraph.values}
              />
            </Typography>
          </Box>
        );
        return result;
      })}
    </Box>
    <Box sx={{ height: "350px", width: "500px", mb: "40px" }}>
      <Map />
    </Box>
  </>
);

export default Information;
