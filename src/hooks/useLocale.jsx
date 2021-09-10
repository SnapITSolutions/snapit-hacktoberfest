import { useState, useEffect } from "react";
import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

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
        setMessages(English);
    }
  }, [locale]);
  return { locale, messages };
};

export default useLocale;
