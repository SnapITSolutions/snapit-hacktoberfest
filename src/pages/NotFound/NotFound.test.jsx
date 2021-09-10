import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("notFound", () => {
  const setup = () => shallow(<NotFound />);

  const findByTestAttribute = (wrapper, val) =>
    wrapper.find(`[data-test='${val}']`);

  test("renders without error", () => {
    const wrapper = setup();
    expect(wrapper.exists()).toBeTruthy();
  });

  test("renders page not found display", () => {
    const wrapper = setup();
    const pageNotFoundDisplay = findByTestAttribute(
      wrapper,
      "page-not-found-display"
    );
    expect(pageNotFoundDisplay.length).toBe(1);
  });

  test("renders first heading display", () => {
    const wrapper = setup();
    const headingDisplay = findByTestAttribute(wrapper, "heading-display");
    expect(headingDisplay.length).toBe(2);
  });

  test("renders paragraph display", () => {
    const wrapper = setup();
    const paraDisplay = findByTestAttribute(wrapper, "para-display");
    expect(paraDisplay.length).toBe(1);
  });

  test("renders image display", () => {
    const wrapper = setup();
    const imageDisplay = findByTestAttribute(wrapper, "image-display");
    expect(imageDisplay.length).toBe(1);
  });
});
