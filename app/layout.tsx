import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galsen DEV Links",
  description: "Rejoignez la communauté Galsen DEV 🫱🏾‍🫲🏾",
  generator: "galsen.dev",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/degyjrpjj/image/upload/v1764037205/links/og_share.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token={process.env.NEXT_PUBLIC_BEAM_DATA_TOKEN}
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
