import React from "react";
import Avatar from "@mui/material/Avatar";
// import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// const useStyles = makeStyles((theme) => ({
//   large: {
//     width: theme.spacing(8),
//     height: theme.spacing(8),
//   },
// }));

function Profile() {
  // const classes = useStyles();

  return (
    <Box mt={16} mx="auto" width="70%" height={12} data-test="Profile-page">
      <Paper>
        <Grid container spacing={8}>
          <Box mx={12} mb={6} mt={5}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <Avatar
                        // className={classes.large}
                        sx={{ width: 60, height: 60 }}
                        alt="User's Name"
                        src="/static/images/grid/complex.jpg"
                        data-test="profile-avatar"
                      />
                    </Grid>
                    <Grid item>
                      <Box ml="15px">
                        <Typography
                          gutterBottom
                          variant="h5"
                          data-test="user-name"
                        >
                          Users Name
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt="25px" mb="21px" data-test="user-info">
                    <Typography variant="body2" gutterBottom align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Profile;
