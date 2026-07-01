import type { Language, LocalizedList, LocalizedText } from "@/types";

export function localize(text: LocalizedText, language: Language) {
  return text[language] || text.en;
}

export function localizeList(list: LocalizedList, language: Language) {
  return list[language] || list.en;
}
