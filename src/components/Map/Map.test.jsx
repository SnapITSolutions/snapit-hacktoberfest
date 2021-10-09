import React from "react";
import { shallow } from "enzyme";
import Map from "./Map";

describe("Map", () => {
  const setup = () => shallow(<Map />);

  const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

  test("renders Map", () => {
    const wrapper = setup();
    const homeComponent = findByTestAttr(wrapper, "Map-display");
    expect(homeComponent.length).toBe(1);
  });
});
