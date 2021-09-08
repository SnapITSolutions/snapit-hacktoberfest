import React from "react";
import { shallow } from "enzyme";
import AvatarMenu from "./AvatarMenu";

jest.mock("../../context/AuthContext", () => ({
  useAuthContext: () => ({
    signout: jest.fn(),
  }),
}));

const mockIsAuthenticated = false;

jest.mock("../../hooks/useProvideAuth", () => ({
  useProvideAuth: () => ({
    isAuthenticated: mockIsAuthenticated,
  }),
}));

describe("AvatarMenu", () => {
  const setup = () => shallow(<AvatarMenu />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders avatar display", () => {
    const wrapper = setup();
    const avatarDisplay = findByTestAttribute(wrapper, "avatar-display");
    expect(avatarDisplay.length).toBe(1);
  });

  test("renders username display", () => {
    const wrapper = setup();
    const usernameDisplay = findByTestAttribute(wrapper, "username-display");
    expect(usernameDisplay.length).toBe(1);
  });

  test("clicking button displays avatar menu", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "avatar-button");
    button.simulate("click", new Event("click"));
    const menuDisplay = findByTestAttribute(wrapper, "menu-display");
    expect(menuDisplay.length).toBe(1);
  });
});
