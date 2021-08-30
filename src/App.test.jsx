import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const setup = () => shallow(<App />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

  test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
  });

  test("renders the Router component", () => {
    const wrapper = setup();
    const router = findByTestAttr(wrapper, "router");
    expect(router.length).toBe(1);
  });
});
