import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buchbox",
  description: "",
};

const atlas = localFont({
  src: [
    { path: "./font/Atlas-Grotesk-Web-Light.ttf", weight: "200" },
    { path: "./font/Atlas-Grotesk-Web-Regular.ttf", weight: "400" },
  ],
  variable: "--font-atlas",
});

const atlasTypewriter = localFont({
  src: [
    { path: "./font/Atlas-Typewriter-Web-Regular.ttf", weight: "400" },
  ],
  variable: "--font-atlas-tw",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${atlas.className} ${atlasTypewriter.variable}`}>{children}</body>
    </html>
  );
}
