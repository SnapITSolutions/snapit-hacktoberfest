import React from "react";
import { shallow } from "enzyme";
import FAQ from "./FAQ";

describe("FAQ", () => {
  const setup = () => shallow(<FAQ />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("renders FAQ page", () => {
    const wrapper = setup();
    const FAQComponent = findByTestAttr(wrapper, "FAQ-page");
    expect(FAQComponent.length).toBe(1);
  });

  test("renders FAQ Accordion list", () => {
    const wrapper = setup();
    const countdownDisplay = findByTestAttr(wrapper, "FAQ-list");
    expect(countdownDisplay.length).toBe(1);
  });

  test("renders FAQ heading", () => {
    const wrapper = setup();
    const countdownDisplay = findByTestAttr(wrapper, "heading-display");
    expect(countdownDisplay.length).toBe(1);
  });
});
