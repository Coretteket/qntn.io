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
      <a href="https://openstate.eu/en/about/">Open State Foundation</a> and
      a master's student of Climate Econometrics at VU Amsterdam. Wherever I go,
      I love making creative ways to make data accessible.`,
    contact: html`The easiest way to reach out is to send an e-mail to
      <a href="mailto:hey@qntn.io">hey@qntn.io</a>. You can also find me on
      <a href="/linkedin">LinkedIn</a> for my professional escapades,
      <a href="/github">GitHub</a> for my code, and
      <s><a href="/twitter" class="opacity-50">Twitter</a></s> <a href="/bluesky">Bluesky</a> for
      my opinions.`,
  },
  projects: {
    title: "Projects",
    bron: {
      title: "Bron",
      description: html`📣 <b>Open State Foundation</b> — We consolidate all
        public government information and make it searchable with tools so
        flexible that journalists and researchers can create stories with
        maximum freedom.`,
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
      description: html`✨ <b>Popular</b> — Prompted more than
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
  footer: {
    pronouns: ["he", "him"],
  },
} as const;
