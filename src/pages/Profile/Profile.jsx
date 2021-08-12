import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const styles = {
  card: {
    minWidth: 700,
    margin: "70px 0 0 0",
    boxShadow: "4px 4px 5px grey",
  },
  box: {
    height: "70px",
    // backgroundColor: "green",
  },
  avatar: {
    width: "80px",
    height: "80px",
    position: "absolute",
    marginLeft: "60px",
    marginTop: " 10px",
  },
  userName: {
    textAlign: "left",
    fontSize: 26,
    marginLeft: "150px",
    paddingTop: "30px",
  },
  userInfo: {
    width: "60%",
    paddingTop: "30px",
    margin: "auto",
    textAlign: "left",
  },
  button: {
    margin: "30px auto 10px",
    backgroundColor: "lightblue",
    padding: "0 20px",
  },
};

function Profile(props) {
  const { classes } = props;

  return (
    <Card className={classes.card} data-test="Profile-page">
      <CardContent>
        <Box className={classes.box}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.avatar}
            data-test="profile-avatar"
          />
          <Typography
            className={classes.userName}
            variant="h5"
            component="h2"
            data-test="user-name"
          >
            User Name
          </Typography>
        </Box>
        <Typography
          className={classes.userInfo}
          component="p"
          data-test="user-info"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <CardActions>
          <Button
            size="small"
            className={classes.button}
            data-test="profile-button"
          >
            Link to Users Github Account
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

Profile.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
