export type Post = {
  slug: string;
  title: string;
  date: string; // ISO string
  summary: string;
  content: string[]; // paragraphs
};

export const posts: Post[] = [
  {
    slug: "business-energy-procurement-uk",
    title: "Business energy procurement in the UK: a practical guide for CFOs",
    date: "2025-09-10",
    summary:
      "How to approach fixed vs flexible contracts, align end dates and negotiate multi‑site electricity & gas portfolios.",
    content: [
      "Choosing between fixed and flexible energy contracts depends on your organisation’s risk tolerance and budget stability needs.",
      "For multi‑site portfolios, aligning end dates and consolidating billing can reduce administrative overheads and improve negotiating power.",
      "Engaging with a regulated brokerage helps ensure transparency and access to competitive corporate tariffs.",
    ],
  },
  {
    slug: "managing-price-volatility-electricity-gas",
    title: "Managing electricity & gas price volatility: risk strategies that work",
    date: "2025-10-01",
    summary:
      "Practical hedging approaches, staggered fixing and market alerts to shield operational budgets from spikes.",
    content: [
      "Market volatility can materially impact operating costs. Staggered fixing and layered hedges can protect cash flow.",
      "Dashboards and alerts ensure decision‑makers react promptly to meaningful market moves.",
      "Regular reviews with suppliers help maintain competitive positions throughout the contract lifecycle.",
    ],
  },
];
