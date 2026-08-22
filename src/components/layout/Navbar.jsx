"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun, Languages } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocale } from "@/contexts/LocaleContext";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isDark, toggleTheme, mounted: themeMounted } = useTheme();
  const { t, isArabic, toggleLocale, mounted: localeMounted } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-space/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors duration-200",
                  active ? "text-text" : "text-muted hover:text-text"
                )}
              >
                {t({ en: item.label, ar: item.labelAr })}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* زر تبديل الثيم (Dark / Light) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            {!themeMounted ? (
              <div className="h-4 w-4" />
            ) : isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* زر تبديل اللغة (EN / ع) */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-line px-3.5 font-mono text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Languages className="h-4 w-4" />
            {!localeMounted ? "..." : isArabic ? "EN" : "ع"}
          </button>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary">
              {t({ en: "Start A Project", ar: "ابدأ مشروعك" })}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] rounded-full border border-line text-text lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "block h-[1.5px] w-4 bg-current transition-transform duration-300",
                menuOpen && "translate-y-[4.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[1.5px] w-4 bg-current transition-transform duration-300",
                menuOpen && "-translate-y-[4px] -rotate-45"
              )}
            />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-space lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base text-muted hover:bg-white/[0.03] hover:text-text"
                >
                  {t({ en: item.label, ar: item.labelAr })}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-3 w-full">
                {t({ en: "Start A Project", ar: "ابدأ مشروعك" })}
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
            <ScrollProgress />
    </header>
  );
}