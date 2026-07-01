"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { localize } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { LanguageToggle } from "@/components/common/LanguageToggle";

const navItems = [
  { href: "/", label: translations.nav.home },
  { href: "/projects", label: translations.nav.projects },
  { href: "/research", label: translations.nav.research },
  { href: "/experience", label: translations.nav.experience },
  { href: "/skills", label: translations.nav.skills },
  { href: "/resume", label: translations.nav.resume },
  { href: "/contact", label: translations.nav.contact }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-husky-purple/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="focus-ring rounded text-lg font-black text-husky-purple">
          {profile.name}
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-husky-purple text-white" : "text-slate-700 hover:bg-husky-mist hover:text-husky-purple"
                }`}
              >
                {localize(item.label, language)}
              </Link>
            );
          })}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/resume" className="focus-ring inline-flex items-center gap-2 rounded-full bg-husky-gold px-4 py-2 text-sm font-bold text-husky-ink shadow-sm transition hover:-translate-y-0.5">
            <Download size={16} aria-hidden="true" />
            {localize(translations.nav.downloadResume, language)}
          </Link>
          <LanguageToggle />
        </div>
        <button
          type="button"
          className="focus-ring rounded-full p-2 text-husky-purple lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={localize(translations.nav.menu, language)}
          aria-expanded={open}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-husky-purple/10 bg-white px-4 pb-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring rounded-lg px-3 py-2 font-semibold text-slate-700 hover:bg-husky-mist">
                {localize(item.label, language)}
              </Link>
            ))}
            <Link href="/resume" onClick={() => setOpen(false)} className="focus-ring inline-flex items-center gap-2 rounded-lg bg-husky-gold px-3 py-2 font-bold text-husky-ink">
              <Download size={16} aria-hidden="true" />
              {localize(translations.nav.downloadResume, language)}
            </Link>
            <LanguageToggle />
          </div>
        </div>
      ) : null}
    </header>
  );
}
