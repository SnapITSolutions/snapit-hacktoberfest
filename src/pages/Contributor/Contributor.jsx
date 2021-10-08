import React from "react";
import { Box, Grid } from "@mui/material";
import ContributorTable from "./ContributorTable";

const Contributor = () => (
  <Box>
    <Grid container spacing={40} direction="row" sx={{ pt: 5 }}>
      <Grid item>
        <ContributorTable />
      </Grid>
    </Grid>
  </Box>
);

export default Contributor;
