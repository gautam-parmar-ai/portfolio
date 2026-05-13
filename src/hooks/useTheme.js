import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "portfolio_theme";

export function useTheme() {
  const initialTheme = useMemo(() => {
    const saved =
      typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
    return saved === "light" ? "light" : "dark";
  }, []);

  const [theme, setThemeState] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next) => {
    const normalized = next === "dark" ? "dark" : "light";
    setThemeState(normalized);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, setTheme, toggleTheme };
}
