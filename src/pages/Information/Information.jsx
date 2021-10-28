import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { GitHub } from "@mui/icons-material";
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
    <Box sx={{ height: "350px", width: "700px" }}>
      <Map />
    </Box>
    <Box m={3} textAlign="center" sx={{ height: "350px" }}>
      <Typography variant="h4" data-test="heading-display">
        Want to contribute? <GitHub />
      </Typography>
      <Typography variant="body1" pt={1} data-test="para-display">
        You can contribute to this project and help us improve the website. Just
        visit our GitHub repository by clicking{" "}
        <Link
          href="https://github.com/SnapITSolutions/snapit-hacktoberfest"
          target="_blank"
        >
          here
        </Link>
        .
      </Typography>
    </Box>
  </>
);

export default Information;
