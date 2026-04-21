import { deCHCopy } from "@/content/locales/de-ch";
import { enCopy } from "@/content/locales/en";
import { frCHCopy } from "@/content/locales/fr-ch";
import { itCHCopy } from "@/content/locales/it-ch";
import { rmCopy } from "@/content/locales/rm";

export const locales = ["de-CH", "en", "fr-CH", "it-CH", "rm"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de-CH";

export const localeLabels: Record<Locale, string> = {
  "de-CH": "DE-CH",
  en: "EN",
  "fr-CH": "FR-CH",
  "it-CH": "IT-CH",
  rm: "RM",
};

export type Copy = {
  nav: {
    home: string;
    chroma: string;
    echo: string;
    science: string;
    family: string;
    grants: string;
  };
  footer: {
    body: string;
    product: string;
    proof: string;
  };
  home: {
    badge: string;
    title: string;
    body: string;
    ctaChroma: string;
    ctaEcho: string;
    currentShip: string;
    shippingNow: string;
    shippingNowBody: string;
    later: string;
    laterBody: string;
    principles: {
      nightTitle: string;
      nightBody: string;
      dignityTitle: string;
      dignityBody: string;
      trustTitle: string;
      trustBody: string;
    };
    chromaLabel: string;
    chromaTitle: string;
    chromaBody: string;
    chromaCta: string;
    echoLabel: string;
    echoTitle: string;
    echoBody: string;
    echoWhyTitle: string;
    echoWhyBody: string;
    echoCta: string;
    proofLabel: string;
    proofTitle: string;
    proofBody: string;
    proofScienceTitle: string;
    proofScienceBody: string;
    proofFamilyTitle: string;
    proofFamilyBody: string;
    proofGrantTitle: string;
    proofGrantBody: string;
    openPage: string;
  };
  chromaPage: {
    back: string;
    label: string;
    title: string;
    body: string;
    laterTitle: string;
    laterBody: string;
    nextActionTitle: string;
    nextActionBody: string;
    nextActionCta: string;
  };
  echoPage: {
    back: string;
    label: string;
    title: string;
    body: string;
    honestTitle: string;
    honestBody: string;
    whyTitle: string;
    whyBody: string;
  };
  sciencePage: {
    back: string;
    label: string;
    title: string;
    body: string;
    provingTitle: string;
    provingBody: string;
    laterTitle: string;
    laterBody: string;
  };
  familyPage: {
    back: string;
    label: string;
    title: string;
    body: string;
    trustTitle: string;
    demoTruthTitle: string;
    demoTruthBody: string;
    demoTruthCta: string;
    commercialTitle: string;
    commercialBody: string;
  };
  grantsPage: {
    back: string;
    label: string;
    title: string;
    body: string;
    provableTitle: string;
    provableBody: string;
    demoPathTitle: string;
    scienceCta: string;
    chromaCta: string;
  };
};

export const copy: Record<Locale, Copy> = {
  "de-CH": deCHCopy,
  en: enCopy,
  "fr-CH": frCHCopy,
  "it-CH": itCHCopy,
  rm: rmCopy,
};
