import { html } from "@/lib/html";

export default {
  now: "nu",
  meta: {
    other: "en",
    otherName: "Engels",
    otherLocalizedName: "English",
  },
  about: {
    alt: "Quinten Coret spreekt in De Balie.",
    name: "Quinten Coret",
    description: html`Als ontwikkelaar bij
      <a href="https://openstate.eu/nl/over-ons/">Open State Foundation</a> en
      masterstudent
      <a
        href="https://vu.nl/en/education/master/econometrics-and-operations-research/curriculum?specialization=climate-econometrics"
        >Climate Econometrics</a
      >
      aan de Vrije Universiteit zet ik data in voor de publieke zaak. Mijn
      drijfveer: complexe gegevens toegankelijk maken voor iedereen.`,
    contact: html`Je bereikt me het snelst via
      <a href="mailto:quinten@qntn.io">quinten@qntn.io</a>. Ook kan je me vinden
      op <a href="/linkedin">LinkedIn</a> voor mijn professionele escapades,
      <a href="/github">GitHub</a> voor mijn code, en
      <a href="/bluesky">Bluesky</a> voor alle overige uitingen.`,
  },
  projects: {
    title: "Projecten",
    politiekereclame: {
      title: "Politieke Reclame Tracker",
      description: html`Meer dan <b>10 miljoen euro</b> aan politieke
        reclame-uitgaven overzichtelijk in beeld gebracht, zodat iedereen kan
        volgen wie betaalt om hun boodschap te verspreiden.`,
    },
    bron: {
      title: "Bron",
      description: html`Een zoekplatform ontwikkeld met
        <b>2,5 miljoen documenten</b> uit alle lagen van de overheid, zodat
        journalisten en onderzoekers snel en flexibel hun belangrijke werk kunnen doen.`,
    },
    statenkandidaten: {
      title: "Statenkandidaten",
      description: html`Alle <b>6.547 kandidaten</b> voor de Provinciale Staten
        verzameld op één website, makkelijk te doorzoeken op naam, partij,
        geslacht en huidige functie, om een voorkeurstem te ondersteunen.`,
    },
    beterdanhugo: {
      title: "Beter dan Hugo",
      description: html`Meer dan <b>300.000 mensen</b> aan het denken gezet over
        de impact van corona door in een spel de gevolgen van (geen) maatregelen
        nemen te laten zien met een simulatie en nieuwsberichten.`,
    },
    nieuwindekamer: {
      title: "Nieuw in de Kamer",
      description: html`Maandenlang <b>2.700 volgers</b>, waaronder
        <b>41 Kamerleden</b>, voorzien van de woorden die voor het eerst gezegd
        werden in de Tweede Kamer door duizenden notulen te indexeren.`,
    },
  },
  footer: html`Deze site draait op
    <a
      href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fquintencoret.nl"
    >
      100% groene stroom
    </a>
    in de EU. Het verwerkt geen persoonsgegevens. Bijgewerkt in`,
} as const;
