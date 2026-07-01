"use client";

import type { SkillGroup as SkillGroupType } from "@/data/skills";
import { useLanguage } from "@/components/common/LanguageProvider";
import { localize } from "@/lib/i18n";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  const { language } = useLanguage();

  return (
    <section className="rounded-lg border border-husky-purple/10 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-husky-ink">{localize(group.title, language)}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-husky-purple/10 px-3 py-1.5 text-sm font-semibold text-husky-purple">{skill}</span>
        ))}
      </div>
    </section>
  );
}
