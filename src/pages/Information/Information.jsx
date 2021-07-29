import React from "react";
import { FormattedMessage } from "react-intl";

const Information = () => (
  <>
    <div data-test="information-display">
      <h2 data-test="heading-display">
        <FormattedMessage
          id="Info.first-header"
          defaultMessage="What is HacktoberFest?"
        />
      </h2>
      <p data-test="para-display">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img data-test="image-display" src="" alt="hacktoberfest" />
    </div>
    <div>
      <h2 data-test="heading-display">
        <FormattedMessage
          id="Info.second-header"
          defaultMessage="When & Where"
        />
      </h2>
      <p data-test="para-display">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div>
      <h2 data-test="heading-display">
        <FormattedMessage
          id="Info.third-header"
          defaultMessage="Come join the FUN!"
        />
      </h2>
      <p data-test="para-display">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </div>
  </>
);

export default Information;
