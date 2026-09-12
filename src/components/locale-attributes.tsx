"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export default function LocaleAttributes({ locale }: { locale: Locale }) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return null;
}
