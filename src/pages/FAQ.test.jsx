import React from "react";
import { shallow } from "enzyme";
import FAQ from "./FAQ";

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders FAQ page", () => {
  const wrapper = shallow(<FAQ />);
  const FAQComponent = findByTestAttr(wrapper, "FAQ-page");
  expect(FAQComponent.length).toBe(1);
});

test("renders FAQ Accordion list", () => {
  const wrapper = shallow(<FAQ />);
  const countdownDisplay = findByTestAttr(wrapper, "FAQ-list");
  expect(countdownDisplay.length).toBe(1);
});

test("renders FAQ heading", () => {
  const wrapper = shallow(<FAQ />);
  const countdownDisplay = findByTestAttr(wrapper, "heading-display");
  expect(countdownDisplay.length).toBe(1);
});
