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

  test("renders login display", () => {
    const wrapper = setup();
    const loginDisplay = findByTestAttribute(wrapper, "login-display");
    expect(loginDisplay.length).toBe(1);
  });
});
