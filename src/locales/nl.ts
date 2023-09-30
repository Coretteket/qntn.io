import { html } from "@/lib/html";

export default {
  meta: {
    other: "en",
    otherName: "Engels",
    otherLocalizedName: "English",
  },
  about: {
    name: "Quinten Coret",
    description:
      "Ooit een zevenjarige die zijn eerste regels code in elkaar knutselde. Nu een derdejaarsstudent Econometrie en Data Science aan de Vrije Universiteit. De rode draad: ik hou ervan om data creatief toegankelijk te maken.",
    contact: html`Je bereikt me het snelst door een mail te sturen naar
      <a href="mailto:hey@qntn.io">hey@qntn.io</a>. Ook kan je me vinden op
      <a href="/twitter">Twitter</a> voor mijn meningen,
      <a href="/github">GitHub</a> voor mijn code, en
      <a href="/linkedin">LinkedIn</a> voor mijn professionele escapades.`,
  },
  projects: {
    title: "Projecten",
    statenkandidaten: {
      title: "Statenkandidaten",
      description: html`Alle <b>6.547 kandidaten</b> voor de Provinciale Staten
        verzameld op één website, makkelijk te doorzoeken op naam, partij,
        geslacht en huidige functie, om een voorkeurstem te ondersteunen.`,
    },
    beterdanhugo: {
      title: "Beter dan Hugo",
      description: html`✨ <b>Populair</b> — Meer dan <b>300.000 mensen</b> aan
        het denken gezet over het coronabeleid door in een spel de impact van
        maatregelen te laten zien met een simulatie en nieuwsberichten.`,
    },
    nieuwindekamer: {
      title: "Nieuw in de Kamer",
      description: html`Maandenlang <b>2.700 volgers</b>, waaronder
        <b>41 Kamerleden</b>, voorzien van woorden die voor het eerst gezegd
        waren in de Tweede Kamer door duizenden notulen te indexeren.`,
    },
  },
  footer: {
    pronouns: ["hij", "hem"],
  },
} as const;
