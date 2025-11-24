export type Post = {
  slug: string;
  title: string;
  date: string; // ISO string
  summary: string;
  content: string[]; // paragraphs
  keywords: string[];
  heroImageSrc?: string;
  heroImageAlt?: string;
  images?: { src: string; alt: string }[];
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
  },
  {
    slug: "prepare-for-energy-price-volatility-uk-2026",
    title: "How UK Businesses Can Prepare for Energy Price Volatility in 2026",
    date: "2025-11-24",
    summary:
      "UK business energy prices are entering a new phase of volatility in 2026, driven less by wholesale markets and more by non-commodity and network costs. This guide explains what is changing and how to build a resilient energy strategy.",
    content: [
      "Energy prices in the UK have been highly volatile in recent years, and most credible forecasts indicate that this uncertainty will continue — and potentially intensify — heading into 2026. Rising non-commodity charges, increased network investment, global LNG dependency, and new Ofgem regulations are all shaping a more complex pricing environment for businesses.",
      "For SMEs, industrial sites and multi-location organisations, preparing early is essential. In this guide, we explain why business energy prices in the UK are expected to become more volatile in 2026, which costs are rising, and the most effective strategies to protect your organisation.",
      "**Why energy prices are expected to become more volatile in 2026**",
      "Even as the UK accelerates renewable generation, gas remains a core component of grid stability. Ongoing geopolitical tensions and LNG shipping constraints will continue to influence wholesale electricity and gas prices in 2026, meaning businesses remain exposed to global fuel markets and shipping routes, not just domestic demand.",
      "[[image:uk-energy-price-volatility-2026]]",
      "Major network and infrastructure investments planned from 2025–2026 are also pushing up costs. These include grid reinforcement, integration of distributed and renewable generation, and higher system balancing requirements — all of which typically show up on invoices as network charges rather than as clearly labelled project costs.",
      "Non-commodity costs — network, policy, balancing and delivery charges — already represent well over 60% of a typical business electricity bill. These are expected to increase again in 2026 due to higher transmission (TNUoS), distribution (DUoS) and balancing (BSUoS) charges, alongside Capacity Market contributions and policy costs linked to decarbonisation and security of supply.",
      "[[image:non-commodity-costs-2026]]",
      "Ofgem’s ongoing reforms, including the Targeted Charging Review and new network pricing frameworks, are reshaping how these costs are recovered from end users. Many of the resulting charges are flat, fixed or banded, placing higher baseline costs on businesses with predictable or relatively stable demand patterns.",
      "For many organisations, the biggest price shock in 2026 will not come from wholesale energy itself — it will come from the steady rise of non-commodity charges. Even companies with stable or modest consumption will see increases because so many of these elements are no longer purely usage-based.",
      "The businesses most exposed include warehouses, manufacturers and industrial plants with high kWh consumption, retailers with long operating hours and evening peaks, and multi-site operations with uneven or poorly profiled demand. Businesses with limited monitoring and poor load profiling are particularly at risk of unnecessary network and balancing costs.",
      "[[image:business-reviewing-electricity-costs]]",
      "**How businesses can prepare for 2026 energy volatility**",
      "The first step is to review your contract renewal timeline early. Waiting until your renewal month can expose you to last-minute pricing spikes and fewer supplier options. Businesses with a business energy contract renewal in late 2025 or early 2026 should start comparing rates now and build a clear timeline for tenders, supplier responses and internal approvals.",
      "### Procurement options: fixed, flexible and hybrid",
      "Choosing the right energy procurement strategy is equally important. Fixed contracts can be attractive for budgeting stability and cash flow planning, protecting you from sharp wholesale movements, but may lock in higher prices if the market subsequently falls.",
      "Flexible contracts are more suitable for larger consumers or portfolios that can actively manage risk. They allow you to buy blocks of energy at different times, taking advantage of market dips, but they require clear risk limits, governance and a robust trading strategy.",
      "Hybrid procurement is becoming more common in periods of high volatility. In this model, part of your consumption is fixed, while another portion is bought flexibly. This can balance protection and opportunity, particularly when UK energy price forecasts are uncertain but non-commodity costs are clearly rising.",
      "### Using data and audits to reduce costs",
      "Beyond contract structures, it is vital to understand your actual usage. A consumption audit based on MPAN and MPRN data can reveal profile class, load factor and time-of-use patterns. This type of analysis highlights excessive evening or peak-time use, opportunities to shift load into lower-cost periods, and inefficiencies that drive avoidable network charges.",
      "An audit can also show whether you are on the wrong meter type or tariff structure for your demand profile. These insights are particularly valuable for SMEs who may never have reviewed their half-hourly data or DUoS banding, yet face rising SME electricity costs linked to network charges.",
      "### Long-term tools: PPAs and efficiency",
      "As renewable capacity grows, long-term green energy contracts and renewable Power Purchase Agreements (PPAs) are becoming increasingly attractive. For larger consumers, a well-designed PPA can provide price stability, long-term budget certainty and clear sustainability benefits, while partially insulating you from short-term wholesale volatility.",
      "Targeted energy efficiency and load-shifting measures can further reduce your exposure. Reducing consumption during peak network times has a direct impact on DUoS, TNUoS, BSUoS and overall non-commodity costs. Simple actions such as LED retrofits, smarter HVAC scheduling, shifting high-demand processes to off-peak periods, and deploying automated monitoring systems can deliver meaningful savings.",
      "[[image:network-upgrades-impacting-prices]]",
      "**Future-proofing your 2026 energy strategy with Voltbridge**",
      "Navigating the UK energy market in 2026 will be increasingly complex, particularly as non-commodity and network elements grow as a share of total costs. Working with a specialist broker such as Voltbridge can help you compare offers from multiple suppliers, monitor live market movements and select between fixed, flexible or hybrid procurement options.",
      "A broker can also help you identify the most cost-effective window for business energy contract renewal in 2026, explain all non-commodity charges transparently line by line, and significantly reduce the internal time your team spends negotiating with suppliers and managing tenders.",
      "With a clear energy procurement strategy and expert guidance, businesses can turn volatility into an opportunity to stabilise — and, in some cases, reduce — long-term energy costs.",
      "**Conclusion**",
      "Energy price volatility is not going away, and projections for 2026 indicate significant changes in the structure of business energy prices in the UK. Companies that prepare early, understand the drivers behind these increases, and adopt strategic procurement practices will be better placed to protect their budgets and plan with confidence.",
      "Voltbridge is ready to support businesses across the UK with transparent guidance and tailored energy strategies. Start your free business energy assessment today."
    ],
    keywords: [
      "business energy prices 2026 UK",
      "UK energy price forecast 2026",
      "non-commodity energy costs 2026",
      "future business electricity costs UK",
      "energy market volatility UK business",
      "TNUoS charges 2026",
      "prepare for rising energy prices UK",
      "energy procurement strategy UK",
      "business energy contract renewal 2026",
      "network charges UK",
      "DUoS increases",
      "BSUoS costs 2026",
      "Ofgem regulation changes",
      "SME electricity costs",
      "load shifting strategies",
      "renewable PPAs UK"
    ],
    heroImageSrc: "/images/insights/uk-energy-price-volatility-2026.svg",
    heroImageAlt: "UK energy price volatility trend towards 2026",
    images: [
      {
        src: "/images/insights/uk-energy-price-volatility-2026.svg",
        alt: "UK energy price volatility trend towards 2026"
      },
      {
        src: "/images/insights/non-commodity-costs-2026.svg",
        alt: "Non-commodity electricity cost breakdown for UK businesses 2026"
      },
      {
        src: "/images/insights/business-reviewing-electricity-costs.svg",
        alt: "Business reviewing rising electricity costs in the UK"
      },
      {
        src: "/images/insights/network-upgrades-impacting-prices.svg",
        alt: "UK electricity network upgrades impacting business energy prices"
      }
    ]
  },
  {
    slug: "reduce-business-energy-costs-uk-guide",
    title: "How to Reduce Business Energy Costs in the UK: The Essential 2025–2026 Guide for SMEs",
    date: "2025-11-24",
    summary:
      "Practical strategies for UK SMEs to reduce business electricity and gas costs in 2025–2026, from better contracts and peak reduction to audits, efficiency upgrades and smart monitoring.",
    content: [
      "Business energy costs in the UK remain a major concern for SMEs, retailers, manufacturers and multi-site organisations. Despite gradual stabilisation in wholesale markets, overall bills remain high due to network charges, policy costs and consumption patterns.",
      "The good news is that there are practical, immediate and long-term strategies that businesses can implement to meaningfully reduce their electricity and gas costs. This guide explains how.",
      "**Why Are Business Energy Costs Still High in 2025–2026?**",
      "Even with moderating gas prices, UK businesses continue to face elevated bills due to high non-commodity charges such as DUoS, TNUoS, BSUoS and Capacity Market costs, increased demand from electrification and business growth, grid investment costs carried over from 2024–2025, and legacy contracts signed during market spikes.",
      "Understanding these cost drivers is the first step to reducing them and avoiding overpaying for business electricity prices in the UK.",
      "[[image:uk-business-energy-savings-2025]]",
      "**The Most Effective Ways to Reduce Business Energy Costs**",
      "There is no single magic lever that will cut your bills overnight, but combining procurement, efficiency and behavioural changes can deliver significant savings. The following steps are among the most effective ways to reduce business electricity costs in the UK.",
      "### 1. Switch to a Better Energy Contract",
      "One of the fastest ways to lower energy spend is securing a better contract. Many businesses remain on out-of-contract tariffs, deemed rates or overpriced long-term deals agreed during periods of extreme market volatility.",
      "A specialist broker can compare multiple business energy suppliers to find more competitive rates, often reducing costs by 10–30% without changing consumption. Reviewing both gas and electricity contracts together also helps align end dates and simplify renewals.",
      "### 2. Conduct an Energy Audit (MPAN/MPRN Insights)",
      "A professional energy audit uses your MPAN and MPRN data to identify hidden inefficiencies such as excessive evening usage, poor load factor, the wrong profile class, unnecessary peak-time consumption and obsolete equipment.",
      "Even minor adjustments to when and how you use electricity can meaningfully reduce DUoS and TNUoS charges. An audit often highlights simple operational changes that pay back quickly without major capital expenditure.",
      "[[image:energy-audit-uk-smes]]",
      "### 3. Reduce Peak-Time Consumption",
      "Network charges are significantly higher during red and amber periods on the UK distribution network. Businesses can lower costs by moving production earlier or later, adjusting HVAC schedules, avoiding simultaneous high-power processes and automating load shifting through smart controls.",
      "Focusing on peak demand reduction rather than only total kWh can deliver savings disproportionate to the underlying consumption reduction.",
      "[[image:peak-demand-reduction]]",
      "### 4. Upgrade to Energy-Efficient Equipment",
      "Simple upgrades offer quick wins. LED lighting, high-efficiency HVAC, improved insulation, variable speed drives and refrigeration optimisation all reduce kWh usage and improve your site’s load profile.",
      "These business energy efficiency measures can often be phased in gradually, using maintenance cycles or refurbishment projects to minimise disruption.",
      "### 5. Implement Smart Energy Monitoring",
      "Smart meters and cloud-based monitoring platforms allow businesses to track real-time consumption, detect waste, identify abnormal loads and benchmark performance across sites.",
      "With the right dashboards and alerts, you can move from reactive bill checking to proactive optimisation, catching issues such as equipment left on overnight or unexpected spikes as they occur.",
      "[[image:smart-energy-monitoring-dashboard]]",
      "### 6. Explore Green & Renewable Tariffs",
      "Green tariffs and renewable PPAs (Power Purchase Agreements) can provide more predictable long-term pricing and reduced exposure to wholesale volatility, while supporting your sustainability goals.",
      "For some sectors, PPAs and structured green contracts can reduce long-term costs significantly, especially when combined with on-site generation or demand management.",
      "**Long-Term Strategies to Future-Proof Your Energy Costs**",
      "Beyond immediate savings, SMEs should consider multi-year procurement planning, flexible or hybrid contracts, electrification roadmaps, solar PV feasibility, battery storage for peak shaving and improved carbon reporting.",
      "These measures not only lower costs but also improve resilience and position your organisation ahead of tightening regulation and client expectations on ESG.",
      "**How Voltbridge Can Help Your Business Save Money**",
      "Voltbridge provides access to multiple suppliers, transparent comparisons and tailored procurement strategies. The team continuously monitors the market to help you choose between fixed, flexible and hybrid options and to time renewals effectively.",
      "We also support interpreting bills, DUoS and TNUoS charges, and understanding load profiles so that you can clearly see where savings are coming from and how to sustain them over time.",
      "**Conclusion**",
      "Reducing business energy costs in the UK is achievable with the right strategy. From switching contracts to managing consumption, upgrading equipment and exploring green alternatives, SMEs have many tools at their disposal.",
      "Voltbridge helps UK businesses implement these strategies effectively and transparently. Start your free business energy assessment today."
    ],
    keywords: [
      "how to reduce business energy costs uk",
      "reduce business electricity costs",
      "business energy saving tips UK",
      "SME energy costs UK",
      "lower commercial energy bills",
      "business electricity prices UK",
      "cut energy consumption UK",
      "business energy efficiency measures",
      "compare business energy suppliers",
      "best energy deals for SMEs",
      "energy audit UK",
      "peak demand reduction",
      "LED upgrades",
      "smart meter for businesses",
      "flexible energy contracts",
      "fixed tariff business energy",
      "procurement strategy",
      "renewable PPAs UK"
    ],
    heroImageSrc: "/images/insights/uk-business-energy-savings-2025.svg",
    heroImageAlt: "UK business energy savings strategies 2025",
    images: [
      {
        src: "/images/insights/uk-business-energy-savings-2025.svg",
        alt: "UK business energy savings strategies 2025"
      },
      {
        src: "/images/insights/energy-audit-uk-smes.svg",
        alt: "Energy audit process for SMEs in the UK"
      },
      {
        src: "/images/insights/peak-demand-reduction.svg",
        alt: "Peak demand reduction for commercial electricity"
      },
      {
        src: "/images/insights/smart-energy-monitoring-dashboard.svg",
        alt: "Smart energy monitoring system dashboard"
      }
    ]
  },
  {
    slug: "targeted-charging-review-tcr-uk-business",
    title: "Understanding the Targeted Charging Review (TCR) and Its Impact on UK Business Energy Bills in 2025–2026",
    date: "2025-11-24",
    summary:
      "Clear explanation of Ofgem’s Targeted Charging Review (TCR), how DUoS, TNUoS and BSUoS are changing, and what UK businesses can do to manage their electricity charges in 2025–2026.",
    content: [
      "The UK energy market is undergoing one of its most significant structural changes in decades. Ofgem’s Targeted Charging Review (TCR) is reshaping how businesses pay for electricity network costs, creating winners and losers across the commercial sector.",
      "As the new charging model continues rolling out into 2025 and 2026, many companies will see unexpected changes in their bills — even if their consumption stays the same.",
      "This guide explains what the TCR is, why it matters, and how your business can prepare.",
      "**What Is the Targeted Charging Review (TCR)?**",
      "The Targeted Charging Review is an Ofgem policy designed to change how businesses pay for the cost of maintaining and developing the UK’s electricity network.",
      "Previously, many network charges were based on when and how much businesses consumed electricity.",
      "TCR changes this approach fundamentally by introducing fixed charges, new business bandings, reduced reliance on peak-time usage and more predictable cost allocation.",
      "The goal is a ‘fairer and more stable’ system — but the financial impact varies significantly by business type.",
      "[[image:tcr-explained-diagram]]",
      "**Why Did Ofgem Introduce the TCR?**",
      "Ofgem implemented the TCR for three main reasons: to reduce volatility in network charging, increase fairness by ensuring all users contribute appropriately, and create cost predictability for both consumers and network operators.",
      "Under the old model, some businesses paid disproportionately high network charges simply because of when they operated or how they were connected.",
      "**How TCR Changes Charging for UK Businesses**",
      "### New Banding Structure (from 2025–2026)",
      "Every UK business is now placed into a TCR band. Bands are based on historical electricity demand, connection voltage and meter type (half-hourly or non-half-hourly). These bands determine a fixed annual charge, replacing many variable charges.",
      "### Shift from Consumption to Fixed Charges",
      "Before TCR, companies with high usage during ‘red’ peak periods paid significantly more. After TCR, a larger share of charges is based on band allocation and fixed components, and a smaller share is driven by when you consume electricity.",
      "### Impact on SMEs vs Large Users",
      "Smaller SMEs may benefit from lower fixed charges compared with the old regime. Large industrial sites, and some multi-site operations, can face significant increases as more cost is allocated through fixed TCR bands rather than time-of-use signals.",
      "[[image:uk-business-network-charges-overview]]",
      "**DUoS, TNUoS and BSUoS: How They Change Under TCR**",
      "### TNUoS Demand Residual Changes",
      "According to UK market forecasts, TNUoS fixed charges are increasing materially from 2025–2026. EDF and other supplier data suggest some categories could see the demand residual component nearly doubling across two tariff years.",
      "### DUoS Red/Amber/Green Reform",
      "Peak DUoS charges for red and amber periods are decreasing, while fixed DUoS elements increase under the new model. This smooths some price signals but reduces your ability to ‘avoid’ charges purely by shifting consumption away from traditional red periods.",
      "### Balancing Costs and Policy Implications",
      "Balancing and policy-related charges, including BSUoS and certain environmental levies, continue to rise due to renewable intermittency and the need for system balancing investments. TCR does not remove these costs; it changes how and where they appear on your bill.",
      "[[image:tcr-duos-tnuos-reform-2026]]",
      "**How Much Will Businesses Pay? Example Scenarios**",
      "Scenario 1: Small Retail Unit (Low Consumption). This type of site may see lower exposure to red-band DUoS and lower TNUoS residuals than under the previous model, leading to a possible net decrease in total network-related charges.",
      "Scenario 2: Medium Manufacturing Site. A higher fixed TCR band combined with increased TNUoS demand residual can produce a moderate increase in overall business electricity charges, even if consumption patterns do not change.",
      "Scenario 3: Multi-Site Business. Multiple band charges across sites and reduced ability to minimise peak charges can create a noticeable increase once all locations are considered together.",
      "**How SMEs and Multi-Site Businesses Can Prepare for TCR**",
      "### Understanding Your Band Allocation",
      "Your allocated TCR band is now one of the most important drivers of your network costs. Confirming your band for each site — and understanding how it was calculated — is a critical first step.",
      "### Improving Load Factor",
      "Businesses with more stable load profiles tend to fare better under TCR and related reforms. Improving load factor by smoothing out sharp peaks and troughs can support both operational efficiency and cost control.",
      "### Shifting Non-Essential Consumption",
      "Although peak DUoS impact is lower than before, time-of-use still matters. Shifting non-essential consumption away from residual red periods and into lower-cost windows can deliver incremental savings and improve system efficiency.",
      "### Contract & Procurement Strategy for 2026",
      "TCR interacts with your procurement choices. Reviewing fixed versus flexible contracts, aligning end dates across sites and considering hybrid strategies can help manage the combined impact of wholesale prices and new non-commodity structures.",
      "**How Voltbridge Supports Businesses Through TCR Changes**",
      "Voltbridge helps UK businesses by analysing TCR band allocations, explaining DUoS, TNUoS and BSUoS impacts in plain language, and identifying opportunities to reduce charges through better load management and procurement.",
      "We also compare supplier offers under the new charging framework and design procurement strategies that take TCR into account, so you are not surprised by network costs mid-contract.",
      "**Conclusion**",
      "The Targeted Charging Review marks a major shift in how UK businesses are billed for electricity network costs. As these changes continue through 2025 and 2026, understanding your position and planning ahead becomes critical.",
      "Voltbridge provides expert advice to help businesses adapt to TCR and reduce costs wherever possible. Start your TCR impact assessment today."
    ],
    keywords: [
      "targeted charging review tcr explained",
      "what is the targeted charging review",
      "tcr charges uk business",
      "tcr impact on business energy bills",
      "duos tnous changes 2026",
      "non commodity charges uk",
      "ofgem network charging reform",
      "business electricity charges explained",
      "tnuos changes for businesses",
      "uk transmission charges 2026",
      "banding structure uk electricity",
      "red amber green periods",
      "network cost allocation uk",
      "non commodity costs electricity",
      "distribution charging reform",
      "energy bill components uk",
      "duos tnous bsus explained"
    ],
    heroImageSrc: "/images/insights/ofgem-tcr-explained.svg",
    heroImageAlt: "Ofgem Targeted Charging Review TCR explained diagram",
    images: [
      {
        src: "/images/insights/ofgem-tcr-explained.svg",
        alt: "Ofgem Targeted Charging Review TCR explained diagram"
      },
      {
        src: "/images/insights/uk-business-network-charges.svg",
        alt: "UK business electricity network charges overview"
      },
      {
        src: "/images/insights/tcr-banding-structure.svg",
        alt: "TCR banding structure for SMEs and large users"
      },
      {
        src: "/images/insights/tcr-duos-tnuos-reform-2026.svg",
        alt: "DUoS and TNUoS fixed charge reform 2026"
      }
    ]
  }
];
