export type Lang = 'fr' | 'en';

export interface Translations {
  header: {
    description: string;
  };
  community: {
    title: string;
    discord: string;
    whatsapp: string;
  };
  social: {
    title: string;
  };
  donate: {
    title: string;
  };
  projects: {
    title: string;
    madeInSenegal: { description: string };
    galsenUI: { description: string };
    map: { description: string };
    firstContributions: { description: string };
  };
  github: {
    cta: string;
  };
  footer: {
    madeWith: string;
    rights: string;
  };
}

export const translations: Record<Lang, Translations> = {
  fr: {
    header: {
      description:
        "La communauté des développeurs sénégalais. Rejoins-nous pour participer à nos évènements et découvrir nos projets, opportunités et ressources.",
    },
    community: {
      title: "Rejoindre la Communauté",
      discord: "Rejoindre le serveur Discord",
      whatsapp: "WhatsApp Community",
    },
    social: {
      title: "Réseaux Sociaux",
    },
    donate: {
      title: "Soutenir la Communauté",
    },
    projects: {
      title: "Nos Projets",
      madeInSenegal: {
        description:
          "Une plateforme présentant des outils et des solutions conçus par des développeurs sénégalais pour un public international.",
      },
      galsenUI: {
        description:
          "Une bibliothèque de composants réutilisables basée sur Tailwind, conçue pour accélérer le développement d'interfaces modernes.",
      },
      map: {
        description:
          "Un projet open source qui vise à cartographier et connecter la communauté tech sénégalaise.",
      },
      firstContributions: {
        description: "Aidez les débutants à contribuer aux projets open source.",
      },
    },
    github: {
      cta: "Contribuer sur nos projets.",
    },
    footer: {
      madeWith: "Fait avec ❤️ par la communauté",
      rights: "© 2025 - Tous droits réservés",
    },
  },
  en: {
    header: {
      description:
        "The Senegalese developers community. Join us to take part in our events and discover our projects, opportunities and resources.",
    },
    community: {
      title: "Join the Community",
      discord: "Join the Discord server",
      whatsapp: "WhatsApp Community",
    },
    social: {
      title: "Social Networks",
    },
    donate: {
      title: "Support the Community",
    },
    projects: {
      title: "Our Projects",
      madeInSenegal: {
        description:
          "A platform showcasing tools and solutions built by Senegalese developers for a global audience.",
      },
      galsenUI: {
        description:
          "A reusable Tailwind-based component library designed to speed up modern UI development.",
      },
      map: {
        description:
          "An open-source project that aims to map and connect the Senegalese tech community.",
      },
      firstContributions: {
        description: "Help beginners make their first open-source contribution.",
      },
    },
    github: {
      cta: "Contribute to our projects.",
    },
    footer: {
      madeWith: "Made with ❤️ by the community",
      rights: "© 2025 - All rights reserved",
    },
  },
};
