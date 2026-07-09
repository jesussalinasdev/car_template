import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "../globals.css";
import { CustomCursor } from "@/components/ui/custom-cursor";

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
  return (
    <html lang={lang} className={`dark ${inter.variable} ${bebasNeue.variable}`}>
      <body className="bg-background text-foreground antialiased cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
