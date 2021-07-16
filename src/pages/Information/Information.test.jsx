import React from "react";
import { shallow } from "enzyme";
import Information from "./Information";

describe("Information", () => {
  const setup = () => shallow(<Information />);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });
});
