import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Link, Box, Typograpghy, Typography } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer";
import "./Home.css";
import "../../components/CountdownTimer/CountdownTimer.css";
import { HACKTOBERFEST_URL } from "../../utils/constants";
import isHacktoberfest from "../../utils/hacktoberfestCheck";

const Home = () => (
  <Box className="Home" data-test="Home-page">
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      {!isHacktoberfest ? (
        <>
          <Typography data-test="heading-display">
            <FormattedMessage
              id="Home-header"
              defaultMessage="SnapIT Hacktoberfest Starts In:"
            />
          </Typography>
          <CountdownTimer data-test="countdown-display" />
        </>
      ) : (
        <>
          <Typograpghy
            data-test="heading-display"
            varaint="h1"
            style={{ fontWeight: 700 }}
          >
            <FormattedMessage
              id="Home-begun"
              defaultMessage="HacktoberFest is here!"
            />
          </Typograpghy>
          <Link
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
  </Box>
);

export default Home;
