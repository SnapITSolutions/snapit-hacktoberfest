import useLocale from "./hooks/useLocale";

test("the locale is either Spanish or English", () => {
  const { locale } = useLocale();
  expect(locale).toBe("en-US" || "es-US");
});
