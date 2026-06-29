import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "original" | "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "hazel-portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "original";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "original" || stored === "dark" || stored === "light") {
    return stored;
  }
  return "original";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
