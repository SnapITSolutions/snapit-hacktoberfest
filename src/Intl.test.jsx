import { locale } from "./components/Wrapper";

jest.mock("react-intl", () => ({
  ...jest.requireActual("react-intl"),
  useIntl: () => ({
    formatMessage: jest.fn(),
  }),
}));

test("the locale is either Spanish or English", () => {
  expect(locale).toBe("en-US" || "es-US");
});
