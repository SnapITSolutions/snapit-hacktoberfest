import React from "react";

const NotFound = () => (
  <div data-test="page-not-found-display">
    <h1 data-test="heading-display">404</h1>
    <h2 data-test="heading-display">Page not found</h2>
    <img data-test="image-display" src="" alt="error" />
    <p data-test="para-display" textAlign="center">
      We are sorry, the page you are looking for could not be found.
    </p>
  </div>
);

export default NotFound;
