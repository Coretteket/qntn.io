import type { AstroGlobal } from "astro";
import { locales, type Locale, type Translations } from "./types";

/** Object of translations for defined locales. */
export const loaders = {
  en: () => import("@/locales/en"),
  nl: () => import("@/locales/nl"),
};

/** Loads the translations for a given locale. */
export const loadTranslations = async (locale?: Locale) => {
  state.locale = locale ?? locales[0];
  state.t = (await loaders[state.locale]())["default"];
  return state;
};

/** Global server-side localization state. */
export const state = { locale: locales[0], t: {} } as {
  locale: Locale;
  t: Translations;
};
