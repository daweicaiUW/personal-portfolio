"use client";

import { Download, FileText } from "lucide-react";
import type { ResearchExperience } from "@/data/research";
import { translations } from "@/data/translations";
import { localize, localizeList } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { SafeImage } from "@/components/common/SafeImage";

export function ResearchCard({ item }: { item: ResearchExperience }) {
  const { language } = useLanguage();

  return (
    <article className="rounded-lg border border-husky-purple/10 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-husky-gold">{localize(item.duration, language)}</p>
          <h2 className="mt-2 text-2xl font-bold text-husky-ink">{localize(item.title, language)}</h2>
          <p className="mt-4 leading-7 text-slate-600">{localize(item.summary, language)}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {localizeList(item.highlights, language).map((highlight) => (
              <span key={highlight} className="rounded-full bg-husky-purple/10 px-3 py-1 text-sm font-semibold text-husky-purple">{highlight}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {item.poster ? (
              <a href={item.poster} className="focus-ring inline-flex items-center gap-2 rounded-full bg-husky-purple px-4 py-2 text-sm font-bold text-white">
                <Download size={16} />
                Poster
              </a>
            ) : null}
            {item.report ? (
              <a href={item.report} className="focus-ring inline-flex items-center gap-2 rounded-full border border-husky-purple/15 px-4 py-2 text-sm font-bold text-husky-purple">
                <FileText size={16} />
                Report
              </a>
            ) : null}
          </div>
        </div>
        <SafeImage src={item.frameworkImage} alt={localize(item.title, language)} label="Research Framework" className="aspect-[4/3] w-full rounded-lg lg:w-80" />
      </div>
      <div className="mt-8 overflow-hidden rounded-lg border border-slate-200">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-husky-mist text-husky-purple">
            <tr><th className="p-3">{language === "en" ? "Metric" : "指标"}</th><th className="p-3">{language === "en" ? "Observation" : "观察"}</th></tr>
          </thead>
          <tbody>
            {item.results.map((row) => (
              <tr key={row.metric.en} className="border-t border-slate-200">
                <td className="p-3 font-semibold text-husky-ink">{localize(row.metric, language)}</td>
                <td className="p-3 text-slate-600">{localize(row.observation, language)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
