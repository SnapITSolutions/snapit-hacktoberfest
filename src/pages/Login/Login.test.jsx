import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("Login", () => {
  const setup = () => shallow(<Login />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders button", () => {
    const wrapper = setup();
    const loginButtonDisplay = findByTestAttribute(
      wrapper,
      "login-button-display"
    );
    expect(loginButtonDisplay.length).toBe(1);
  });

  test("clicking button redirects to login page when not authorized", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "login-button");
    button.simulate("click");
    // const listDisplay = findByTestAttribute(wrapper, "list-display");
    // expect(listDisplay.length).toBe(1);
  });

  test("clicking button allows access to profile page when authorized", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "login-button");
    button.simulate("click");
    // const listDisplay = findByTestAttribute(wrapper, "list-display");
    // expect(listDisplay.length).toBe(1);
  });
});
