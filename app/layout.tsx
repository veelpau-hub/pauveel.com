import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  JetBrains_Mono,
  Geist,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--ff-display",
  axes: ["opsz", "wdth"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--ff-serif",
  weight: "400",
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--ff-mono",
  weight: ["400", "500"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--ff-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pau Veel — Not your average designer.",
  description:
    "Independent designer and front-end engineer based in Barcelona. Visual identity, product design, and code.",
  openGraph: {
    title: "Pau Veel — Not your average designer.",
    description:
      "Independent designer and front-end engineer based in Barcelona.",
    siteName: "Pau Veel",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bricolage.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${geist.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
