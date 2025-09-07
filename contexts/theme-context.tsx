"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getTimeBasedTheme(): "dark" | "light" {
  const hour = new Date().getHours();
  return hour >= 19 || hour < 7 ? "dark" : "light";
}

function getSystemTheme(): "dark" | "light" {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

function getStoredTheme(): Theme | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") as Theme;
  }
  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      setThemeState(storedTheme);
    } else {
      const timeBasedTheme = getTimeBasedTheme();
      setThemeState(timeBasedTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", timeBasedTheme);
      }
    }
  }, []);

  useEffect(() => {
    let resolved: "dark" | "light";
    
    if (theme === "system") {
      resolved = getSystemTheme();
    } else {
      resolved = theme;
    }
    
    setResolvedTheme(resolved);
    
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        if (theme === "system") {
          const resolved = getSystemTheme();
          setResolvedTheme(resolved);
          const root = window.document.documentElement;
          root.classList.remove("light", "dark");
          root.classList.add(resolved);
        }
      };

      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};