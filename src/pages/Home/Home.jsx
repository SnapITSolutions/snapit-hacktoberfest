import React from "react";
import { FormattedMessage } from "react-intl";
import { Typography } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import "../../components/CountdownTimer/CountdownTimer.css";

const Home = () => (
  <div className="Home" data-test="Home-page">
    <Typography mb={3} mt={5} variant="h4">
      <FormattedMessage
        id="Home-header"
        data-test="heading-display"
        defaultMessage="SnapIT Hacktoberfest Starts In:"
      />
    </Typography>
    <CountdownTimer data-test="countdown-display" />
  </div>
);

export default Home;
