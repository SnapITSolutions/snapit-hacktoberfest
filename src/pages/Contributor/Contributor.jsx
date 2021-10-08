import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ContributorTable from "./ContributorTable";

const Contributor = () => (
  <Box>
    <Grid container spacing={10} direction="column" alignItems="center">
      <Grid item>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Add to the JSON file to be placed in the Wall of Coders
        </Typography>
      </Grid>
      <Grid item>
        <ContributorTable />
      </Grid>
    </Grid>
  </Box>
);

export default Contributor;
