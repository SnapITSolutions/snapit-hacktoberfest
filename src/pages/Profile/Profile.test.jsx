import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";

const findByTestAttribute = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

describe("Profile", () => {
  const setup = () => shallow(<Profile />);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders profile image display", () => {
    const wrapper = setup();
    const imageDisplay = findByTestAttribute(wrapper, "profile-image");
    expect(imageDisplay.length).toBe(1);
  });

  test("renders profile user name", () => {
    const wrapper = setup();
    const imageDisplay = findByTestAttribute(wrapper, "user-name");
    expect(imageDisplay.length).toBe(1);
  });

  test("renders profile progress bar", () => {
    const wrapper = setup();
    const imageDisplay = findByTestAttribute(wrapper, "progress-bar");
    expect(imageDisplay.length).toBe(1);
  });
});
