"use client";

import { LinkButton } from "@/components/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveGrid } from "@/components/interactive-grid";
import { useLanguage } from "@/components/language-provider";
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

export function PageContent() {
  const { t } = useLanguage();

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
        <header className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both]">
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
            {t.header.description}
          </p>
        </header>

        <div className="space-y-8">
          {/* Community Buttons */}
          <Card className="border-primary/10 shadow-sm animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both] [animation-delay:100ms]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <House className="w-5 h-5 text-primary" />
                {t.community.title}
              </h2>
              <div className="space-y-3">
                <LinkButton
                  href="https://discord.gg/CKZcKqf"
                  icon={<MessageCircle className="w-5 h-5 text-white" />}
                  variant="default"
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white border-0"
                >
                  {t.community.discord}
                </LinkButton>
                <LinkButton
                  href="https://chat.whatsapp.com/EzigxN1N2bZBdxooqaH2Gr"
                  icon={<Users2 className="w-5 h-5 text-[#25D366]" />}
                  className="border-[#25D366]/60 hover:border-[#25D366]/80 hover:bg-[#25D366]/10 hover:text-foreground hover:scale-[1.03]"
                >
                  {t.community.whatsapp}
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Links */}
          <Card className="shadow-sm animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both] [animation-delay:200ms]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Earth className="w-5 h-5 text-primary" />
                {t.social.title}
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
          <Card className="border-accent/20 shadow-sm animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both] [animation-delay:300ms]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HandHelping className="w-5 h-5 text-[#0096ff]" />
                {t.donate.title}
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
          <Card className="shadow-sm animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both] [animation-delay:400ms]">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Braces className="w-5 h-5 text-primary" />
                {t.projects.title}
              </h2>
              <div className="space-y-3">
                <LinkButton
                  href="https://github.com/GalsenDev221/made.in.senegal"
                  icon={<Code2 className="w-5 h-5 text-primary" />}
                  description={t.projects.madeInSenegal.description}
                  className="border-primary/60 hover:border-primary/80 hover:bg-primary/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Made In Senegal
                </LinkButton>
                <LinkButton
                  href="https://github.com/GalsenDev221/galsen.ui"
                  icon={<Palette className="w-5 h-5 text-accent" />}
                  description={t.projects.galsenUI.description}
                  className="border-accent/60 hover:border-accent/80 hover:bg-accent/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Galsen UI
                </LinkButton>
                <LinkButton
                  href="https://github.com/GalsenDev221/map"
                  icon={<Map className="w-5 h-5 text-accent" />}
                  description={t.projects.map.description}
                  className="border-accent/60 hover:border-accent/80 hover:bg-accent/10 hover:text-foreground hover:scale-[1.03]"
                >
                  Galsen DEV Map
                </LinkButton>
                <LinkButton
                  href="https://github.com/GalsenDev221/first.contributions"
                  icon={
                    <GitPullRequestArrowIcon className="w-5 h-5 text-primary" />
                  }
                  description={t.projects.firstContributions.description}
                  className="border-primary/60 hover:border-primary/80 hover:bg-primary/10 hover:text-foreground hover:scale-[1.03]"
                >
                  First Contributions
                </LinkButton>
              </div>
            </CardContent>
          </Card>

          {/* GitHub Link */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 [animation-fill-mode:both] [animation-delay:500ms]">
            <LinkButton
              href="https://github.com/GalsenDev221"
              icon={<Github className="w-6 h-6" />}
              variant="default"
              className="bg-foreground hover:bg-foreground/90 text-background border-0 text-lg font-semibold"
            >
              {t.github.cta}
            </LinkButton>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            {t.footer.madeWith}{" "}
            <a
              href="https://galsen.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Galsen DEV
            </a>
          </p>
          <p className="text-muted-foreground text-xs mt-2">{t.footer.rights}</p>
        </footer>
      </div>
    </div>
  );
}
