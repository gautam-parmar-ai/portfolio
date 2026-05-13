import { useCallback, useMemo, useState } from "react";
import en from "../translations/en.json";
import it from "../translations/it.json";

const STORAGE_KEY = "portfolio_lang";

export function useTranslation() {
  const initialLang = useMemo(() => {
    const saved =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    return saved === "it" ? "it" : "en";
  }, []);

  const [lang, setLang] = useState(initialLang);

  const dict = lang === "it" ? it : en;

  const t = useCallback(
    (key) => {
      const value = dict?.[key];
      return value ?? en?.[key] ?? key;
    },
    [dict],
  );

  const setLanguage = useCallback((nextLang) => {
    const normalized = nextLang === "it" ? "it" : "en";
    setLang(normalized);
    window.localStorage.setItem(STORAGE_KEY, normalized);
  }, []);

  return { t, lang, setLanguage };
}
