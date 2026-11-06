// Site copy for Farmivo. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Farmivo",
  "tagline": "Plan crop supply before procurement season.",
  "categories": [
    "AI",
    "AgriTech",
    "Supply Chain Intelligence"
  ],
  "about": "Farmivo helps agricultural buyers plan sourcing across fragmented grower networks. Its AI translates field and satellite data into supply forecasts that procurement teams can act on.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#1d2a12\"/><path d=\"M16 25V12\" stroke=\"#e9c46a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/><path d=\"M16 17c-5 0-7-3-7-7 4 0 7 2 7 7zm0-2c0-5 3-8 7-8 0 5-3 8-7 8z\" fill=\"#9ccc65\"/><path d=\"M8 25h16\" stroke=\"#e9c46a\" stroke-width=\"2.4\" stroke-linecap=\"round\"/>",
  "words": {
    "records": "forecasts",
    "decider": "procurement and sourcing managers",
    "sources": "field registrations, planting dates, satellite observations, weather data and collection history",
    "model": "Crop-supply models combine satellite vegetation indices, weather and planting data with collection history to forecast volumes and arrival windows by region, with uncertainty bands.",
    "store": "Amazon S3 geospatial archive"
  },
  "hero": {
    "eyebrow": "Crop supply forecasting for processors",
    "before": "See your likely harvest supply ",
    "em": "before trucks are booked",
    "after": ".",
    "points": [
      "Volume and timing forecasts by sourcing region",
      "Satellite and weather signals, explained",
      "Procurement teams decide every plan"
    ],
    "floatTitle": "Harvest −18% vs plan",
    "floatText": "Paddy · Kano cluster · late rains"
  },
  "problem": {
    "title": "Plants plan on last year’s numbers while fields tell a different story.",
    "text": "Processors buy from thousands of smallholders spread across regions. Planting dates vary, rains arrive late, and estimates come from phone calls with aggregators. Plants end up short of inputs, or produce waits in the field without a buyer.",
    "fragments": [
      "Supply estimates gathered by phone each week",
      "Trucks booked for a harvest that is three weeks late",
      "Mill capacity idle while paddy waits in the field",
      "Extension visits planned without knowing where crops are struggling"
    ]
  },
  "solution": {
    "title": "Forecasts from the field, the sky and your own history.",
    "text": "Farmivo combines field registrations, planting dates, satellite observations and weather with your collection history to forecast how much will be ready, where and when, and recommends aggregation and procurement schedules.",
    "capabilities": [
      {
        "title": "Supply forecasting",
        "text": "Expected volumes by region and week, with confidence ranges that narrow as the season progresses.",
        "demoLabel": "Kano cluster",
        "demoValue": "4,100 ± 600 t paddy"
      },
      {
        "title": "Harvest timing",
        "text": "Predicts when harvests will peak, using planting dates, crop growth and weather.",
        "demoLabel": "Peak harvest",
        "demoValue": "Weeks 44–46"
      },
      {
        "title": "Procurement scheduling",
        "text": "Recommends aggregation points, truck bookings and buying windows to match forecast supply.",
        "demoLabel": "Suggestion",
        "demoValue": "Move 12 trucks to Jigawa"
      }
    ]
  },
  "stepsTitle": "From scattered fields to a sourcing plan.",
  "steps": [
    [
      "Register",
      "Load grower and field registrations, planting dates and past collection records."
    ],
    [
      "Observe",
      "Farmivo adds satellite crop observations and weather data for every registered area."
    ],
    [
      "Forecast",
      "Volumes and harvest timing are forecast by region, with uncertainty shown."
    ],
    [
      "Plan",
      "Sourcing teams review recommendations, adjust plans, and every decision is logged."
    ]
  ],
  "audiencesTitle": "For buyers sourcing from many growers.",
  "audiences": [
    {
      "title": "Rice millers",
      "text": "Match paddy procurement to mill capacity across sourcing clusters.",
      "outcome": "Steadier mill throughput"
    },
    {
      "title": "Cassava processors",
      "text": "Plan root supply where harvest timing is flexible but spoilage is fast.",
      "outcome": "Less spoilage, fewer gaps"
    },
    {
      "title": "Grain aggregators",
      "text": "Position trucks, storage and cash for buying windows.",
      "outcome": "Better buying windows"
    },
    {
      "title": "State agricultural development programmes",
      "text": "See where crops are struggling and where harvest support is needed.",
      "outcome": "Targeted support"
    }
  ],
  "publicSector": {
    "title": "Plan extension visits and harvest support with shared forecasts.",
    "text": "Agricultural agencies can use aggregated Farmivo forecasts to see where crops are behind, plan extension visits and prepare harvest, storage and transport support.",
    "points": [
      "Aggregated forecasts by LGA and crop",
      "Early signals of crop stress from satellite data",
      "Planning support for extension and harvest programmes",
      "Farmer-level data shared only under agreed terms"
    ]
  },
  "ai": {
    "title": "The model forecasts supply. People decide how to buy.",
    "intro": "Forecasts affect farmers’ incomes and plants’ operations. Farmivo informs sourcing decisions and keeps its uncertainty in plain view.",
    "does": [
      "Forecasts volumes and harvest timing by region",
      "Detects crop stress from satellite observations",
      "Recommends aggregation and procurement schedules",
      "Shows confidence and the data gaps behind it"
    ],
    "never": [
      "Sets the prices paid to farmers",
      "Excludes growers from buying programmes",
      "Makes credit or insurance decisions about farmers",
      "Shares farmer data without agreed consent"
    ]
  },
  "pricing": {
    "model": "Seasonal or annual subscription based on monitored hectares and sourcing regions.",
    "tiers": [
      {
        "name": "Season",
        "summary": "For one crop season.",
        "price": "₦4.5m",
        "unit": "/ season",
        "features": [
          "Up to 10,000 ha",
          "2 sourcing regions",
          "Supply and timing forecasts",
          "5 user seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Annual",
        "summary": "For processors and aggregators.",
        "price": "₦14m",
        "unit": "/ year",
        "features": [
          "Up to 60,000 ha",
          "Everything in Season",
          "Procurement scheduling",
          "All seasons included",
          "Unlimited seats"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Programme",
        "summary": "For state programmes and large sourcing networks.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Any area",
          "LGA-level dashboards",
          "Field app integrations",
          "Data-sharing frameworks"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Hauwa Balarabe",
      "role": "Founder/CEO",
      "initials": "HB",
      "bio": "Agribusiness operator with grain aggregation experience.",
      "focus": [
        "Grain aggregation",
        "Agribusiness",
        "Processor partnerships"
      ]
    },
    {
      "name": "Olumide Akinbode",
      "role": "Co-founder",
      "initials": "OA",
      "bio": "Agricultural economist focused on processor sourcing.",
      "focus": [
        "Agricultural economics",
        "Sourcing",
        "Markets"
      ]
    },
    {
      "name": "Nnenna Iheanacho",
      "role": "CTO",
      "initials": "NI",
      "bio": "Remote sensing scientist specialising in crop forecasting.",
      "focus": [
        "Remote sensing",
        "Crop forecasting",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Do farmers need smartphones?",
      "No. Field registrations can come from aggregators, extension agents or existing outgrower records. Satellite and weather data cover the rest."
    ],
    [
      "How early can it forecast?",
      "Early-season forecasts use planting dates and weather and carry wide ranges. They narrow as satellite observations of crop growth accumulate."
    ],
    [
      "Which crops are supported?",
      "The first models target rice, maize, sorghum and cassava. Other crops can be added with enough field and collection history."
    ],
    [
      "Is Farmivo a live product?",
      "Not yet. Farmivo is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Farmivo flags, ranks and explains. Procurement and sourcing managers review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Farmivo exists",
    "manifesto": "A smallholder’s harvest is only worth what someone will pay for it on the day it is ready. When buyers do not know what is coming, produce waits, spoils and loses value. We think better forecasts can connect fields and factories more fairly.",
    "purpose": "Help buyers plan sourcing from real field conditions, so harvests meet buyers and plants run steadily.",
    "why": "Post-harvest loss and mismatched supply hurt farmers and processors alike. Better forecasts mean trucks, storage and cash in the right place at the right time.",
    "stakesTitle": "What is lost between field and factory.",
    "stats": [
      {
        "value": 14,
        "prefix": "~",
        "suffix": "%",
        "label": "Share of the world’s food lost after harvest and before reaching retail.",
        "source": "FAO, State of Food and Agriculture 2019",
        "url": "https://www.fao.org/interactive/state-of-food-agriculture/2019/en"
      },
      {
        "value": 2.17,
        "dec": 2,
        "suffix": "m t",
        "label": "Estimated maize lost after harvest in Nigeria in 2020.",
        "source": "APHLIS",
        "url": "https://aphlis.net/en/data/tables/overview/NG/all-crops/2020"
      },
      {
        "value": 60,
        "prefix": "Up to ",
        "suffix": "%",
        "label": "Estimated post-harvest losses for tubers, fruits and vegetables in Nigeria.",
        "source": "BusinessDay",
        "url": "https://businessday.ng/news/article/nigerias-post-harvest-losses-surge-amid-covid-19-pandemic/"
      }
    ],
    "changeTitle": "From guesswork to a supply picture.",
    "before": [
      "Supply estimated from aggregator phone calls",
      "Truck bookings based on last year’s dates",
      "Crop stress noticed at harvest",
      "Plant capacity planned without supply visibility"
    ],
    "after": [
      "Forecasts updated weekly from field and satellite data",
      "Logistics timed to predicted harvest peaks",
      "Stress flagged weeks before harvest",
      "Procurement plans matched to forecast supply"
    ],
    "principlesTitle": "What we believe about agricultural data.",
    "principles": [
      [
        "Farmers come first",
        "Better planning should mean better outcomes for growers, too."
      ],
      [
        "Uncertainty in plain sight",
        "Forecasts show their range, and why it is wide or narrow."
      ],
      [
        "People decide",
        "Sourcing teams and agencies make the plans; Farmivo informs them."
      ],
      [
        "Consent for farmer data",
        "Farmer-level data is used only under agreed terms."
      ],
      [
        "Local knowledge counts",
        "Agents’ field notes sit alongside satellite signals."
      ],
      [
        "Useful early, better later",
        "Start with what exists; improve as data builds."
      ]
    ],
    "letterTitle": "Why we are building Farmivo.",
    "letter": [
      "Hauwa ran grain aggregation and spent every season juggling phone estimates from dozens of agents, booking trucks for harvests that arrived late and watching produce wait for buyers who had already filled their stores.",
      "Olumide studied how processors source and saw the cost of uncertainty on both sides of the market. Nnenna had spent years forecasting crops from satellites and knew the signal was there, if it could be made usable.",
      "Farmivo brings that signal to the people who plan sourcing, with honest uncertainty and decisions left in their hands, so that harvests and buyers meet more often."
    ],
    "visionTitle": "Where Farmivo is going.",
    "visionIntro": "From one crop and region to connected sourcing networks.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with processors."
      },
      {
        "stage": "Next",
        "title": "Season pilots",
        "text": "Back-testing forecasts against past seasons with early partners."
      },
      {
        "stage": "Then",
        "title": "Live forecasting",
        "text": "Weekly forecasts and procurement schedules during the season."
      },
      {
        "stage": "Later",
        "title": "Connected sourcing",
        "text": "Shared forecasts that help processors, aggregators and agencies plan together."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Sourcing forecast review",
    "subtitle": "Supply forecasts and alerts across fictional sourcing clusters for the coming harvest, for procurement review.",
    "itemNoun": "forecast",
    "itemNounPlural": "forecasts",
    "groupLabel": "sourcing cluster",
    "queueTitle": "Forecast alerts",
    "humanNote": "Forecasts inform sourcing plans. Procurement teams decide.",
    "decisions": {
      "confirm": "Adopt into plan",
      "dismiss": "Keep current plan",
      "escalate": "Refer to sourcing lead"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Head of Sourcing",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Procurement Manager",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Agronomy Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Finance Reviewer",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which forecasts need review first?",
      "Summarise the review status",
      "Show Kano cluster",
      "Explain FRM-603"
    ],
    "refuse": "\\b(price (to pay|we pay|for farmers)|pay (the )?farmers|cut (the )?price|exclude|drop (the|these) farmers|blacklist|loan|credit score)",
    "refuseText": "Farmivo can explain supply forecasts, but prices paid to farmers, exclusions from programmes and credit decisions belong to people under your sourcing policies.",
    "refuseExamples": [
      "What price should we pay farmers in Kano?",
      "Should we exclude growers in Jigawa?",
      "Give farmer F-102 a credit score"
    ]
  },
  "slug": "farmivo",
  "url": "https://www.farmivo.com",
  "email": "hello@farmivo.com",
  "stepsNote": "Farmivo recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every forecast is confirmed, dismissed or escalated by procurement and sourcing managers, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the field registrations, planting dates, satellite observations, weather data and collection history behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Farmivo would run in production: ingestion of field registrations, planting dates, satellite observations, weather data and collection history, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for field registrations, planting dates, satellite observations, weather data and collection history."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Crop-supply models combine satellite vegetation indices, weather and planting data with collection history to forecast volumes and arrival windows by region, with uncertainty bands."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon S3 geospatial archive",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Farmivo with your own team.",
    "text": "We are looking for a small number of early partners to shape Farmivo. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
