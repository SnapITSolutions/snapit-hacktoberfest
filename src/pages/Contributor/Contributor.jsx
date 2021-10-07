import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Slider from "@material-ui/core/Slider";

const defaultValues = {
  name: "",
  github: "",
};

const Contributor = () => {
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
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};

export default Contributor;
