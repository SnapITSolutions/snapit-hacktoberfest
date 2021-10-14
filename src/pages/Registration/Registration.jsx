import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import RegistrationForm from "./RegistrationForm";

const Registration = () => (
  <Box
    mt={5}
    mx="auto"
    width="70%"
    height={12}
    data-test="registration-display"
  >
    <Grid container spacing={10} direction="column" sx={{ pt: 5 }}>
      <Grid item>
        <Typography variant="h3" textAlign="center" data-test="heading-display">
          <FormattedMessage
            id="Registration-register"
            defaultMessage="Register With Us"
          />
        </Typography>
      </Grid>
      <Grid item textAlign="center" data-test="form-display">
        <RegistrationForm />
      </Grid>
    </Grid>
  </Box>
);

export default Registration;
