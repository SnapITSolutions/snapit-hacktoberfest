import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

jest.mock("../../contexts/AuthContext", () => ({
  useAuthContext: () => ({
    signin: jest.fn(),
  }),
}));

const mockIsAuthenticated = false;

jest.mock("../../hooks/useProvideAuth", () => ({
  useProvideAuth: () => ({
    isAuthenticated: mockIsAuthenticated,
  }),
}));

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

  test("renders button display", () => {
    const wrapper = setup();
    const loginButtonDisplay = findByTestAttribute(wrapper, "login-button");
    expect(loginButtonDisplay.length).toBe(1);
  });
});
