"use client";

import type { Project } from "@/data/projects";
import { useLanguage } from "@/components/common/LanguageProvider";
import { localize } from "@/lib/i18n";
import { SafeImage } from "@/components/common/SafeImage";

export function ProjectGallery({ gallery }: { gallery: Project["gallery"] }) {
  const { language } = useLanguage();

  if (!gallery.length) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {gallery.map((item) => (
        <figure key={item.src} className="overflow-hidden rounded-lg border border-husky-purple/10 bg-white shadow-sm">
          <SafeImage src={item.src} alt={localize(item.alt, language)} label={localize(item.alt, language)} className="aspect-video w-full" />
          <figcaption className="px-4 py-3 text-sm font-medium text-slate-600">{localize(item.alt, language)}</figcaption>
        </figure>
      ))}
    </div>
  );
}
