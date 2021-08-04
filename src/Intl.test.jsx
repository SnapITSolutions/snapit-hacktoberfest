import React from "react";
import { shallow } from "enzyme";
// import ListItemText from "@material-ui/core/ListItemText";
import { locale } from "./components/Wrapper";
// import Wrapper, { locale } from "./components/Wrapper";
import Navigation from "./components/Navigation";

jest.mock("react-intl", () => ({
  ...jest.requireActual("react-intl"),
  useIntl: () => ({
    formatMessage: jest.fn(),
  }),
}));

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("Page is displayed in English", () => {
  const wrapper = shallow(<Navigation />);
  const appComponent = findByTestAttr(wrapper, "try-this");
  if (locale === "en-US") {
    expect(appComponent.textContent).toMatch("Information");
  }
});

test("the locale is either Spanish or English", () => {
  expect(locale).toBe("en-US" || "es-US");
  // expect(new Set(locale)).toContain('en-US' || 'es-US');
});

// test('Page is displayed in English', () => {
//   const wrapper = shallow(<Navigation />);
// //   const navList = findByTestAttr(wrapper, "display-list");
//   if (locale === "en-US") {
//       expect(wrapper.containsMatchingElement(<ListItemText primary="Information"/>)).toMatch(/Information/);
//   }
// });

// test('Page is displayed in English', () => {
//   const wrapper = shallow(<Navigation />);
//   if (locale === "en-US") {
//       expect(wrapper.find("ListItemText").toMatch("Information"));
//   }
// });

test("Page is displayed in Spanish", () => {
  if (locale === "es-Us") {
    expect("registration-nav").toMatch(/Registro/);
  }
});
