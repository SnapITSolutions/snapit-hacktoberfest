import React from "react";
import { FormattedMessage } from "react-intl";

const Registration = () => (
  <div className="Registration" data-test="Registration-page">
    <h1>
      <FormattedMessage
        id="Registration.first-header"
        defaultMessage="Registration"
      />
    </h1>
  </div>
);

export default Registration;
