import React from "react";
import { FormattedMessage } from "react-intl";

const NotFound = () => (
  <div data-test="page-not-found-display">
    <h1 data-test="heading-display">
       <FormattedMessage
              id="notFound-header-h1"
              description="Not Found HTTP Error Code 404"
              defaultMessage="404"
        />  
    </h1>
    <h2 data-test="heading-display">
        <FormattedMessage
              id="notFound-header-h2"
              description="Not Found HTTP Page Not Found"
              defaultMessage="Page not found"
        />  
    </h2>
    <img data-test="image-display" src="" alt="error" />
    <p data-test="para-display">
          <FormattedMessage
              id="notFound-header"
              description="Not Found formatted message"
              defaultMessage="We are sorry, the page you are looking for could not be found."
          />
    </p>
  </div>
);

export default NotFound;
