import React from "react";
import "./Profile.css";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";

const ProfilePage = () => (
  <Box className="container">
    <div className="profile-pic" data-test="profile-image">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
    <div className="user" data-test="user-name">
      <h1>Your Name Here</h1>
    </div>
    <div className="track-progress" data-test="progress-bar">
      <h3>Check your progress</h3>
      <LinearProgress variant="determinate" className="progressBar" />
    </div>
  </Box>
);

export default ProfilePage;
