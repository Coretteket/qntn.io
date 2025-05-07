import { html } from "@/lib/html";

export default {
  now: "now",
  meta: {
    other: "nl",
    otherName: "Dutch",
    otherLocalizedName: "Nederlands",
  },
  about: {
    name: "Quinten Coret",
    description: html`Once a seven-year-old cobbling together his first lines of
      code. Now a developer at
      <a href="https://openstate.eu/en/about/">Open State Foundation</a> and a
      master's student of Climate Econometrics at VU Amsterdam. Wherever I go, I
      love making data accessible.`,
    contact: html`The quickest way to reach me is at
      <a href="mailto:hey@qntn.io">hey@qntn.io</a>. You can also find me on
      <a href="/linkedin">LinkedIn</a> for my professional escapades,
      <a href="/github">GitHub</a> for my code, and
      <a href="/bluesky">Bluesky</a> for all my other exploits.`,
  },
  projects: {
    title: "Projects",
    bron: {
      title: "Bron",
      description: html`<b>Open State Foundation</b> makes government
        information searchable with flexible tools that journalists and
        researchers can use them to tell stories with maximum freedom.`,
    },
    statenkandidaten: {
      title: "Council Candidates",
      description: html`Collected all <b>6,547 candidates</b> for the Provincial
        Council on one website, easily searchable by name, party, gender, and
        current position, to support a well-informed vote in the Dutch
        elections.`,
    },
    beterdanhugo: {
      title: "Better than Hugo",
      description: html`Prompted more than
        <b>300,000 people</b> to think about Dutch pandemic policy by showing
        the impact of measures in a game with a simulation and news reports.`,
    },
    nieuwindekamer: {
      title: "New in Parliament",
      description: html`Shared words said for the first time in the Dutch
        parliament for <b>2,700 followers</b>, among which <b>41 MPs</b>, by
        indexing thousands of minutes for months.`,
    },
  },
  footer: "This website is powered by renewable energy in the European Union. It doesn't use cookies. Updated in"
} as const;
