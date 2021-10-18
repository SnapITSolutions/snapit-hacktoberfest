import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Link, Box, Typography } from "@mui/material";
import CountdownTimer from "../../components/CountdownTimer";
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
          <Typography
            data-test="heading-display"
            variant="h3"
            style={{ fontWeight: 700 }}
            mt={9}
            mb={5}
          >
            <FormattedMessage
              id="Home-begun"
              defaultMessage="HacktoberFest is here!"
            />
          </h1>
          </Typography>

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
  </Box>
);

export default Home;
