"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex rounded-full border border-husky-purple/15 bg-white p-1 shadow-sm" aria-label="Language selector">
      {(["en", "zh"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={`focus-ring rounded-full px-3 py-1 text-sm font-semibold transition ${
            language === item ? "bg-husky-purple text-white" : "text-husky-ink hover:bg-husky-mist"
          }`}
          aria-pressed={language === item}
        >
          {item === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
