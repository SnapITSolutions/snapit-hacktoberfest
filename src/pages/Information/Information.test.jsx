import React from "react";
import { mountWithIntl } from "../../utils/intl-enzyme-test-helper";
import Information from "./Information";

describe("Information", () => {
  const setup = () => mountWithIntl(<Information />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders information display", () => {
    const wrapper = setup();
    const informationDisplay = findByTestAttribute(
      wrapper,
      "information-display"
    );
    expect(informationDisplay.length).toBe(1);
  });

  describe("heading-display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttribute(wrapper, "heading-display");
    test("renders heading display", () => {
      expect(headingDisplay.exists()).toBeTruthy();
    });
    test("contains the text `What is HacktoberFest?`", () => {
      expect(headingDisplay.at(0).text()).toContain("What is HacktoberFest?");
    });
  });

  test("renders paragraph display", () => {
    const wrapper = setup();
    const paraDisplay = findByTestAttribute(wrapper, "para-display");
    expect(paraDisplay.exists()).toBeTruthy();
  });
});
