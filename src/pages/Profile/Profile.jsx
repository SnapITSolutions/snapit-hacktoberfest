import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <Box mt={16} mx="auto" width="70%" height={12}>
      <Paper>
        <Grid container spacing={8}>
          <Box mx={12} mb={6} mt={5}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Grid container direction="row" alignItems="center">
                    <Grid item>
                      <Avatar
                        className={classes.large}
                        alt="User's Name"
                        src="/static/images/grid/complex.jpg"
                        width="80%"
                        height="330"
                      />
                    </Grid>
                    <Grid item>
                      <Box ml="15px">
                        <Typography gutterBottom variant="h5">
                          Users Name
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box mt="25px" mb="21px">
                    <Typography variant="body2" gutterBottom align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <Button
                      backgroundColor="primary"
                      href="#"
                      size="small"
                      variant="contained"
                      color="primary"
                      data-test="profile-button"
                    >
                      Link to Users Github Account
                    </Button>
                  </ButtonBase>
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
