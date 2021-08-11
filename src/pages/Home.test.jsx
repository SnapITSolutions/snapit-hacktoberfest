import React from "react";
import { shallow } from "enzyme";
// import { render, fireEvent, getByTestId} from "react-testing-library";
import Home from "./Home";
// import CountdownTimer from "../components/CountdownTimer";
// import { delay } from "delay"

// describe("Home", () => {
//     const setup = () => shallow(<Home />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders Home page", () => {
  const wrapper = shallow(<Home />);
  const homeComponent = findByTestAttr(wrapper, "Home-page");
  expect(homeComponent.length).toBe(1);
});

test("renders CountdownTimer", () => {
  const wrapper = shallow(<Home />);
  const countdownDisplay = findByTestAttr(wrapper, "countdown-display");
  expect(countdownDisplay.length).toBe(1);
});

// test("timer is counting down", () => {
//     const wrapper = shallow(<CountdownTimer />);
// const countdownDisplay = findByTestAttr(wrapper, "countdown-display");
// const seconds = {s};
// expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
// const updatedSeconds = {s};
// expect(seconds !== updatedSeconds);
// expect(countdownDisplay.length).toBe(1);
// });

// __tests__/timerGame-test.js

// jest.useFakeTimers();

// test('waits 1 second before ending the game', () => {
//   const  wrapper = shallow(<CountdownTimer />);
//   const countdownDisplay = findByTestAttr(wrapper, "countdown-display");
// //   const timer = require('../components/CountdownTimer');
//   timer();

//   expect(setInterval).toHaveBeenCalledTimes(1);
//   expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

// describe("settimeout fn", () => {
//     it("should increment index by 1 after 1 second (using advanceTimersByTime)", () => {
//       const component = shallow(<CountdownTimer />);
//       jest.useFakeTimers();
//       expect(component.index).toEqual(0);
//       component.instance().setTimeoutFn();
//       jest.advanceTimersByTime(1000);
//       expect(component.index).toEqual(1);
//       jest.useRealTimers();
//     });
// });

// describe('WaitFor Testing', () => {
//     it('should take at least 3 seconds to execute the test', () => {
//         const Start:number = moment.now();
//         WaitFor(3)
//         const Duration = (moment.now() - Start);
//         expect(Duration).toBeGreaterThan(2000);
//         expect(Duration).toBeLessThan(10000);
//     });
// });
