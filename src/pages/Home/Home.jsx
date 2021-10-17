import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Link } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer";
import "../../components/CountdownTimer/CountdownTimer.css";
import { HACKTOBERFEST_URL } from "../../utils/constants";
import isHacktoberfest from "../../utils/hacktoberfestCheck";

const Home = () => (
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
          <h1 data-test="heading-display">
            <FormattedMessage
              id="Home-begun"
              defaultMessage="HacktoberFest is here!"
            />
          </h1>
          {/* removed Home.css, MUI component styled using sx prop */}
          <Link
            sx={{
              color: "orange !important",
              textDecorationColor: "orange !important",
              "&:hover": {
                color: "rgb(248, 203, 121) !important",
              },
              fontSize: "4rem",
              fontWeight: "bold",
              m: 0,
              p: "20px",
              background: "rgb(103, 104, 104)",
              borderRadius: "5px",
            }}
            href={HACKTOBERFEST_URL}
            className="link"
            target="_blank"
            rel="noopener"
            data-test="hf-link"
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

export default Home;
