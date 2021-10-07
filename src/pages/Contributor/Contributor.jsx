import React from "react";
import { Box, Grid } from "@mui/material";
import ContributorForm from "./ContributorForm";
import ContributorTable from "./ContributorTable";

const Contributor = () => (
  <Box>
    <Grid container spacing={40} direction="row" sx={{ pt: 5 }}>
      <Grid item>
        <ContributorForm />
      </Grid>
      <Grid item>
        <ContributorTable />
      </Grid>
    </Grid>
  </Box>
);

export default Contributor;
