"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { LOCALES, DIRECTIONS, COOKIE_KEYS, DEFAULT_LOCALE } from "@/lib/constants";

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEYS.LOCALE);
    if (saved && Object.values(LOCALES).includes(saved)) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const direction = DIRECTIONS[locale];
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", direction);
    localStorage.setItem(COOKIE_KEYS.LOCALE, locale);
  }, [locale, mounted]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === LOCALES.EN ? LOCALES.AR : LOCALES.EN));
  };

  const t = (obj) => {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[locale] || obj.en || "";
  };

  const value = {
    locale,
    isArabic: locale === LOCALES.AR,
    isEnglish: locale === LOCALES.EN,
    direction: DIRECTIONS[locale],
    setLocale,
    toggleLocale,
    t,
    mounted,
  };

  // ✅ دايماً لف الـ children في الـ Provider
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
};