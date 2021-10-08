import React from "react";
import { shallow } from "enzyme";
import Registration from "./Registration";

describe("Registration", () => {
  const setup = () => shallow(<Registration />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders registration page display", () => {
    const wrapper = setup();
    const registrationDisplay = findByTestAttribute(
      wrapper,
      "registration-display"
    );
    expect(registrationDisplay.exists()).toBeTruthy();
  });

  test("renders heading display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttribute(wrapper, "heading-display");
    expect(headingDisplay.exists()).toBeTruthy();
  });

  test("renders form display", () => {
    const wrapper = setup();
    const formDisplay = findByTestAttribute(wrapper, "form-display");
    expect(formDisplay.exists()).toBeTruthy();
  });
});
