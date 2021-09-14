import React from "react";
import { FormattedMessage } from "react-intl";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import "../../components/CountdownTimer/CountdownTimer.css";

const Home = () => (
  <div className="Home" data-test="Home-page">
    <h1 data-test="heading-display">
      <FormattedMessage
        id="Home-header"
        defaultMessage="SnapIT Hacktoberfest Starts In:"
      />
    </h1>
    <CountdownTimer data-test="countdown-display" />
  </div>
);

export default Home;
