import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Typography, Button, Link } from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import UndrawNotfound from "../../assets/undraw_notfound.svg";

const NotFound = () => (
  <Grid
    container
    flexFlow="row wrap"
    justifyContent="center"
    alignContent="center"
    alignItems="center"
    minHeight="calc(100vh - 105px)"
    data-test="page-not-found-display"
  >
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" data-test="heading-display">
          <FormattedMessage
            id="notFound-header-h1"
            description="Not Found HTTP Error Code 404"
            defaultMessage="404"
          />
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h5" data-test="heading-display">
          <FormattedMessage
            id="notFound-header-h2"
            description="Not Found HTTP Page Not Found"
            defaultMessage="Page not found"
          />
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <img
          data-test="image-display"
          src={UndrawNotfound}
          alt="error"
          width="5000px"
          height="500px"
        />
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body1" data-test="para-display">
          <FormattedMessage
            id="notFound-header"
            description="Not Found formatted message"
            defaultMessage="We are sorry, the page you are looking for could not be found."
          />
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={12} mt={3}>
      <Grid
        container
        direction="row"
        justifyItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            key="btn-goto-home"
          >
            <Button
              variant="contained"
              startIcon={<HomeIcon fontSize="large" />}
            >
              Go Back to Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default NotFound;
