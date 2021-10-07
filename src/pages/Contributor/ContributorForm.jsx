import React, { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

const defaultValues = {
  name: "",
  github: "",
};

const ContributorForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    // setFormValues({
    //   ...formValues,
    //   [name]: value,
    // });
    setFormValues(e.target.value); // TO DO- check if works
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);
    setFormValues(formValues); // TO DO- check if works
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item>
            <TextField
              id="github-input"
              name="github"
              label="GitHub"
              type="text"
              value={formValues.github}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContributorForm;
