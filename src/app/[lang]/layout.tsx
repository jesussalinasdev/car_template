import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { getDictionary } from "@/dictionaries";
import { I18nProvider } from "@/components/i18n-provider";
import "../globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--app-font-sans" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--app-font-display" });

export const metadata: Metadata = {
  title: "CarbonApex Mechanics",
  description: "Elite tuning and repair for premium vehicles.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  return (
    <html lang={lang} className={`dark ${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <I18nProvider dict={dict} lang={lang}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
