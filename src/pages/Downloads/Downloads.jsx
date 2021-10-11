import React from "react";
// import { Link } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { FormattedMessage } from "react-intl";

const Downloads = () => (
  <Box data-test="downloads-display">
    <Typography variant="h4">
      <FormattedMessage id="Downloads-page-header" data-test="heading-display">
        Downloads
      </FormattedMessage>
    </Typography>
  </Box>
);

export default Downloads;
