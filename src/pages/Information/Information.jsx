import React from "react";
import { FormattedMessage } from "react-intl";

const Information = () => (
  <>
    <div data-test="information-display">
      <h2 data-test="heading-display">
        <FormattedMessage
          id="Info-first-header"
          defaultMessage="What is HacktoberFest?"
        />
      </h2>
      <p data-test="para-display">
        <FormattedMessage
          id="Info-first-paragraph"
          defaultMessage="Lorem ipsum..."
        />
      </p>
      <img
        data-test="image-display"
        src="../src/assets/pumpkin_PNG86719.png"
        alt="hacktoberfest"
        style={{ height: 100 }}
      />
    </div>
    <div>
      <h2 data-test="heading-display">
        <FormattedMessage
          id="Info-second-header"
          defaultMessage="When & Where"
        />
      </h2>
      <p data-test="para-display">
        <FormattedMessage
          id="Info-second-paragraph"
          defaultMessage="Lorem ipsum..."
        />
      </p>
    </div>
    <div>
      <h2 data-test="heading-display">
        <FormattedMessage
          id="Info-third-header"
          defaultMessage="Come join the FUN!"
        />
      </h2>
      <p data-test="para-display">
        <FormattedMessage
          id="Info-third-paragraph"
          defaultMessage="Lorem ipsum..."
        />
      </p>
    </div>
  </>
);

export default Information;
