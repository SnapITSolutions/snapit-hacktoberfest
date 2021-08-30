import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  const setup = () => shallow(<Home />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("renders Home page", () => {
    const wrapper = setup();
    const homeComponent = findByTestAttr(wrapper, "Home-page");
    expect(homeComponent.length).toBe(1);
  });

  test("renders CountdownTimer", () => {
    const wrapper = setup();
    const countdownDisplay = findByTestAttr(wrapper, "countdown-display");
    expect(countdownDisplay.length).toBe(1);
  });

  test("renders CountdownTimer", () => {
    const wrapper = setup();
    const countdownDisplay = findByTestAttr(wrapper, "heading-display");
    expect(countdownDisplay.length).toBe(1);
  });
});
