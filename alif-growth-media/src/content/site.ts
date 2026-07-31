import safaLogo from "@/assets/safa-fresh.png";
import dtLogo from "@/assets/dt-interiors.png";
import sumeraLogo from "@/assets/sumera-collections.png";

export const company = {
  name: "Alif Growth Media",
  tagline: "Digital growth systems for local businesses",
  email: "hello.alifstudio@gmail.com",
  phone: "+91 91218 09212",
  phoneHref: "tel:+919121809212",
  whatsappPhone: "9121809212",
  get phoneE164() {
    return `+91${this.whatsappPhone}`;
  },
  whatsappMessage: "Hello Alif Growth Media, I want to discuss my business growth.",
  get whatsapp() {
    return `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  address: "Warangal, Telangana, India",
  areas: "Warangal · Hanamkonda · Hyderabad · Telangana",
  hours: "Mon – Sat, 10:00 – 19:00 IST",
  regions: ["India", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/blog", label: "Insights" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const problems = [
  { i: "1", t: "Replies get delayed", b: "Customers message you, but busy hours make follow-up difficult." },
  {
    i: "2",
    t: "No clear digital presence",
    b: "Your online image does not yet reflect the quality of your real service.",
  },
  {
    i: "3",
    t: "Online growth feels confusing",
    b: "There is too much advice and not enough clarity on what truly works for you.",
  },
];

export const pillars = [
  {
    k: "Foundation",
    t: "Digital Brand Identity",
    b: "Build trust quickly through a clear, professional online presence that represents your business with confidence.",
  },
  {
    k: "Flow",
    t: "Automated Customer Communication",
    b: "Keep customer conversations active so opportunities are never missed when your team is busy.",
  },
  {
    k: "Insight",
    t: "Simple Growth Visualisation",
    b: "Understand progress at a glance and make better next decisions for your business.",
  },
];

export const steps = [
  { t: "Understand", b: "We listen to your goals, customers, and current challenges." },
  { t: "Design", b: "We shape your digital identity to feel clear, trusted, and aligned." },
  { t: "Automate", b: "We set up response systems to keep communication smooth and fast." },
  { t: "Grow", b: "We guide your next actions with simple progress insight." },
];

export type Service = {
  slug: string;
  t: string;
  b: string;
  includes: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    t: "Digital Marketing",
    b: "Help more people discover your business through local campaigns, better visibility, and consistent online promotion.",
    includes: [
      "Local search and Google Business Profile setup",
      "Meta and Google campaign management",
      "Monthly content calendar for social channels",
      "Performance review in plain language",
    ],
    outcome: "More of the right people find you in your service area.",
  },
  {
    slug: "web-design",
    t: "Website Design & Development",
    b: "A professional website that makes your business look trustworthy, clear, and easy to contact.",
    includes: [
      "Conversion-focused page structure",
      "Mobile-first responsive build",
      "Speed, accessibility and SEO fundamentals",
      "Enquiry forms wired to WhatsApp and email",
    ],
    outcome: "A site that turns visitors into enquiries instead of just looking good.",
  },
  {
    slug: "automation",
    t: "WhatsApp & Customer Automation",
    b: "Reduce missed enquiries with structured reply systems across WhatsApp, Instagram, and email.",
    includes: [
      "Instant reply and greeting flows",
      "Enquiry routing and follow-up reminders",
      "Catalogue and FAQ auto-responses",
      "Simple CRM to track every lead",
    ],
    outcome: "No enquiry goes unanswered, even during your busiest hours.",
  },
  {
    slug: "brand-systems",
    t: "Brand Identity & Business Systems",
    b: "A consistent digital presence plus practical guidance on the tools and workflows your business actually needs.",
    includes: [
      "Logo, colour and typography direction",
      "Profile and listing consistency across platforms",
      "Templates for posts, quotes and invoices",
      "Tooling recommendations and team training",
    ],
    outcome: "One coherent brand that looks the same everywhere customers meet you.",
  },
];

export const engagements = [
  {
    t: "Growth Audit",
    price: "Complimentary",
    b: "A structured review of your presence, enquiry handling and next best steps.",
    points: ["45-minute working session", "Written action summary", "No obligation to continue"],
  },
  {
    t: "Launch Sprint",
    price: "Project based",
    b: "Identity, website and automation delivered as one connected launch.",
    points: ["4 – 6 week delivery", "Website + brand + reply systems", "Team handover and training"],
    featured: true,
  },
  {
    t: "Growth Retainer",
    price: "Monthly",
    b: "Ongoing marketing, content and optimisation with monthly reporting.",
    points: ["Campaign management", "Content and creative", "Monthly performance review"],
  },
];

export const results = [
  { t: "Faster Enquiry Handling", s: "Up to 4x", b: "quicker response flow across WhatsApp and social messages." },
  { t: "Steadier Weekly Leads", s: "+38%", b: "more consistent enquiries after clearer branding and follow-up." },
  { t: "Better Owner Decisions", s: "Less guesswork", b: "simple growth signals that show what to improve next." },
];

export const collaborations = [
  {
    name: "SAFA Fresh",
    industry: "Fresh Foods & Retail",
    desc: "A stronger digital presence for a growing local food brand.",
    scope: "Brand refresh · Website · Ordering enquiries",
    href: "https://safa-foods-xuac.vercel.app/",
    logo: safaLogo,
  },
  {
    name: "DT Interiors",
    industry: "Interior Design",
    desc: "A premium online experience reflecting exceptional interior craftsmanship.",
    scope: "Portfolio site · Lead capture · Social systems",
    href: "https://dt-interiors.vercel.app/",
    logo: dtLogo,
  },
  {
    name: "Sumera Collections",
    industry: "Fashion & Retail",
    desc: "A modern brand experience built for everyday customer discovery.",
    scope: "Storefront experience · WhatsApp automation",
    href: "https://sumeeracollections.vercel.app/",
    logo: sumeraLogo,
  },
];

export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  location: string;
  desc: string;
  scope: string;
  href: string;
  logo: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcomes: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "safa-fresh",
    name: "SAFA Fresh",
    industry: "Fresh Foods & Retail",
    location: "Warangal, Telangana",
    desc: "A stronger digital presence for a growing local food brand.",
    scope: "Brand refresh · Website · Ordering enquiries",
    href: "https://safa-foods-xuac.vercel.app/",
    logo: safaLogo,
    challenge:
      "SAFA Fresh had quality products and a loyal offline customer base, but their digital presence did not communicate freshness, trust, or ease of ordering. Most enquiries came through scattered WhatsApp messages that were easy to miss during busy hours.",
    approach: [
      "Researched the local fresh-foods niche and how customers in Warangal search for quality ingredients.",
      "Mapped SAFA's product range to clear categories and ordering flows.",
      "Built a clean, mobile-first storefront with WhatsApp enquiry integration.",
      "Ran performance marketing focused on nearby buyers and repeat customers.",
    ],
    deliverables: [
      "Brand-aligned website with product categories",
      "WhatsApp ordering and auto-reply flow",
      "Social content system for offers and new arrivals",
      "Local SEO and Google Business Profile optimisation",
    ],
    outcomes: [
      "Faster, more organised order enquiries",
      "Clearer product discovery on mobile",
      "Stronger local visibility for fresh-food searches",
    ],
  },
  {
    slug: "dt-interiors",
    name: "DT Interiors",
    industry: "Interior Design",
    location: "Warangal, Telangana",
    desc: "A premium online experience reflecting exceptional interior craftsmanship.",
    scope: "Portfolio site · Lead capture · Social systems",
    href: "https://dt-interiors.vercel.app/",
    logo: dtLogo,
    challenge:
      "DT Interiors' work spoke for itself in person, but online prospects could not see the depth of their portfolio or understand the design process. Leads were slipping away because the brand felt generic rather than premium.",
    approach: [
      "Studied the interior-design customer journey in the region.",
      "Restructured the portfolio around project types and customer intent.",
      "Designed a premium site that mirrors the quality of their finished spaces.",
      "Set up lead-capture and social proof systems to build confidence.",
    ],
    deliverables: [
      "Portfolio website with project galleries",
      "Lead capture forms and enquiry automation",
      "Brand consistency across Instagram and listings",
      "Content templates for before/after project stories",
    ],
    outcomes: [
      "More qualified interior-design enquiries",
      "Higher perceived value before the first call",
      "Easier sharing of work with prospects",
    ],
  },
  {
    slug: "sumera-collections",
    name: "Sumera Collections",
    industry: "Fashion & Retail",
    location: "Warangal, Telangana",
    desc: "A modern brand experience built for everyday customer discovery.",
    scope: "Storefront experience · WhatsApp automation",
    href: "https://sumeeracollections.vercel.app/",
    logo: sumeraLogo,
    challenge:
      "Sumera Collections had a strong product line but no structured way for customers to browse collections, ask about availability, or complete a purchase enquiry. Social media alone was not turning interest into sales.",
    approach: [
      "Analysed the fashion retail audience and how they discover collections online.",
      "Organised products into browsable collections with clear pricing signals.",
      "Integrated WhatsApp so every product view can become a conversation.",
      "Built a content rhythm to keep the brand top of mind.",
    ],
    deliverables: [
      "Collection-focused storefront",
      "WhatsApp catalogue and enquiry automation",
      "Social content calendar and templates",
      "Customer follow-up workflow",
    ],
    outcomes: [
      "More product enquiries through WhatsApp",
      "Better collection discovery on mobile",
      "Consistent brand experience across touchpoints",
    ],
  },
];

export const values = [
  {
    t: "Clarity over jargon",
    b: "Every recommendation is explained in language a business owner can act on immediately.",
  },
  {
    t: "Systems over one-off tasks",
    b: "We build repeatable processes so growth continues after a campaign ends.",
  },
  {
    t: "Local context first",
    b: "We design for how customers in Telangana and the Gulf actually search, message and decide.",
  },
  {
    t: "Accountability",
    b: "Clear scope, clear timelines, and honest reporting on what worked and what did not.",
  },
];

export const team = [
  {
    name: "Mohammed Minhaj",
    role: "Co-Founder",
    bio: "Mohammed leads strategy and client growth at Alif Growth Media. He works directly with local businesses to turn their offline reputation into a trusted, high-converting digital presence.",
    email: "minhajmuhammad229@gmail.com",
    phone: "+91 99085 97337",
    linkedin: "https://www.linkedin.com/in/muhammadminhaj229",
    image: null as string | null,
  },
];

export const faqs = [
  {
    q: "Do I need technical knowledge?",
    a: "No. Everything is explained in simple language and we guide you through each step.",
  },
  {
    q: "How quickly can we start?",
    a: "Most businesses start with a growth audit immediately and begin implementation within days.",
  },
  {
    q: "Do you work across Telangana?",
    a: "Yes. We support local businesses in Warangal, Hyderabad, and across Telangana.",
  },
  {
    q: "Can you handle marketing, websites and automation together?",
    a: "Yes. We combine the essential parts of digital growth into one connected system.",
  },
  {
    q: "How do you report progress?",
    a: "You receive a monthly summary covering enquiries, visibility and the next actions we recommend.",
  },
  {
    q: "Do you work with businesses outside our usual industries?",
    a: "Yes. Our system adapts to most service and retail businesses that rely on local customers.",
  },
  {
    q: "Do you work with businesses in Gulf countries?",
    a: "Yes. We partner with local businesses in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman to build digital presence and customer communication systems.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tags: string[];
  content: { heading: string; body: string[] }[];
  keyStats?: BlogStat[];
  references?: BlogReference[];
};

export type BlogReference = {
  label: string;
  publisher: string;
  year: string;
  href: string;
};

export type BlogStat = {
  value: string;
  label: string;
  source: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-local-businesses-in-telangana-need-a-digital-growth-system",
    title: "The cost of staying offline: what the data says about Indian local businesses in 2026",
    excerpt:
      "ICRIER surveyed 2,365 Indian MSMEs across 12 states. Firms integrated with digital channels pulled ahead on turnover, hiring and exports. Here is the evidence, and what it predicts for businesses that stay offline.",
    date: "2026-07-28",
    author: "Mohammed Minhaj",
    readTime: "9 min read",
    category: "Research",
    tags: ["MSME", "Telangana", "Research", "Digital adoption"],
    keyStats: [
      {
        value: "38% vs 25%",
        label: "Share of MSMEs crossing ₹1 crore turnover in 2023-24 — digitally integrated firms vs non-integrated firms",
        source: "ICRIER, Annual Survey of MSMEs in India (2025)",
      },
      {
        value: "77% vs 64%",
        label: "Share employing more than 10 workers by 2023-24 — integrated vs non-integrated firms",
        source: "ICRIER, Annual Survey of MSMEs in India (2025)",
      },
      {
        value: "65% vs 11%",
        label: "Firms selling through additional online channels beyond marketplaces",
        source: "ICRIER, Annual Survey of MSMEs in India (2025)",
      },
    ],
    content: [
      {
        heading: "The evidence base",
        body: [
          "In March 2025 the Indian Council for Research on International Economic Relations (ICRIER) published its Annual Survey of Micro, Small and Medium Enterprises in India, subtitled 'The Role of Digitalisation in Enterprise Development'. It is one of the few Indian studies that tracks the same question we get asked every week in Warangal: does going digital actually change the numbers, or does it just look modern?",
          "The survey covered 2,365 MSMEs across 12 states and more than 20 clusters, and compared firms integrated with e-commerce and digital sales channels against firms that were not. Because the study is inter-temporal, it does not just take a snapshot — it follows how the same categories of firms moved between 2021-22 and 2023-24.",
        ],
      },
      {
        heading: "The gap is widening, not closing",
        body: [
          "In 2021-22, about 25% of digitally integrated firms reported turnover above ₹1 crore, against 20% of non-integrated firms — a five-point gap. By 2023-24 the integrated group had climbed to 38% while the non-integrated group reached 25%. The gap had more than doubled, to thirteen points.",
          "Hiring followed the same curve. In 2021-22, 60% of integrated enterprises employed more than 10 workers, compared with 50% of non-integrated ones. By 2023-24 that was 77% against 64%.",
          "This is the part most owners underestimate. Offline businesses are not standing still — many are growing. They are simply growing more slowly than their digitised competitors in the same cluster, which over three or four years turns a small difference into a market-share problem.",
        ],
      },
      {
        heading: "Second-order effects compound the advantage",
        body: [
          "ICRIER found that more than 90% of integrated firms adopted innovative business practices — new production or distribution methods, new product launches, or first-time exporting. Around 60% invested in skill training for employees after integrating.",
          "Digital reach also multiplies: 65% of integrated firms sold through additional online channels, compared with just 11% of non-integrated firms. And among export-oriented integrated firms, roughly 93% used e-commerce marketplaces to reach international buyers — including a substantial share of micro-enterprises.",
          "There is a financing consequence too. The report notes that the digital footprint a business creates improves its creditworthiness, and that both average interest rates and the credit gap were lower for integrated enterprises. Being invisible online is, in effect, being invisible to lenders.",
        ],
      },
      {
        heading: "What this predicts for a business that stays offline",
        body: [
          "We do not think a business fails because it lacks a website. The realistic prediction from this data is quieter and more damaging: a slow erosion. On current trajectories, an offline local business in Telangana can expect to see its share of new customers shrink each year while its existing customers stay loyal — which masks the problem until the older customer base ages out.",
          "Specifically, the ICRIER trend lines suggest three pressures: fewer high-growth years (the turnover gap), a harder time hiring and retaining a larger team (the employment gap), and costlier credit (the finance gap). None of these show up in a single quarter. All of them show up in a three-year comparison.",
          "Discovery adds a fourth pressure. BrightLocal's Local Consumer Review Survey 2025 found that only 4% of consumers say they never read online reviews, and 74% consult two or more sources before choosing a local business. A business with no reviewable, comparable online presence is not losing an argument with competitors — it is not in the consideration set at all.",
        ],
      },
      {
        heading: "What a growth system actually means",
        body: [
          "The ICRIER data points to integration, not tools. Firms that benefited did not buy one product; they connected sales channels, communication and records into something that operated daily.",
          "That is how we structure work at Alif Growth Media: a clear brand identity so the business is credible on first contact, automated customer communication so enquiries are answered in minutes rather than hours, and simple reporting so the owner can see which of the two is working.",
          "If you want to test the gap for your own business, the honest first step is a comparison, not a purchase: look at the three competitors in your category who are visible online, and count their reviews, response times and product listings against yours.",
        ],
      },
    ],
    references: [
      {
        label: "Annual Survey of Micro, Small and Medium Enterprises in India: The Role of Digitalisation in Enterprise Development",
        publisher: "ICRIER (Goyal, Puri & Khanna)",
        year: "March 2025",
        href: "https://icrier.org/pdf/Annual-Survey-MSMEs_India_2025.pdf",
      },
      {
        label: "Press release and key highlights of the MSME survey",
        publisher: "ICRIER",
        year: "27 March 2025",
        href: "https://icrier.org/pdf/PR_Annual-Survey-of-MSMEs.pdf",
      },
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
  },
  {
    slug: "how-whatsapp-automation-turns-missed-messages-into-sales",
    title: "Speed to lead: the research behind replying in five minutes",
    excerpt:
      "Harvard Business Review measured what happens when firms take an hour to answer an enquiry instead of five minutes. The difference is not incremental — it is an order of magnitude.",
    date: "2026-07-25",
    author: "Mohammed Minhaj",
    readTime: "7 min read",
    category: "Research",
    tags: ["WhatsApp", "Automation", "Lead response", "Sales"],
    keyStats: [
      {
        value: "7x",
        label: "Higher odds of qualifying a lead when contacted within an hour versus just one hour later",
        source: "Harvard Business Review, 'The Short Life of Online Sales Leads'",
      },
      {
        value: "60x",
        label: "Higher odds of qualifying a lead when contacted within an hour versus 24 hours or more later",
        source: "Harvard Business Review, 'The Short Life of Online Sales Leads'",
      },
      {
        value: "21.6%",
        label: "Increase in progression through lead-generation funnels from a 0.1s improvement in mobile site speed",
        source: "Deloitte & Google, 'Milliseconds Make Millions'",
      },
    ],
    content: [
      {
        heading: "The study everyone quotes, and what it actually measured",
        body: [
          "James Oldroyd, Kristina McElheran and David Elkington audited how quickly firms responded to inbound web enquiries, and published the findings in Harvard Business Review as 'The Short Life of Online Sales Leads'. The audit covered thousands of US firms and tens of thousands of leads.",
          "The headline result: firms that tried to contact a potential customer within an hour of receiving an enquiry were nearly seven times more likely to have a meaningful conversation with a decision-maker than firms that waited even one hour longer — and more than sixty times more likely than firms that waited 24 hours or more.",
          "The researchers also found that most firms were far slower than they believed. The average first-response time in their audit was measured in dozens of hours, not minutes, and a substantial share of enquiries were never responded to at all.",
        ],
      },
      {
        heading: "Why the decay curve is so steep",
        body: [
          "Intent is perishable. A customer messaging about a kitchen renovation, a bulk grocery order or a boutique enquiry is usually messaging three or four businesses in the same sitting. The first useful reply frames the comparison; every later reply is judged against it.",
          "This is why 'we usually get back within a day' is not a service standard — it is a concession of the enquiry to whoever replied at minute two.",
        ],
      },
      {
        heading: "Speed on the page matters as much as speed in the inbox",
        body: [
          "Deloitte, working with Google, analysed mobile site data from 37 brands across retail, travel, luxury and lead generation in the study 'Milliseconds Make Millions'. Improving mobile site speed by just 0.1 seconds increased retail conversion rates by 8.4% and average order value by 9.2%.",
          "For lead-generation businesses — which is what most local service brands are — the same 0.1 second improvement increased progression through the funnel by 21.6%. Luxury brands saw an 8.6% lift in page views per session.",
          "In practice, page speed and reply speed are the same problem viewed at two scales: how long a ready-to-buy customer is asked to wait.",
        ],
      },
      {
        heading: "What automation should and should not do",
        body: [
          "Automation is not there to fake a human. It is there to close the gap between the moment intent peaks and the moment a person can respond properly.",
          "A well-built WhatsApp flow acknowledges the message immediately, answers the two or three questions that are asked in almost every enquiry (price range, availability, location, timeline), shares the catalogue or portfolio, and captures the enquiry into a list the owner works through — so the human reply, when it comes, is informed rather than starting from zero.",
          "What it should not do is loop, interrogate or hide the option of reaching a person. BrightLocal's 2025 review research found consumers are already suspicious of anything they read as inauthentic; the same instinct applies to conversations.",
        ],
      },
      {
        heading: "A benchmark you can hold yourself to",
        body: [
          "Set two numbers and measure them monthly: median first-response time, and the percentage of enquiries that receive no response at all. Most local businesses we audit start with a median in hours and a no-response rate above 15%.",
          "Getting the median under five minutes and the no-response rate to zero is a systems problem with a known solution — and, on the HBR numbers, the single highest-leverage change available to a business that is already generating enquiries.",
        ],
      },
    ],
    references: [
      {
        label: "The Short Life of Online Sales Leads (Oldroyd, McElheran & Elkington)",
        publisher: "Harvard Business Review",
        year: "2011",
        href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
      },
      {
        label: "Milliseconds Make Millions: the impact of mobile speed on business metrics",
        publisher: "Deloitte Digital with Google",
        year: "2020",
        href: "https://web.dev/case-studies/milliseconds-make-millions",
      },
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
  },
  {
    slug: "what-gulf-region-local-businesses-should-know-before-going-digital",
    title: "Going digital in the Gulf: market data for UAE and GCC service brands",
    excerpt:
      "The UAE's e-commerce market is measured in the billions of dollars and national programmes like Saudi Vision 2030 are pushing SME digitisation. Here is what the numbers mean for a local service brand entering the Gulf.",
    date: "2026-07-22",
    author: "Mohammed Minhaj",
    readTime: "8 min read",
    category: "Global",
    tags: ["Gulf", "UAE", "Saudi Arabia", "Market data"],
    keyStats: [
      {
        value: "USD 11.05bn",
        label: "Estimated size of the UAE e-commerce market, with continued growth forecast to 2030",
        source: "Nexdigm, UAE E-Commerce Market Outlook to 2030",
      },
      {
        value: "Vision 2030",
        label: "Saudi Arabia's national programme continues to be the primary driver of SME digital and SaaS adoption across the GCC",
        source: "GCC digital transformation market analyses, 2026",
      },
      {
        value: "21.6%",
        label: "Lead-generation funnel progression gained from a 0.1s mobile speed improvement — decisive in a mobile-first region",
        source: "Deloitte & Google, 'Milliseconds Make Millions'",
      },
    ],
    content: [
      {
        heading: "The market is large, digital and unusually mobile",
        body: [
          "The UAE e-commerce market has been estimated at around USD 11.05 billion, driven by very high mobile and internet penetration and a young, urban, high-spending population. Market outlooks published through 2025 and 2026 project continued expansion to 2030.",
          "Across the wider GCC, national programmes — Saudi Vision 2030 most prominently — have made digital transformation an explicit policy objective, funding SME digitisation and pulling SaaS adoption forward faster than most comparable regions.",
          "The practical consequence for a small service brand: you are not persuading Gulf customers to shop online. They already do. You are competing for attention inside an environment where digital-first is the baseline, not a differentiator.",
        ],
      },
      {
        heading: "Trust signals carry more weight than traffic",
        body: [
          "Gulf markets have a large expatriate population making high-consideration purchases — home services, interiors, catering, tailoring — often without local word-of-mouth networks to fall back on. Online proof substitutes for personal referral.",
          "BrightLocal's 2025 consumer research, while US-based, describes behaviour that maps closely onto this: 74% of consumers consult two or more sources before choosing a local business, and consumers increasingly favour long, detailed reviews with photos and video over star ratings alone. A profile with four reviews and no imagery does not read as 'new'. It reads as 'unverified'.",
          "Concretely, that means a consistent trading name across every listing, licence and registration details visible, real photographs of real work, and reviews on more than one platform.",
        ],
      },
      {
        heading: "Mobile-first is a performance requirement, not a layout preference",
        body: [
          "Because the region browses on phones, the Deloitte and Google findings apply with unusual force: a 0.1 second mobile speed improvement was associated with a 21.6% increase in progression through lead-generation funnels, and 8.4% higher conversion in retail.",
          "A heavy WordPress theme with unoptimised imagery is not a cosmetic issue in this market. It is a measurable reduction in enquiries at the exact moment customers are comparing you with three alternatives.",
        ],
      },
      {
        heading: "WhatsApp is the commercial channel",
        body: [
          "Across the GCC and India alike, WhatsApp is where the actual business conversation happens — quotes, availability, photographs, confirmations. Email is often only used for invoices.",
          "Design for that reality: a visible WhatsApp entry point on every page, message templates that answer pricing and availability immediately, and Arabic-language support where your customer base needs it. Combine that with the speed-to-lead evidence and the operating standard becomes simple — an acknowledged reply in under five minutes, in the customer's preferred language.",
        ],
      },
      {
        heading: "How we adapt the system for the Gulf",
        body: [
          "We run the same four-part structure we use in Telangana — identity, website, automation, reporting — with three adjustments: bilingual content where relevant, trust and licensing information surfaced far earlier in the page, and payment or enquiry flows matched to local expectations.",
          "The underlying principle does not change across markets. The business that is easiest to verify and fastest to answer wins the enquiry.",
        ],
      },
    ],
    references: [
      {
        label: "UAE E-Commerce Market Outlook to 2030",
        publisher: "Nexdigm Market Research",
        year: "2025",
        href: "https://www.nexdigm.com/market-research/report-store/uae-e-commerce-market-report/",
      },
      {
        label: "UAE Digital Transformation Market — Growth Trends and Forecast",
        publisher: "Mordor Intelligence",
        year: "2026",
        href: "https://www.mordorintelligence.com/industry-reports/uae-digital-transformation-market",
      },
      {
        label: "Milliseconds Make Millions: the impact of mobile speed on business metrics",
        publisher: "Deloitte Digital with Google",
        year: "2020",
        href: "https://web.dev/case-studies/milliseconds-make-millions",
      },
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
    ],
  },
  {
    slug: "building-trust-online-a-practical-guide-for-small-service-brands",
    title: "What consumers actually check before choosing you: 2025 review research",
    excerpt:
      "BrightLocal surveyed consumers on how they read, trust and act on local business reviews. The findings change what a small service brand should prioritise online.",
    date: "2026-07-18",
    author: "Mohammed Minhaj",
    readTime: "8 min read",
    category: "Research",
    tags: ["Trust", "Reviews", "Local SEO", "Branding"],
    keyStats: [
      {
        value: "4%",
        label: "Share of consumers who say they never read online reviews for local businesses — the other 96% do",
        source: "BrightLocal, Local Consumer Review Survey 2025",
      },
      {
        value: "74%",
        label: "Consumers who consult two or more review sources before choosing a local business",
        source: "BrightLocal, Local Consumer Review Survey 2025",
      },
      {
        value: "75%+",
        label: "Consumers who watch video content when researching a local business",
        source: "BrightLocal, Local Consumer Review Survey 2025",
      },
    ],
    content: [
      {
        heading: "Reviews are near-universal, and Google still dominates",
        body: [
          "BrightLocal has run its Local Consumer Review Survey annually since 2010. The 2025 edition found that only 4% of consumers say they never read online business reviews. The frequency has softened — more people now read 'occasionally' rather than 'always' — but the funnel still passes through reviews for nearly everyone.",
          "Google remains the dominant review platform, recovering share after a dip in 2024, while Facebook has declined consistently since 2022. Trustpilot is the one traditional platform trending upward.",
        ],
      },
      {
        heading: "Consumers cross-check, so one strong profile is not enough",
        body: [
          "27% of consumers use a single website before deciding, but 74% use two or more. That is the argument for diversifying: if your Google Business Profile is healthy while your listing elsewhere is empty or full of unanswered complaints, the inconsistency itself becomes the trust problem.",
          "BrightLocal's earlier Local Business Discovery and Trust Report found 63% of consumers would lose trust in a business after seeing mostly negative written reviews — but the more actionable finding is that contradiction between platforms triggers the same suspicion.",
        ],
      },
      {
        heading: "Detail beats rating",
        body: [
          "Asked what makes them feel positive about a business, consumers named a review describing a positive experience most often — but the notable 2025 shifts were increases for reviews accompanied by photos or video (up 3%) and for long, detailed reviews (up 7%).",
          "Consumers are gathering facts to reach their own judgement rather than accepting an average score. That changes what you should request from customers: a specific, descriptive review with a photo is worth several generic five-star ratings.",
        ],
      },
      {
        heading: "Video is now part of local research",
        body: [
          "Over three-quarters of consumers watch video when researching a local business, and — surprisingly — the most-preferred format is video posted by the business itself about its own products or services, ahead of influencer content and content from friends.",
          "For an interiors firm, a fresh-foods brand or a boutique, that means short, plain, self-produced video of actual work is not a nice-to-have. It is the format the highest-intent segment of your audience is looking for.",
        ],
      },
      {
        heading: "Responses, recency and the AI question",
        body: [
          "Review responses continue to build trust, and BrightLocal found an uncomfortable nuance in 2025: consumers equate AI with 'fake', yet unknowingly preferred an AI-written response when shown examples. The lesson is not to automate blindly — it is that structure and completeness in a response matter more than consumers assume.",
          "On recency, consumers grew more lenient in 2025: fewer insist on reviews from the last two weeks, and more accept reviews up to six months or a year old. Almost 10% say recency has no impact at all. A steady trickle of reviews beats a one-off campaign.",
        ],
      },
      {
        heading: "A practical checklist",
        body: [
          "Claim and complete your Google Business Profile, then at least one secondary platform relevant to your category, and keep the trading name, address and hours identical across both.",
          "Ask for reviews at the point of highest satisfaction, and ask for specifics — what was done, how long it took, what the customer was worried about beforehand.",
          "Publish your own short video of finished work every month, respond to every review within a few days, and display phone, WhatsApp, email and working hours on every page.",
          "None of these are marketing tactics. They are the evidence consumers have told researchers, for fifteen consecutive years, that they look for.",
        ],
      },
    ],
    references: [
      {
        label: "Local Consumer Review Survey 2025",
        publisher: "BrightLocal (Sammy Paget)",
        year: "January 2025",
        href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
      },
      {
        label: "Local Business Discovery and Trust Report",
        publisher: "BrightLocal",
        year: "2023",
        href: "https://www.brightlocal.com/research/local-business-discovery-trust-report/",
      },
      {
        label: "Annual Survey of MSMEs in India: The Role of Digitalisation in Enterprise Development",
        publisher: "ICRIER",
        year: "March 2025",
        href: "https://icrier.org/pdf/Annual-Survey-MSMEs_India_2025.pdf",
      },
    ],
  },
];

export const privacyContent = {
  lastUpdated: "30 July 2026",
  sections: [
    {
      heading: "What information we collect",
      body: "We collect information you provide directly through our contact form, WhatsApp messages, email, or phone calls. This may include your name, business name, phone number, email address, city, and details about your business goals.",
    },
    {
      heading: "How we use your information",
      body: "We use your information to respond to enquiries, schedule growth audits, deliver our services, and communicate with you about your project. We do not sell your personal information to third parties.",
    },
    {
      heading: "How we store and protect your data",
      body: "We keep your information in secure, access-controlled systems. We retain contact details only as long as needed to provide our services or comply with legal obligations.",
    },
    {
      heading: "Third-party services",
      body: "We use WhatsApp, email, and standard website hosting services to communicate with you. These services have their own privacy policies and security practices.",
    },
    {
      heading: "Cookies and analytics",
      body: "Our website does not use tracking cookies by default. If we add analytics in the future, we will update this policy and ask for your consent where required.",
    },
    {
      heading: "Your rights",
      body: "You can ask us to access, correct, or delete your personal information at any time by contacting us at hello.alifstudio@gmail.com.",
    },
  ],
};

export const termsContent = {
  lastUpdated: "30 July 2026",
  sections: [
    {
      heading: "Overview",
      body: "These Terms of Service govern your use of the Alif Growth Media website and any services you engage us to perform. By using our site or services, you agree to these terms.",
    },
    {
      heading: "Services",
      body: "We provide digital marketing, website design and development, WhatsApp and customer automation, brand identity, and related consulting services. Specific deliverables, timelines, and fees are agreed in writing before work begins.",
    },
    {
      heading: "Client responsibilities",
      body: "Clients agree to provide timely feedback, content, images, account access, and other materials needed for us to complete the work. Delays in providing these materials may affect delivery timelines.",
    },
    {
      heading: "Payments",
      body: "Project fees and retainer amounts are agreed in advance. Invoices are due according to the payment schedule in the project agreement. Work may be paused if payments are overdue.",
    },
    {
      heading: "Intellectual property",
      body: "Upon full payment, clients receive ownership of custom deliverables created specifically for them. We retain the right to use generic processes, templates, and non-confidential work examples for our portfolio unless otherwise agreed.",
    },
    {
      heading: "Limitations",
      body: "We do not guarantee specific business outcomes such as sales, revenue, or ranking positions. We commit to delivering the agreed work with care and professionalism.",
    },
    {
      heading: "Termination",
      body: "Either party may terminate an engagement with written notice. Fees for work completed up to the termination date remain payable.",
    },
    {
      heading: "Governing law",
      body: "These terms are governed by the laws of India. Any disputes will be resolved through good-faith negotiation.",
    },
  ],
};

/* ---------------- About page content ---------------- */

export const originStory = [
  {
    h: "The name is the idea",
    b: "Alif is the first letter — the first stroke every learner writes before words, sentences or stories are possible. We chose it because most businesses we meet do not need a bigger campaign; they need a proper first stroke. A clear name, a presence people trust, a reply that arrives on time. Everything else compounds from there.",
  },
  {
    h: "Where it started",
    b: "We began in Warangal, sitting in shops and studios watching owners lose enquiries not from lack of skill, but from a missed WhatsApp message at 8pm. We fixed the reply flow for one brand first. Enquiries that used to go cold started closing. That single change told us growth is usually a systems problem, not an effort problem.",
  },
  {
    h: "What we built from it",
    b: "Alif Growth Media now assembles identity, website, marketing and automated communication into one connected system, run by a small senior team. We keep our client count deliberately low so the person who designs your system is the same person who answers your call six months later.",
  },
];

export const ideology = [
  {
    n: "01",
    t: "Trust is the real product",
    b: "A customer decides about you in seconds, long before they speak to you. Our work is to make those seconds honest and reassuring — real photos, real reviews, real prices, no borrowed stock imagery.",
  },
  {
    n: "02",
    t: "Small businesses deserve enterprise-grade systems",
    b: "Speed to reply, structured follow-up and clean measurement are not luxuries for large companies. We build the same discipline at a scale a family-run business can actually operate.",
  },
  {
    n: "03",
    t: "Build the machine, not the moment",
    b: "A viral post fades in a week. A working enquiry system keeps paying for years. We optimise for what still runs when the campaign budget stops.",
  },
  {
    n: "04",
    t: "Local truth over global templates",
    b: "How a customer in Hanamkonda searches is not how a customer in Sharjah searches. We design for language, timing and buying behaviour on the ground, not for a template made elsewhere.",
  },
  {
    n: "05",
    t: "Say the uncomfortable thing early",
    b: "If a channel will not work for your margin, we say so before invoicing, not after. Honest scoping protects the relationship far better than an optimistic proposal.",
  },
  {
    n: "06",
    t: "Handover, not dependency",
    b: "You own every account, asset and login we create. A good partner should be chosen every year, never trapped into.",
  },
];

export const evidence = [
  {
    stat: "13 points",
    label: "turnover growth gap",
    body: "Indian MSMEs with integrated digital operations reported turnover growth roughly 13 percentage points ahead of non-integrated peers.",
    source: "ICRIER MSME Digitalisation Study, 2025",
    href: "https://icrier.org/",
  },
  {
    stat: "98%",
    label: "of consumers read reviews",
    body: "Local reputation is now the first sales conversation — and most buyers check more than one source before contacting a business.",
    source: "BrightLocal Local Consumer Review Survey, 2025",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey/",
  },
  {
    stat: "7×",
    label: "higher qualification odds",
    body: "Responding to an enquiry within an hour makes it about seven times more likely to be qualified than replying later.",
    source: "Harvard Business Review, Lead Response Management research",
    href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads",
  },
  {
    stat: "USD 11bn+",
    label: "Gulf e-commerce runway",
    body: "UAE online retail alone is heading past eleven billion dollars, with Saudi Vision 2030 pushing SME digitisation across the region.",
    source: "Industry market outlooks, 2025",
    href: "https://www.vision2030.gov.sa/",
  },
];

export const standards = [
  { t: "Reply window", b: "Enquiry systems we build are designed to acknowledge a customer in under five minutes, at any hour." },
  { t: "Senior attention", b: "No account is handed to a junior team. The founder stays on every engagement end to end." },
  { t: "Full ownership", b: "Domains, hosting, ad accounts, inboxes and analytics are created in your name from day one." },
  { t: "Plain reporting", b: "A monthly summary in business language: enquiries, visibility, what worked, what to change." },
];

export const milestones = [
  { y: "Origin", t: "One reply flow", b: "A single WhatsApp response system for a Warangal retailer turns missed messages into closed sales." },
  { y: "Growth", t: "Identity + web", b: "Brand identity and websites are added so first impressions match the quality of the service behind them." },
  { y: "Systems", t: "The three pillars", b: "Foundation, Flow and Insight are formalised into one repeatable growth framework." },
  { y: "Today", t: "India & the Gulf", b: "The same system is adapted for businesses across Telangana and the GCC markets." },
];
