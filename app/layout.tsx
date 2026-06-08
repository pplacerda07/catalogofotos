import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fiora | Fotografia",
  description:
    "Fiora. Fotografia autoral com olhar preciso e estética atemporal: vinhos, gastronomia e paisagem.",
  keywords: [
    "Fiora",
    "fotografia",
    "fotógrafo",
    "portfólio",
    "retratos",
    "ensaios",
    "eventos",
  ],
  openGraph: {
    title: "Fiora | Fotografia",
    description:
      "Fotografia autoral com olhar preciso e estética atemporal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body className="grain font-sans antialiased">{children}</body>
    </html>
  );
}
