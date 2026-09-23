import type { Locale } from "@/lib/i18n"

export type AboutMessages = {
  back: string
  title: string
  tagline: string
  factsLabel: string
  facts: { term: string; value: string }[]
  socialTerm: string
}

const en: AboutMessages = {
  back: "← Home",
  title: "About",
  tagline:
    "KOMMA is a research and relational-technology studio building the finance, legal-form and technology mechanisms to hold what we have in common, beginning with land and housing.",
  factsLabel: "Key Facts",
  facts: [
    { term: "Organisation", value: "KOMMA" },
    {
      term: "Type",
      value:
        "Research and relational-technology studio. Operating vehicle: Komma Systems UG, a German limited company.",
    },
    { term: "Founded", value: "2026" },
    {
      term: "People",
      value:
        "Charlie Fisher, Franz Josef Allmayer, Clara Gromaches, Bradley Clark Royes, Livia Deschermayer, Jeff Emmett, Rita Palma, Robert Matijević",
    },
    { term: "Headquarters", value: "Waldkirch, Germany" },
    {
      term: "Focus",
      value: "Building the finance, legal-form and technology mechanisms to hold what we have in common, beginning with land and housing",
    },
    {
      term: "Initiatives",
      value:
        "Overflow (threshold pools for pooled, conditional commitment), Weave (distributed land registry), Meld + BRAID (edge-first, privacy-preserving civic-deliberation hardware and platform), Sensed Governance, Relational Wealth Flows; all running on KairOS",
    },
    {
      term: "Funding",
      value:
        "Meld + BRAID in deployment via InnoVER, funded by the BMBF (Bundesministerium für Bildung und Forschung / Federal Ministry of Education and Research, Germany)",
    },
  ],
  socialTerm: "Social",
}

const de: AboutMessages = {
  back: "← Startseite",
  title: "Über uns",
  tagline:
    "KOMMA ist ein Studio für Forschung und Beziehungstechnologie, das die Finanz-, Rechtsform- und Technologiemechanismen entwickelt, um das gemeinschaftlich zu halten, was wir teilen, angefangen bei Grund und Boden und Wohnraum.",
  factsLabel: "Eckdaten",
  facts: [
    { term: "Organisation", value: "KOMMA" },
    {
      term: "Art",
      value:
        "Studio für Forschung und Beziehungstechnologie. Operatives Vehikel: Komma Systems UG (haftungsbeschränkt).",
    },
    { term: "Gegründet", value: "2026" },
    {
      term: "Personen",
      value:
        "Charlie Fisher, Franz Josef Allmayer, Clara Gromaches, Bradley Clark Royes, Livia Deschermayer, Jeff Emmett, Rita Palma, Robert Matijević",
    },
    { term: "Standort", value: "Waldkirch, Deutschland" },
    {
      term: "Fokus",
      value:
        "Entwicklung der Finanz-, Rechtsform- und Technologiemechanismen, um das gemeinschaftlich zu halten, was wir teilen, angefangen bei Grund und Boden und Wohnraum",
    },
    {
      term: "Initiativen",
      value:
        "Overflow (Schwellenwert-Pools für gebündelte, bedingte Zusagen), Weave (verteiltes Grundbuch), Meld + BRAID (edge-first, datenschutzfreundliche Hardware und Plattform für bürgerschaftliche Deliberation), Sensed Governance, Relational Wealth Flows; alle laufen auf KairOS",
    },
    {
      term: "Förderung",
      value:
        "Meld + BRAID im Einsatz über InnoVER, gefördert vom BMBF (Bundesministerium für Bildung und Forschung / Federal Ministry of Education and Research)",
    },
  ],
  socialTerm: "Social Media",
}

export const aboutMessages: Record<Locale, AboutMessages> = { en, de }
