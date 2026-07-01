import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-husky-gold">{eyebrow}</p> : null}
      <h1 className="text-3xl font-bold text-husky-ink sm:text-4xl">{title}</h1>
      {children ? <p className="mt-3 text-base leading-7 text-slate-600">{children}</p> : null}
    </div>
  );
}
