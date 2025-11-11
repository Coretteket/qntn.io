import { html } from "@/lib/html";

export default {
  now: "now",
  meta: {
    other: "nl",
    otherName: "Dutch",
    otherLocalizedName: "Nederlands",
  },
  about: {
    alt: "Quinten Coret speaks in De Balie.",
    name: "Quinten Coret",
    description: html`As a developer at
      <a href="https://openstate.eu/en/over-ons/">Open State Foundation</a> and
      a master’s student in
      <a
        href="https://vu.nl/en/education/master/econometrics-and-operations-research/curriculum?specialization=climate-econometrics"
        >Climate Econometrics</a
      >
      at the Vrije Universiteit, I put data to work for the public good. My
      goal: turning complex datasets into practical insights for everyone.`,
    contact: html`The quickest way to reach me is at
      <a href="mailto:quinten@qntn.io">quinten@qntn.io</a>. You can also find me
      on <a href="/linkedin">LinkedIn</a> for my professional escapades,
      <a href="/github">GitHub</a> for my code, and
      <a href="/bluesky">Bluesky</a> for all my other exploits.`,
  },
  // presentations: {
  //   title: "Presentations",
  // },
  projects: {
    title: "Projects",
    politiekereclame: {
      title: "Political Ad Tracker",
      description: html`Compiled over <b>10 million euros</b> in political
        advertising spending in a clear overview, so everyone can track who pays
        to spread their message.`,
    },
    bron: {
      title: "Bron",
      description: html`Developed a search platform with
        <b>2.5 million documents</b> from all levels of Dutch government, so
        journalists and researchers can do their important work quickly and
        flexibly.`,
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
      description: html`Prompted more than <b>300,000 people</b> to think about
        the impact of COVID by showing the consequences of (not) taking measures
        in a game with a simulation and news reports.`,
    },
    nieuwindekamer: {
      title: "New in Parliament",
      description: html`Shared words said for the first time in the Dutch
        parliament for <b>2,700 followers</b>, among which <b>41 MPs</b>, by
        indexing thousands of minutes for months.`,
    },
  },
  footer: html`This website uses
    <a
      href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fquintencoret.nl"
    >
      100% green hosting
    </a>
    in the EU. It doesn't process any personal data. Updated in`,
} as const;
