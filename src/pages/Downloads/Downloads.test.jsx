import React from "react";
import { mountWithIntl } from "../../utils/intl-enzyme-test-helper";
import Downloads from "./Downloads";

describe("Downloads", () => {
  const setup = () => mountWithIntl(<Downloads />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders downloads display", () => {
    const wrapper = setup();
    const downloadsDisplay = findByTestAttribute(wrapper, "downloads-display");
    expect(downloadsDisplay.exists()).toBeTruthy();
  });

  describe("heading-display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttribute(wrapper, "heading-display");
    test("renders heading display", () => {
      expect(headingDisplay.exists()).toBeTruthy();
    });
  });
});
