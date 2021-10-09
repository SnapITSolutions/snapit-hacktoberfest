import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Link } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer";
import "./Home.css";
import "../../components/CountdownTimer/CountdownTimer.css";
import { HACKTOBERFEST_URL } from "../../utils/constants";

const Home = () => {
  const present = new Date();
  const octoberStart = new Date("Oct 01 2021");
  const novemberStart = new Date("Nov 01 2021");
  const isHacktoberfest = present >= octoberStart && present < novemberStart;

  return (
    <div className="Home" data-test="Home-page">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        {!isHacktoberfest ? (
          <>
            <h1 data-test="heading-display">
              <FormattedMessage
                id="Home-header"
                defaultMessage="SnapIT Hacktoberfest Starts In:"
              />
            </h1>
            <CountdownTimer data-test="countdown-display" />
          </>
        ) : (
          <>
            <h1>
              <FormattedMessage
                id="Home-begun"
                defaultMessage="HacktoberFest is here!"
              />
            </h1>
            <Link
              href={HACKTOBERFEST_URL}
              className="link"
              target="_blank"
              rel="noopener"
            >
              <FormattedMessage
                id="Home-link"
                defaultMessage="Sign up to start hacking!"
              />
            </Link>
          </>
        )}
      </Grid>
    </div>
  );
};

export default Home;
