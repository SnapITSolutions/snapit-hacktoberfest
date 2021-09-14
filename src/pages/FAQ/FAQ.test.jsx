import React from "react";
import { mountWithIntl } from "../../utils/intl-enzyme-test-helper";
import FAQ from "./FAQ";

describe("FAQ", () => {
  const setup = () => mountWithIntl(<FAQ />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("renders FAQ page", () => {
    const wrapper = setup();
    const FAQComponent = findByTestAttr(wrapper, "FAQ-page");
    expect(FAQComponent.length).toBe(1);
  });

  test("renders FAQ Accordion list", () => {
    const wrapper = setup();
    const FAQList = findByTestAttr(wrapper, "FAQ-list");
    expect(FAQList.length).toBe(1);
  });

  test("renders FAQ heading", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttr(wrapper, "heading-display");
    expect(headingDisplay.length).toBe(1);
  });
});
