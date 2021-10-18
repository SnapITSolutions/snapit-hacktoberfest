import React from "react";
import { mountWithIntl } from "../../utils/intl-enzyme-test-helper";
import isHacktoberfest from "../../utils/hacktoberfestCheck";
import Home from "./Home";

const testIf = (hfStatus) => (hfStatus ? test : test.skip);

describe("Home", () => {
  const setup = () => mountWithIntl(<Home />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("renders Home page", () => {
    const wrapper = setup();
    const homeComponent = findByTestAttr(wrapper, "Home-page");
    expect(homeComponent.length).toBeTruthy();
  });

  testIf(!isHacktoberfest)("renders CountdownTimer", () => {
    const wrapper = setup();
    const countdownDisplay = findByTestAttr(wrapper, "countdown-display");
    expect(countdownDisplay.length).toBe(1);
  });

  describe("heading-display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttr(wrapper, "heading-display");
    testIf(!isHacktoberfest)(
      "contains the text `SnapIt Hacktoberfest Starts In:`",
      () => {
        expect(headingDisplay.text()).toBe("SnapIT Hacktoberfest Starts In:");
      }
    );
    testIf(isHacktoberfest)(
      "contains the text `HacktoberFest is here!`",
      () => {
        expect(headingDisplay.first().text()).toBe("HacktoberFest is here!");
      }
    );
    test("renders page header", () => {
      expect(headingDisplay.exists()).toBeTruthy();
    });
  });

  testIf(isHacktoberfest)("renders HacktoberFest link", () => {
    const wrapper = setup();
    const link = findByTestAttr(wrapper, "hf-link");
    const URL = "https://hacktoberfest.digitalocean.com/";
    const LINK_TEXT = "Sign up to start hacking!";
    expect(link.at(0).props()).toHaveProperty("href", URL);
    expect(link.at(0).text()).toBe(LINK_TEXT);
  });
});
