import React from "react";
import Navigation from "./Navigation";
import { shallowWithIntl } from "../../utils/intl-enzyme-test-helper";

jest.mock("react-intl", () => ({
  ...jest.requireActual("react-intl"),
  useIntl: () => ({
    formatMessage: jest.fn(),
  }),
}));

// describe("Navigation", () => {
//   const setup = () => shallowWithIntl(<Navigation />);
// const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

//   test("contains the text `Home`", () => {
//     const wrapper = setup();
//     const navListLink = findByTestAttribute(wrapper, "link-name");
//     expect(navListLink.text()).at(0).toBe("Home");
//   });
// });

// test("contains the text `Home`", () => {
//   const wrapper = setup();
//   // const navListLink = findByTestAttribute(wrapper.dive(), "link-name");
//     // expect(List.text()).at(0).toBe("Home");
//     // expect(wrapper.find(List).containsMatchingElement(<ListItemText><formatMessage id="Home-nav" /></ListItemText>)).toBe(true
//     expect(wrapper.find(List).dive().find(ListItem).text()).toBe("Home");

//   });
// });

// test("contains the text `Home`", () => {
//   expect(List.contains("Home").toBe(true));
// });

// const users = [{id: 1, name: 'Hugo'}, {id: 2, name: 'Francesco'}];

// test('we should have ids 1 and 2', () => {
//   expect(users).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({id: 1}),
//       expect.objectContaining({id: 2})
//     ])
//   );
// });

describe("Navigation", () => {
  const setup = () => shallowWithIntl(<Navigation />);
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
