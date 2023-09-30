import type { loaders } from "./translate";

export const locales = ["en", "nl"] as const;

export type Locale = (typeof locales)[number];
export type Translations = Awaited<
  ReturnType<(typeof loaders)[Locale]>
>["default"];
