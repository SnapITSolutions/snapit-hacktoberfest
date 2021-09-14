import React from "react";
import { mountWithIntl } from "../../utils/intl-enzyme-test-helper";
import Home from "./Home";

describe("Home", () => {
  const setup = () => mountWithIntl(<Home />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("renders Home page", () => {
    const wrapper = setup();
    const homeComponent = findByTestAttr(wrapper, "Home-page");
    expect(homeComponent.length).toBe(1);
  });

  test("renders CountdownTimer", () => {
    const wrapper = setup();
    const countdownDisplay = findByTestAttr(wrapper, "countdown-display");
    expect(countdownDisplay.length).toBe(1);
  });

  describe("heading-display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttr(wrapper, "heading-display");
    test("contains the text `SnapIt Hacktoberfest Starts In:`", () => {
      expect(headingDisplay.text()).toBe("SnapIT Hacktoberfest Starts In:");
    });
    test("renders page header", () => {
      expect(headingDisplay.length).toBe(1);
    });
  });
});
