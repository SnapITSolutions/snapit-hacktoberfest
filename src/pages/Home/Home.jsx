import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Typography, Box } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import "../../components/CountdownTimer/CountdownTimer.css";

const Home = () => (
  <div className="Home" data-test="Home-page">
    <Grid container justifyContent="center">
      <Typography
        data-test="heading-display"
        variant="h2"
        textAlign="center"
        my={5}
      >
        <FormattedMessage
          id="Home-header"
          defaultMessage="SnapIT Hacktoberfest Starts In:"
        />
      </Typography>
      <Box justifyContent="center">
        <CountdownTimer data-test="countdown-display" />
      </Box>
    </Grid>
  </div>
);

export default Home;
