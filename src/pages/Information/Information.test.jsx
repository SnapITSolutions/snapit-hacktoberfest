import React from "react";
import { shallow } from "enzyme";
import Information from "./Information";

describe("Information", () => {
  const setup = () => shallow(<Information />);

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
});
