"use client";

import { Download, Eye, FileText } from "lucide-react";
import type { DocumentItem } from "@/data/documents";
import { translations } from "@/data/translations";
import { useLanguage } from "@/components/common/LanguageProvider";
import { localize } from "@/lib/i18n";

export function DocumentCard({ document }: { document: DocumentItem }) {
  const { language } = useLanguage();

  return (
    <article className="rounded-lg border border-husky-purple/10 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-lg bg-husky-purple/10 p-3 text-husky-purple"><FileText aria-hidden="true" /></div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-husky-gold">{localize(document.category, language)}</p>
          <h2 className="mt-1 text-lg font-bold text-husky-ink">{localize(document.title, language)}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{localize(document.description, language)}</p>
          <p className="mt-2 text-xs text-slate-500">{localize(translations.common.comingSoon, language)} if the PDF has not been added yet.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={document.href} className="focus-ring inline-flex items-center gap-2 rounded-full bg-husky-purple px-4 py-2 text-sm font-bold text-white">
              <Eye size={15} aria-hidden="true" />
              {localize(translations.common.preview, language)}
            </a>
            <a href={document.href} download className="focus-ring inline-flex items-center gap-2 rounded-full border border-husky-purple/15 px-4 py-2 text-sm font-bold text-husky-purple">
              <Download size={15} aria-hidden="true" />
              {localize(translations.common.download, language)}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
