import React from "react";
import { shallow } from "enzyme";
import AuthButton from "./AuthButton";

jest.mock("../../context/AuthContext", () => ({
  useAuthContext: () => ({
    signin: jest.fn(),
    user: {},
  }),
}));

const mockIsAuthenticated = false;

jest.mock("../../hooks/useProvideAuth", () => ({
  useProvideAuth: () => ({
    isAuthenticated: mockIsAuthenticated,
  }),
}));

describe("AuthButton", () => {
  const setup = () => shallow(<AuthButton />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders auth display", () => {
    const wrapper = setup();
    const authDisplay = findByTestAttribute(wrapper, "auth-display");
    expect(authDisplay.length).toBe(1);
  });

  test("renders button display", () => {
    const wrapper = setup();
    const authButtonDisplay = findByTestAttribute(wrapper, "auth-button");
    expect(authButtonDisplay.length).toBe(1);
  });
});
