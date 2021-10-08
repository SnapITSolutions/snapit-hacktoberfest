import React from "react";
import { Typography, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";
import informationData from "./informationData";
import Map from "../../components/Map";

const Information = () => (
  <>
    <div data-test="information-display">
      {informationData.map(({ header, paragraph }) => {
        const result = (
          <div key={header.id}>
            <Typography
              m={4}
              variant="h4"
              data-test="heading-display"
              textAlign="center"
            >
              <FormattedMessage id={header.id} defaultMessage={header.values} />
              <Typography variant="body1" pt={1} data-test="para-display">
                <FormattedMessage
                  id={paragraph.id}
                  defaultMessage={paragraph.values}
                />
              </Typography>
            </Typography>
          </div>
        );
        return result;
      })}
    </div>
    <Box sx={{ height: "350px", width: "500px", mb: "40px" }}>
      <Map />
    </Box>
  </>
);

export default Information;
