"use client";

import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { translations } from "@/data/translations";
import { localize } from "@/lib/i18n";
import { useLanguage } from "@/components/common/LanguageProvider";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ContactButton } from "@/components/common/ContactButton";

export default function ContactPage() {
  const { language } = useLanguage();
  const subject = encodeURIComponent("Portfolio contact");
  const body = encodeURIComponent("Hi Dawei,\n\nI found your portfolio and would like to connect.");

  return (
    <PageContainer>
      <SectionHeading title={language === "en" ? "Contact" : "联系"}>
        {localize(translations.common.contactMessage, language)}
      </SectionHeading>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-lg border border-husky-purple/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-husky-ink">{profile.displayName}</h2>
          <div className="mt-5 grid gap-3">
            <p className="flex items-center gap-3 text-slate-700"><Mail size={18} className="text-husky-purple" />{profile.email}</p>
            <p className="flex items-center gap-3 text-slate-700"><Phone size={18} className="text-husky-purple" />{profile.phone}</p>
            <p className="flex items-center gap-3 text-slate-700"><MessageSquare size={18} className="text-husky-purple" />WeChat: {profile.wechat}</p>
            <p className="flex items-center gap-3 text-slate-700"><MapPin size={18} className="text-husky-purple" />{localize(profile.location, language)}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <ContactButton href={`mailto:${profile.email}?subject=${subject}&body=${body}`} label="Email" icon={Mail} />
            <ContactButton href={`tel:${profile.phoneHref}`} label="Phone" icon={Phone} />
            <ContactButton href={profile.github} label="GitHub" icon={Github} external />
            <ContactButton href={profile.linkedin} label="LinkedIn" icon={Linkedin} external />
          </div>
        </section>
        <section className="rounded-lg border border-husky-purple/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-husky-ink">{language === "en" ? "Quick Message" : "快速邮件"}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {language === "en" ? "This frontend-only form opens your email client with a prepared message. EmailJS or Formspree can be connected later if a backend-free form endpoint is needed." : "该纯前端表单会打开邮件客户端并生成邮件内容。如需无后端表单服务，后续可接入 EmailJS 或 Formspree。"}
          </p>
          <form className="mt-5 grid gap-4" action={`mailto:${profile.email}`} method="get">
            <label className="grid gap-2 text-sm font-semibold text-husky-ink">
              {language === "en" ? "Subject" : "主题"}
              <input name="subject" defaultValue="Portfolio contact" className="focus-ring rounded-lg border border-slate-200 px-3 py-2 font-normal" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-husky-ink">
              {language === "en" ? "Message" : "消息"}
              <textarea name="body" rows={6} defaultValue={"Hi Dawei,\n\n"} className="focus-ring rounded-lg border border-slate-200 px-3 py-2 font-normal" />
            </label>
            <button type="submit" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-husky-purple px-5 py-3 text-sm font-bold text-white transition hover:bg-husky-violet">
              <Send size={16} aria-hidden="true" />
              {language === "en" ? "Open Email" : "打开邮件"}
            </button>
          </form>
        </section>
      </div>
    </PageContainer>
  );
}
