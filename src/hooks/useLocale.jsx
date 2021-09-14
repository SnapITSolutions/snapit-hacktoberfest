import { useEffect, useState } from "react";
import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";
import DEFAULT_LANGUAGE from "../utils/constants";

// detect the language preference of the user's browser
const useLocale = () => {
  const locale = navigator.language;
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case "en-US":
        setMessages(English);
        break;
      case "es-US":
        setMessages(Spanish);
        break;
      default:
        setMessages(DEFAULT_LANGUAGE);
    }
  }, [locale]);
  return { locale, messages, defaultLanguage: DEFAULT_LANGUAGE };
};

export default useLocale;
