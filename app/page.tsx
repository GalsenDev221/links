import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveGrid } from "@/components/interactive-grid";
import {
  MessageCircle,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  Youtube,
  Instagram,
  Coffee,
  Heart,
  Users2,
  Code2,
  Palette,
  Github,
  Map,
  House,
  Earth,
  HandHelping,
  Braces,
  GitPullRequestArrowIcon,
} from "lucide-react";

import Image from "next/image";
import type { Metadata } from "next";

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
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      <InteractiveGrid
        className="text-muted-foreground"
        gridSize={60}
        strokeWidth={1.5}
        opacity={0.15}
        animationSpeed={1500}
      />

      <div className="container max-w-2xl mx-auto px-4 py-8 sm:py-12 relative z-10">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-4 shadow-lg">
              <Image
                className="rounded-2xl"
                src="/icon.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-balance mb-4 text-primary">
              Galsen DEV
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed max-w-lg mx-auto">
            La communauté des développeurs sénégalais. Rejoins-nous pour
            participer à nos évènements et découvrir nos projets, opportunités
            et ressources.
          </p>
        </header>

        <div className="space-y-8">
          {/* Community Buttons */}
          <Card className="border-2 border-primary/10 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <House className="w-5 h-5 text-primary" />
                Rejoindre la Communauté
              </h2>
              <div className="space-y-3">
                <LinkButton
                  href="https://discord.gg/CKZcKqf"
                  icon={<MessageCircle className="w-5 h-5 text-white" />}
                  variant="default"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white border-0"
                >
                  Rejoindre le serveur Discord
                </LinkButton>
                <LinkButton
                  href="https://chat.whatsapp.com/EzigxN1N2bZBdxooqaH2Gr"
                  icon={<Users2 className="w-5 h-5 text-[#25D366]" />}
                  className="border-[#25D366]/60 hover:border-[#25D366]/80 hover:bg-[#25D366]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  WhatsApp Community
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Earth className="w-5 h-5 text-primary" />
                Réseaux Sociaux
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <LinkButton
                  href="https://facebook.com/galsendev"
                  icon={<Facebook className="w-5 h-5 text-[#1877F2]" />}
                  className="border-[#1877F2]/60 hover:border-[#1877F2]/80 hover:bg-[#1877F2]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Facebook
                </LinkButton>
                <LinkButton
                  href="https://x.com/galsendev"
                  icon={<Twitter className="w-5 h-5 text-black" />}
                  className="border-black/60 hover:border-black/80 hover:bg-black/10 hover:text-foreground hover:scale-[1.03]"
                >
                  X (Twitter)
                </LinkButton>
                <LinkButton
                  href="https://www.linkedin.com/company/galsendev"
                  icon={<Linkedin className="w-5 h-5 text-[#0A66C2]" />}
                  className="border-[#0A66C2]/60 hover:border-[#0A66C2]/80 hover:bg-[#0A66C2]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  LinkedIn
                </LinkButton>
                <LinkButton
                  href="https://t.me/s/galsendev"
                  icon={<Send className="w-5 h-5 text-[#0088CC]" />}
                  className="border-[#0088CC]/60 hover:border-[#0088CC]/80 hover:bg-[#0088CC]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Telegram
                </LinkButton>
                <LinkButton
                  href="https://youtube.com/@GalsenDEV"
                  icon={<Youtube className="w-5 h-5 text-[#FF0000]" />}
                  className="border-[#FF0000]/60 hover:border-[#FF0000]/80 hover:bg-[#FF0000]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  YouTube
                </LinkButton>
                <LinkButton
                  href="https://instagram.com/galsendev221"
                  icon={<Instagram className="w-5 h-5 text-[#E4405F]" />}
                  className="border-[#E4405F]/60 hover:border-[#E4405F]/80 hover:bg-[#E4405F]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Instagram
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          {/* Donation Buttons */}
          <Card className="border-2 border-accent/20 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HandHelping className="w-5 h-5 text-[#0096ff]" />
                Soutenir la Communauté
              </h2>
              <div className="space-y-3">
                <LinkButton
                  href="https://ko-fi.com/galsendev"
                  icon={<Coffee className="w-5 h-5 text-[#00b9fe]" />}
                  className="border-[#00b9fe]/60 hover:border-[#00b9fe]/80 hover:bg-[#00b9fe]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Ko-fi
                </LinkButton>
                <LinkButton
                  href="https://opencollective.com/galsendev"
                  icon={<Heart className="w-5 h-5 text-[#1f87ff]" />}
                  className="border-[#1f87ff]/60 hover:border-[#1f87ff]/80 hover:bg-[#1f87ff]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Open Collective
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Braces className="w-5 h-5 text-primary" />
                Nos Projets
              </h2>
              <div className="space-y-3">
                <LinkButton
                  href="https://github.com/GalsenDev221/made.in.senegal"
                  icon={<Code2 className="w-5 h-5 text-primary" />}
                  className="border-primary/60 hover:border-primary/80 hover:bg-primary/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Made In Senegal
                </LinkButton>
                <LinkButton
                  href="https://github.com/GalsenDev221/galsen.ui"
                  icon={<Palette className="w-5 h-5 text-accent" />}
                  className="border-accent/60 hover:border-accent/80 hover:bg-accent/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Galsen UI
                </LinkButton>
                <LinkButton
                  href="https://github.com/GalsenDev221/map"
                  icon={<Map className="w-5 h-5 text-accent" />}
                  className="border-accent/60 hover:border-accent/80 hover:bg-accent/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Galsen DEV Map
                </LinkButton>
                <LinkButton
                  href="https://github.com/GalsenDev221/first.contributions"
                  icon={
                    <GitPullRequestArrowIcon className="w-5 h-5 text-primary" />
                  }
                  className="border-primary/60 hover:border-primary/80 hover:bg-primary/10 hover:text-foreground hover:scale-[1.03]"
                >
                  First Contributions
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          {/* GitHub Link */}
          <LinkButton
            href="https://github.com/GalsenDev221"
            icon={<Github className="w-6 h-6" />}
            variant="default"
            className="bg-foreground hover:bg-foreground/90 text-background border-0 text-lg font-semibold"
          >
            Contribuer sur nos projets.
          </LinkButton>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            Fait avec ❤️ par la communauté{" "}
            <a
              href="https://galsen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Galsen DEV
            </a>
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2025 - Tous droits réservés
          </p>
        </footer>
      </div>
    </div>
  );
}
