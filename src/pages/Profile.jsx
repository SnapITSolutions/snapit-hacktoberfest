import React from "react";
import { FormattedMessage } from "react-intl";

const Profile = () => (
  <div className="Profile" data-test="Profile-page">
    <h1>
      <FormattedMessage id="Profile.first-header" defaultMessage="Profile" />
    </h1>
  </div>
);

export default Profile;
