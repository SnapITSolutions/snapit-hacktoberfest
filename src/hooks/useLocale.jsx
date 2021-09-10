import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

// detect the language preference of the user's browser
const useLocale = () => {
  const locale = navigator.language;

  let messages;
  switch (locale) {
    case "en-US":
      messages = English;
      break;
    case "es-US":
      messages = Spanish;
      break;
    default:
      messages = English;
  }
  return { locale, messages };
};

export default useLocale;
