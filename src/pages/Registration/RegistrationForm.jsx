import React, { useState } from "react";
import { Grid, TextField, Button, Box } from "@mui/material";

const defaultValues = {
  name: "",
  github: "",
};

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    setFormValues(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(formValues);
  };

  return (
    <Box>
      <form data-test="form-display" onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
              sx={{ mb: 2, backgroundColor: "secondary.darkseagreen" }}
            />
          </Grid>
          <Grid item sx={{ color: "text.primary" }}>
            <TextField
              id="github-input"
              name="github"
              label="GitHub"
              type="text"
              value={formValues.github}
              onChange={handleInputChange}
              sx={{ mb: 3, backgroundColor: "secondary.darkseagreen" }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RegistrationForm;
