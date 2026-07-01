import type { LucideIcon } from "lucide-react";

export function ContactButton({
  href,
  label,
  icon: Icon,
  external = false
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="focus-ring inline-flex items-center gap-2 rounded-full border border-husky-purple/15 bg-white px-4 py-2 text-sm font-semibold text-husky-purple shadow-sm transition hover:-translate-y-0.5 hover:border-husky-purple/30 hover:shadow-md"
    >
      <Icon aria-hidden="true" size={17} />
      {label}
    </a>
  );
}
