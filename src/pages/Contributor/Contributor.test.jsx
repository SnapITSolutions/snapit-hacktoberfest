import React from "react";
import { shallow } from "enzyme";
import Contributor from "./Contributor";

describe("Contributor", () => {
  const setup = () => shallow(<Contributor />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders heading display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttribute(wrapper, "heading-display");
    expect(headingDisplay.exists()).toBeTruthy();
  });

  test("renders table display", () => {
    const wrapper = setup();
    const tableDisplay = findByTestAttribute(wrapper, "table-display");
    expect(tableDisplay.exists()).toBeTruthy();
  });
});
