import React from "react";
import "../ProfilePage.css";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProfilePage = () => (
  <div className="container">
    <div className="profile-pic">
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </div>
    <div className="user">
      <h1>Your Name Here</h1>
    </div>
    <div className="track-progress">
      <h3>Check your progress</h3>
      <LinearProgress variant="determinate" className="progressBar" />
    </div>
  </div>
);

export default ProfilePage;
