import React from "react";
import { mountWithIntl } from "../utils/intl-enzyme-test-helper";
import AccordionList from "./AccordionList";

describe("FAQ AccordionList", () => {
  const setup = () => mountWithIntl(<AccordionList />);
  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("contains the text `Question 1`", () => {
    const wrapper = setup();
    const FAQListHeader = findByTestAttr(wrapper, "AccordionList-question");
    expect(FAQListHeader.text()).toBe("Question 1");
  });
});
