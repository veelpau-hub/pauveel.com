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
  title: "Pau Vidal — UX/UI Designer & Front-end Developer",
  description:
    "UX/UI Designer with a background in graphic design, front-end development and data visualisation. Based in Lleida. Specialised in mobile apps, technical interfaces and geospatial projects.",
  openGraph: {
    title: "Pau Vidal — UX/UI Designer & Front-end Developer",
    description:
      "UX/UI Designer with a background in graphic design, front-end development and data visualisation. Based in Lleida.",
    siteName: "Pau Vidal",
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
