import React from "react";
import CountdownTimer from "../../components/CountdownTimer";

const Home = () => (
  <div className="Home" data-test="Home-page">
    <h1>SnapIT Hacktoberfest Starts In:</h1>
    <CountdownTimer data-test="countdown-display" />
  </div>
);

export default Home;
