// import { useState, useEffect } from "react";
import Spanish from "../lang/es-US.json";
import English from "../lang/en-US.json";

// detect the language preference of the user's browser
const useLocale = () => {
  const locale = window.navigator.userLanguage || window.navigator.language;
  // const [messages, setMessages] = useState(English);

  // useEffect(() => {
  let messages;
  if (locale === "en-US") {
    messages = English;
    // setMessages(English);
  } else {
    messages = Spanish;
    // setMessages(Spanish);
  }
  // }, [locale]);
  return { locale, messages };
};

export default useLocale;
