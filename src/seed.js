// Fictional sample data for the Farmivo prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Garba Lawan",
      "role": "Head of Sourcing"
    },
    {
      "name": "Blessing Okafor",
      "role": "Procurement Manager"
    },
    {
      "name": "Sani Abdullahi",
      "role": "Procurement Manager"
    },
    {
      "name": "Dr Funke Alabi",
      "role": "Agronomy Analyst"
    },
    {
      "name": "Emeka Chukwu",
      "role": "Finance Reviewer"
    }
  ],
  "items": [
    {
      "id": "FRM-601",
      "title": "Paddy supply below plan",
      "subtitle": "Rice · 3,800 ha registered",
      "group": "Kano cluster",
      "metrics": [
        [
          "Plan",
          "5,000 t"
        ],
        [
          "Forecast",
          "4,100 ± 600 t"
        ],
        [
          "Gap",
          "−18%"
        ],
        [
          "Peak harvest",
          "Weeks 44–46"
        ]
      ],
      "flags": [
        {
          "label": "Supply shortfall",
          "severity": "high",
          "confidence": 0.79,
          "explanation": "Late rains delayed planting on about 40% of registered fields, and satellite greenness is below the five-year average for the stage of season.",
          "evidence": [
            [
              "Planting delay",
              "40% of fields > 3 weeks",
              "Field registrations"
            ],
            [
              "Vegetation index",
              "−12% vs 5-yr avg",
              "Satellite (Sentinel-2)"
            ],
            [
              "Rainfall",
              "−22% Jun–Jul",
              "Weather data"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-602",
      "title": "Harvest peak shifting later",
      "subtitle": "Rice · aggregation point AP-4",
      "group": "Jigawa cluster",
      "metrics": [
        [
          "Planned trucks",
          "Week 42"
        ],
        [
          "Forecast peak",
          "Week 45"
        ],
        [
          "Shift",
          "+3 weeks"
        ],
        [
          "Trucks booked",
          "12"
        ]
      ],
      "flags": [
        {
          "label": "Timing shift",
          "severity": "medium",
          "confidence": 0.74,
          "explanation": "Crop growth curves suggest harvest will peak three weeks later than the truck booking. Holding bookings would leave trucks idle.",
          "evidence": [
            [
              "Growth stage",
              "Booting, not heading",
              "Satellite time series"
            ],
            [
              "Planting dates",
              "Median 18 Jul",
              "Field registrations"
            ],
            [
              "Truck booking",
              "Week 42",
              "Logistics plan"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-603",
      "title": "Crop stress detected",
      "subtitle": "Maize · 620 ha, northern blocks",
      "group": "Kaduna cluster",
      "metrics": [
        [
          "Area affected",
          "620 ha"
        ],
        [
          "Stress signal",
          "Moderate"
        ],
        [
          "Dry spell",
          "19 days"
        ],
        [
          "Volume at risk",
          "~900 t"
        ]
      ],
      "flags": [
        {
          "label": "Crop stress",
          "severity": "high",
          "confidence": 0.68,
          "explanation": "Vegetation indices dropped across 620 ha after a 19-day dry spell. Extension visits could confirm whether yields are affected. Cloud cover reduced observations by a third.",
          "evidence": [
            [
              "Vegetation change",
              "−18% in 3 weeks",
              "Satellite time series"
            ],
            [
              "Dry spell",
              "19 days",
              "Weather data"
            ],
            [
              "Cloud-free images",
              "4 of 6",
              "Satellite metadata"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-604",
      "title": "Supply above mill capacity",
      "subtitle": "Rice · peak weeks",
      "group": "Niger cluster",
      "metrics": [
        [
          "Forecast peak",
          "1,450 t / week"
        ],
        [
          "Mill intake",
          "1,100 t / week"
        ],
        [
          "Excess",
          "350 t / week"
        ],
        [
          "Storage free",
          "600 t"
        ]
      ],
      "flags": [
        {
          "label": "Capacity mismatch",
          "severity": "medium",
          "confidence": 0.71,
          "explanation": "For three peak weeks forecast supply exceeds intake capacity. Without extra storage or a staggered buying window, paddy may wait in the field.",
          "evidence": [
            [
              "Forecast weekly supply",
              "1,450 t",
              "Supply model"
            ],
            [
              "Mill intake capacity",
              "1,100 t",
              "Plant settings"
            ],
            [
              "Storage available",
              "600 t",
              "Warehouse records"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-605",
      "title": "Cassava harvest window opening",
      "subtitle": "Cassava · 1,200 ha",
      "group": "Ogun cluster",
      "metrics": [
        [
          "Mature area",
          "1,200 ha"
        ],
        [
          "Forecast roots",
          "14,000 ± 2,500 t"
        ],
        [
          "Spoilage window",
          "48–72h after harvest"
        ],
        [
          "Factory demand",
          "900 t / week"
        ]
      ],
      "flags": [
        {
          "label": "Scheduling needed",
          "severity": "low",
          "confidence": 0.77,
          "explanation": "Most registered fields reach 12 months this month. Staggering harvests by block would match factory intake and limit spoilage.",
          "evidence": [
            [
              "Field age",
              "12+ months on 1,200 ha",
              "Field registrations"
            ],
            [
              "Factory intake",
              "900 t / week",
              "Plant settings"
            ],
            [
              "Past spoilage at peak",
              "11%",
              "Collection history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-606",
      "title": "Registration data gaps",
      "subtitle": "Sorghum · 480 ha missing planting dates",
      "group": "Kano cluster",
      "metrics": [
        [
          "Fields affected",
          "214"
        ],
        [
          "Area",
          "480 ha"
        ],
        [
          "Missing field",
          "Planting date"
        ],
        [
          "Forecast range",
          "Widened ±35%"
        ]
      ],
      "flags": [
        {
          "label": "Data gap",
          "severity": "low",
          "confidence": 0.62,
          "explanation": "Missing planting dates widen the forecast range for this area. Agents could confirm dates on their next visit.",
          "evidence": [
            [
              "Missing planting dates",
              "214 fields",
              "Field registrations"
            ],
            [
              "Forecast range",
              "±35% (vs ±15%)",
              "Supply model"
            ],
            [
              "Agents assigned",
              "3",
              "Field team roster"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-607",
      "title": "Flood risk on lowland fields",
      "subtitle": "Rice · 300 ha along river",
      "group": "Niger cluster",
      "metrics": [
        [
          "Area at risk",
          "300 ha"
        ],
        [
          "River level",
          "Rising"
        ],
        [
          "Harvest stage",
          "2–3 weeks out"
        ],
        [
          "Volume at risk",
          "~1,050 t"
        ]
      ],
      "flags": [
        {
          "label": "Weather risk",
          "severity": "medium",
          "confidence": 0.6,
          "explanation": "Lowland fields near the river may flood before harvest if forecast rains materialise. Early harvest or contingency sourcing could be considered.",
          "evidence": [
            [
              "Fields in floodplain",
              "300 ha",
              "Terrain model"
            ],
            [
              "Rainfall forecast",
              "Heavy, next 10 days",
              "Weather data"
            ],
            [
              "2024 flood loss here",
              "~30%",
              "Collection history"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-608",
      "title": "Collection rate falling",
      "subtitle": "Maize · aggregation point AP-9",
      "group": "Kaduna cluster",
      "metrics": [
        [
          "Expected (to date)",
          "1,200 t"
        ],
        [
          "Collected",
          "740 t"
        ],
        [
          "Shortfall",
          "−38%"
        ],
        [
          "Competing buyers",
          "Reported"
        ]
      ],
      "flags": [
        {
          "label": "Collection shortfall",
          "severity": "medium",
          "confidence": 0.65,
          "explanation": "Collections lag forecast harvest. Field notes mention other buyers active nearby; the gap may be side-selling rather than lower yields.",
          "evidence": [
            [
              "Forecast harvested",
              "1,200 t",
              "Supply model"
            ],
            [
              "Collected",
              "740 t",
              "Collection records"
            ],
            [
              "Agent notes",
              "4 mention other buyers",
              "Field app"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "FRM-609",
      "title": "Supply on track",
      "subtitle": "Rice · 2,100 ha",
      "group": "Jigawa cluster",
      "metrics": [
        [
          "Plan",
          "2,600 t"
        ],
        [
          "Forecast",
          "2,650 ± 300 t"
        ],
        [
          "Peak",
          "Week 45"
        ],
        [
          "Status",
          "On track"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
