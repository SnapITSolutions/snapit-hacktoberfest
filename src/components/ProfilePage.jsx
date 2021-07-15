import React from "react";
import "../ProfilePage.css";

const ProfilePage = () => (
    <div className="container">
      <div className="profile-pic">
        <img alt="" />
      </div>
      <div className="user">
        <h1>Your Name Here</h1>
      </div>
      <div className="track progress">
        <h3>Check your progress</h3>
      </div>
    </div>
  );

export default ProfilePage;
