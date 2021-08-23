import React from "react";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import "../../components/CountdownTimer/CountdownTimer.css";

const Home = () => (
  <div className="Home" data-test="Home-page">
    <h1 data-test="heading-display">SnapIT Hacktoberfest Starts In:</h1>
    <CountdownTimer data-test="countdown-display" />
  </div>
);

export default Home;
