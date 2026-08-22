import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn — دالة دمج classes ذكية (تحل التعارضات + تدعم الـ conditional classes)
 */
export const cn = (...inputs) => twMerge(clsx(inputs));

/**
 * URL الأساسي للموقع (متغير بيئة إن وُجد)
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://klyro-tech.vercel.app";

/**
 * تنسيق رقم مع صفر بادئ (01, 02, ...)
 */
export const padNumber = (n) => String(n).padStart(2, "0");

/**
 * Slugify نص إنجليزي/عربي
 */
export const slugify = (str) =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u0600-\u06FF\-]+/g, "")
    .replace(/\-\-+/g, "-");

/**
 * تقطيع نص طويل
 */
export const truncate = (str, length = 120) => {
  if (!str) return "";
  if (str.length <= length) return str;
  return str.slice(0, length).trim() + "…";
};

/**
 * دمج array من الـ params للـ SEO
 */
export const buildMetadata = (base, override = {}) => ({
  ...base,
  ...override,
  openGraph: { ...(base.openGraph || {}), ...(override.openGraph || {}) },
  twitter: { ...(base.twitter || {}), ...(override.twitter || {}) },
});