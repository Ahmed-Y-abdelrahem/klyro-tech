"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { THEMES, COOKIE_KEYS } from "@/lib/constants";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEYS.THEME);
    if (saved && Object.values(THEMES).includes(saved)) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? THEMES.DARK : THEMES.LIGHT);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(COOKIE_KEYS.THEME, theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  };

  const value = {
    theme,
    isDark: theme === THEMES.DARK,
    isLight: theme === THEMES.LIGHT,
    setTheme,
    toggleTheme,
    mounted, // بنمررها عشان الـ Components تعرف تستنى لحد ما التحميل يخلص
  };

  // ✅ دايماً لف الـ children في الـ Provider
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};