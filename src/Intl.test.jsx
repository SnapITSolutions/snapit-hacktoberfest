// import React from "react";
// import { FormattedMessage } from "react-intl";
import useLocale from "./hooks/useLocale";

test("the locale is either Spanish or English", () => {
  const { locale } = useLocale();
  expect(locale).toBe("en-US" || "es-US");
});

// test("the message should say Home", () => {
//   // const {locale} = useLocale();
//   const message = <FormattedMessage id="Home-nav" />;
//   expect(message).toBe("Home");
// });

// test("the message should say Casa", () => {
//   // const {locale} = useLocale();
//   const message = <FormattedMessage id="Home-nav" />;
//   expect(message).toBe("Casa");
// });
