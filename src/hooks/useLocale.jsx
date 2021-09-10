import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

// detect the language preference of the user's browser
const useLocale = () => {
  const locale = window.navigator.userLanguage || window.navigator.language;

  let messages;
  if (locale === "en-US") {
    messages = English;
  } else {
    messages = Spanish;
  }
  return { locale, messages };
};

export default useLocale;
