import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const setup = () => shallow(<App />);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });
});
