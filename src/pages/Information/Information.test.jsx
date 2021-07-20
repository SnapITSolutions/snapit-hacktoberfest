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

  test("renders heading display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttribute(wrapper, "heading-display");
    expect(headingDisplay.length).toBe(3);
  });

  test("renders paragraph display", () => {
    const wrapper = setup();
    const paraDisplay = findByTestAttribute(wrapper, "para-display");
    expect(paraDisplay.length).toBe(3);
  });

  test("renders image display", () => {
    const wrapper = setup();
    const imageDisplay = findByTestAttribute(wrapper, "image-display");
    expect(imageDisplay.length).toBe(1);
  });
});
