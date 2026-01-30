import type { Metadata } from "next";
import Script from "next/script";
import {
  Geist_Mono,
  Hahmlet,
  Newsreader,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";

const hahmlet = Hahmlet({
  variable: "--font-hahmlet",
  weight: ["400"],
  subsets: ["latin"],
});

const fontSansSerif = Instrument_Sans({
  variable: "--font-sans-serif",
  subsets: ["latin"],
});

const fontMonospace = Geist_Mono({
  variable: "--font-monospace",
  subsets: ["latin"],
});

const fontSerif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoseok Choi",
  description: "once software engineer, now a music student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSansSerif.variable} ${fontMonospace.variable} ${hahmlet.variable} ${fontSerif.variable} antialiased`}
      >
        {children}
      </body>
      {process.env.IS_PRODUCTION && (
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="50a04837-02f3-4b36-b0a7-9b70ceddffe9"
        />
      )}
    </html>
  );
}
