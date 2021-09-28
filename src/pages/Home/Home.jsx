import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import "../../components/CountdownTimer/CountdownTimer.css";

const Home = () => (
  <div className="Home" data-test="Home-page">
    <Grid container justifyContent="center">
      <h1 data-test="heading-display">
        <FormattedMessage
          id="Home-header"
          defaultMessage="SnapIT Hacktoberfest Starts In:"
        />
      </h1>
      <CountdownTimer data-test="countdown-display" />
    </Grid>
  </div>
);

export default Home;
