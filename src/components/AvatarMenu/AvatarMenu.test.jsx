import React from "react";
import { shallow } from "enzyme";
import AvatarMenu from "./AvatarMenu";

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

  test("clicking button displays avatar menu", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "avatar-button");
    button.simulate("click");
    const menuDisplay = findByTestAttribute(wrapper, "menu-display");
    expect(menuDisplay.length).toBe(1);
  });
});
