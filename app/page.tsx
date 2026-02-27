import type { Metadata } from "next";
import { PageContent } from "@/components/page-content";

export const metadata: Metadata = {
  title: "Galsen DEV Links",
  description:
    "Le LinkTree de la communauté Galsen DEV, retrouvez tous les liens utiles pour rejoindre la communauté & suivre les activités.",
  generator: "Next.js",
  keywords: [
    "Galsen DEV",
    "développeurs sénégalais",
    "communauté tech",
    "Sénégal",
  ],
  authors: [{ name: "Galsen DEV" }],
  creator: "Galsen DEV",
  publisher: "Galsen DEV",
  openGraph: {
    title: "Galsen DEV Links",
    description:
      "La communauté des développeurs sénégalais. Rejoins-nous pour participer à nos évènements et découvrir nos projets, opportunités et ressources.",
    url: "https://links.galsen.dev",
    siteName: "Galsen DEV",
    locale: "fr_SN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galsen DEV Links",
    description:
      "La communauté des développeurs sénégalais. Rejoins-nous pour participer à nos évènements et découvrir nos projets, opportunités et ressources.",
    creator: "@galsendev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return <PageContent />;
}
