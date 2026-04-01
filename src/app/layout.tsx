import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://present-topic-pop.vercel.app";

export const metadata: Metadata = {
  title: "Proof of Presence (PoP) — Xác minh hiện diện thực tế",
  description:
    "Giải pháp xác minh hiện diện thực tế chống gian lận check-in cho dự án LandX. Kết hợp Face Authentication và Live Tracking để đảm bảo đúng người, đúng địa điểm, đúng thời điểm.",
  keywords: [
    "Proof of Presence",
    "PoP",
    "check-in verification",
    "anti-fraud",
    "LandX",
    "Pi Group",
    "Face Authentication",
    "GPS tracking",
    "xác minh hiện diện",
    "chống gian lận",
  ],
  authors: [{ name: "Võ Quốc Huy", url: siteUrl }],
  creator: "Võ Quốc Huy",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    title: "Proof of Presence (PoP) — Xác minh hiện diện thực tế",
    description:
      "Giải pháp xác minh hiện diện thực tế chống gian lận check-in. Kết hợp Face Authentication và Live Tracking — đúng người, đúng địa điểm.",
    siteName: "PoP — PI Group Software",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof of Presence (PoP)",
    description:
      "Giải pháp xác minh hiện diện thực tế chống gian lận check-in cho dự án LandX.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
