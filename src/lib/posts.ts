export type Post = {
  slug: string;
  title: string;
  date: string; // ISO string
  summary: string;
  content: string[]; // paragraphs
  keywords: string[];
};

export const posts: Post[] = [
  {
    slug: "sme-energy-savings-uk",
    title: "5 Energy Saving Strategies for UK SMEs to Reduce Business Costs in 2025",
    date: "2025-10-15",
    summary: "Discover how UK small and medium-sized businesses can significantly reduce energy costs with these proven strategies and government-backed initiatives.",
    content: [
      "Small and medium-sized enterprises (SMEs) in the UK face unique challenges when it comes to managing energy costs. With the energy price cap changes and market volatility, it's more important than ever for business owners to implement effective energy-saving measures.",
      "1. **Energy Efficiency Upgrades**: Consider investing in LED lighting, which uses up to 75% less energy than traditional bulbs. The government's Business Energy Efficiency Programme offers grants covering up to 30% of the costs for SMEs.",
      "2. Smart Metering: Over 2.3 million UK businesses have already switched to smart meters, helping them track energy usage in real-time and identify wastage. Smart meters can reduce energy bills by an average of 12% for small businesses.",
      "3. Flexible Energy Contracts: Work with business energy brokers to secure flexible contracts that allow you to take advantage of market dips. Many SMEs save 15-20% by switching from standard variable tariffs.",
      "4. Renewable Energy Options: The Smart Export Guarantee (SEG) allows businesses to sell excess renewable energy back to the grid. Solar panel installations can provide ROI within 5-7 years for many SMEs.",
      "5. Staff Engagement: Simple behavioral changes can lead to 10-15% energy savings. Implement an energy awareness program and consider appointing an 'energy champion' among staff."
    ],
    keywords: ["SME energy savings UK", "reduce business energy costs", "energy efficiency for small businesses", "business energy brokers", "UK energy price cap 2025"]
  },
  {
    slug: "commercial-energy-tariffs-2025",
    title: "Understanding Commercial Energy Tariffs: A Complete Guide for UK Businesses in 2025",
    date: "2025-10-05",
    summary: "Navigate the complex landscape of business energy tariffs with our comprehensive guide to finding the best commercial energy deals in the UK.",
    content: [
      "With over 50 commercial energy suppliers in the UK market, choosing the right tariff for your business can be overwhelming. This guide breaks down the different types of business energy contracts to help you make an informed decision.",
      "**Fixed vs. Variable Tariffs** Fixed-rate tariffs provide price certainty for 1-5 years, while variable tariffs can fluctuate with the market. In 2025, 68% of UK businesses opt for fixed tariffs to budget effectively.",
      "**Deemed Rates** If you move into new premises without agreeing to a contract, you'll be placed on 'deemed rates' which are typically 80% higher than negotiated rates. Always ensure you have an active contract.",
      "**Multi-Site Contracts** Businesses with multiple locations can benefit from consolidated billing and aligned contract end dates, potentially saving up to 30% on administrative costs.",
      "**Renewable Energy Options** Green tariffs now account for 42% of all commercial energy contracts. These not only reduce your carbon footprint but can also enhance your brand's sustainability credentials.",
      "**Peak/Off-Peak Rates** Time-of-use tariffs can benefit businesses that can shift energy-intensive operations to off-peak hours, with potential savings of 15-20%."
    ],
    keywords: ["commercial energy tariffs 2025", "business electricity rates UK", "compare business energy suppliers", "fixed vs variable business energy", "corporate energy procurement"]
  },
  {
    slug: "energy-crisis-survival-guide",
    title: "Energy Crisis Survival Guide: How UK Businesses Are Adapting in 2025",
    date: "2025-10-20",
    summary: "Practical strategies for UK businesses to navigate the ongoing energy crisis, reduce consumption, and protect their bottom line.",
    content: [
      "The UK energy market continues to face challenges in 2025, with wholesale prices remaining volatile. However, proactive businesses are finding innovative ways to adapt and even thrive during these uncertain times.",
      "**Energy Audits**: 76% of businesses that conducted energy audits in 2024 identified savings opportunities they hadn't previously considered. Many local councils offer free or subsidized energy assessments for SMEs.",
      "**Demand-Side Response (DSR) Programs**: By agreeing to reduce consumption during peak times, businesses can earn substantial payments. Some companies are earning up to £45,000 per megawatt of load they can shift or reduce.",
      "**On-Site Generation**: The number of UK businesses installing solar panels has increased by 217% since 2022. With battery storage costs falling, many SMEs are now achieving energy independence.",
      "**Energy Performance Certificates (EPCs)**: With minimum EPC requirements becoming stricter, improving your property's energy rating can both reduce costs and increase property value. The average commercial property can achieve a 20% reduction in energy use through cost-effective measures.",
      "**Collaborative Buying Groups**: Small businesses are forming collectives to negotiate better energy rates. These groups are achieving savings of 10-15% compared to individual contracts.",
      "The key to navigating the energy crisis is flexibility and proactive management. By implementing these strategies and working with energy market experts, UK businesses can turn energy management into a competitive advantage."
    ],
    keywords: ["UK business energy crisis 2025", "reduce business energy consumption", "energy saving for UK companies", "business energy management", "corporate energy efficiency strategies"]
  }
];
