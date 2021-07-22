import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import FAQ from "./pages/FAQ";
import Information from "./pages/Information";
import Profile from "./pages/Profile";
import Registration from "./pages/Registration";
import AccordionList from "./components/AccordionList";
import NavBar from "./components/NavBar";

// Set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Factory function to create a ShallowWrapper for the App Component.
//   @function setup
//   @returns {ShallowWrapper}
// const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders FAQ page", () => {
  const wrapper = shallow(<FAQ />);
  const faqComponent = findByTestAttr(wrapper, "FAQ-page");
  expect(faqComponent.length).toBe(1);
});

test("renders Information page", () => {
  const wrapper = shallow(<Information />);
  const infoComponent = findByTestAttr(wrapper, "Info-page");
  expect(infoComponent.length).toBe(1);
});

test("renders Profile page", () => {
  const wrapper = shallow(<Profile />);
  const profileComponent = findByTestAttr(wrapper, "Profile-page");
  expect(profileComponent.length).toBe(1);
});

test("renders Registration page", () => {
  const wrapper = shallow(<Registration />);
  const registrationComponent = findByTestAttr(wrapper, "Registration-page");
  expect(registrationComponent.length).toBe(1);
});

test("renders Accordion List", () => {
  const wrapper = shallow(<AccordionList />);
  const accordionListComponent = findByTestAttr(
    wrapper,
    "component-accordionList"
  );
  expect(accordionListComponent.length).toBe(1);
});

test("renders NavBar", () => {
  const wrapper = shallow(<NavBar />);
  const navBarComponent = findByTestAttr(wrapper, "component-navBar");
  expect(navBarComponent.length).toBe(1);
});
