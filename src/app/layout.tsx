import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/common/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dawei Cai / David Cai | ECE Portfolio",
    template: "%s | Dawei Cai"
  },
  description:
    "Academic and engineering portfolio for Dawei Cai, an Electrical & Computer Engineering student at the University of Washington."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
