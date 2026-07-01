"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/components/common/LanguageProvider";
import { localize } from "@/lib/i18n";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-husky-purple/10 bg-husky-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-bold">{profile.displayName}</p>
          <p className="mt-1 max-w-xl text-sm text-white/70">{localize(profile.tagline, language)}</p>
          <p className="mt-3 text-xs text-white/50">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
          <a aria-label="Email" href={`mailto:${profile.email}`} className="focus-ring rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Mail size={18} /></a>
          <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Github size={18} /></a>
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Linkedin size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
