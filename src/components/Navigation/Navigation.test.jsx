import React from "react";
import { shallow } from "enzyme";
import Navigation from "./Navigation";

jest.mock("react-intl", () => ({
  ...jest.requireActual("react-intl"),
  useIntl: () => ({
    formatMessage: jest.fn(),
  }),
}));

describe("Navigation", () => {
  const setup = () => shallow(<Navigation />);
  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders navigation display", () => {
    const wrapper = setup();
    const navigationDisplay = findByTestAttribute(
      wrapper,
      "navigation-display"
    );
    expect(navigationDisplay.length).toBe(1);
  });

  test("clicking button displays navigation menu", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "nav-button");
    button.simulate("click");
    const listDisplay = findByTestAttribute(wrapper, "list-display");
    expect(listDisplay.length).toBe(1);
  });
});
