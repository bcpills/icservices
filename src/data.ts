import { ServiceItem, BeforeAfterItem, ServiceTown } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'landscaping',
    number: '01',
    title: 'Coastal Turf & Grounds Management',
    tagline: 'Tailored for sandy river loam, high humidity, and brackish air.',
    description: 'Complete coastal estate groundskeeping designed specifically for eastern North Carolina microclimates. We specialize in salt-hardy turf aeration, sharp edging, longleaf pine straw tucking, cedar mulch installation, and embankment bank stabilization along tidal creeks and river bluffs.',
    capabilities: [
      'Warm-season turf care (Bermuda, St. Augustine, Centipede, Zoysia)',
      'Crisp bed edging and double-shredded hardwood or longleaf pine straw',
      'Tidal shoreline & ditch bank brush clearing and erosion check',
      'Native coastal shrub trimming, crape myrtle maintenance, and pruning',
      'Spring green-up feeding, fall scalping, and pre-emergent weed defenses'
    ],
    equipment: [
      'Commercial grade 60" zero-turn mowers with mulching baffles',
      'High-velocity commercial leaf blowers & bed re-definers',
      'Stihl professional articulating pole pruners & brushcutters'
    ],
    typicalTime: 'Weekly or Bi-weekly recurring routes'
  },
  {
    id: 'pressure-washing',
    number: '02',
    title: 'High-Flow Pressure & Soft Washing',
    tagline: 'Eradicate black river mildew, salt crust, and red clay stains without damaging surfaces.',
    description: 'Pamlico humidity and maritime brackish air cause rapid mold and algae accumulation on coastal siding, concrete, and roofs. We utilize dual-pressure delivery: gentle chemical soft-washing for delicate coastal vinyl, HardiePlank, and cedar shake, plus high-flow rotary surface cleaners for driveways, brick pavers, and seawalls.',
    capabilities: [
      'Low-pressure chemical soft washing for siding, soffits, and gutters',
      'Rotary surface flat-work cleaning for aggregate concrete & stamped pavers',
      'Black tannin, iron river stain, and salt spray residue removal',
      'Gutter brightening and interior downspout flush-out',
      'Eco-safe biodegradable surfactants safe for turf, pets, and river run-off'
    ],
    equipment: [
      '4,000 PSI / 4.0 GPM commercial Honda-powered pressure rig',
      '20" whisper wash flat-surface rotary cleaning head',
      'Dedicated downstream low-pressure soft wash chemical injection system'
    ],
    typicalTime: 'Same-day completion (2–5 hours)'
  },
  {
    id: 'deck-dock',
    number: '03',
    title: 'Docks, Piers & Deck Restoration',
    tagline: 'Safeguard your waterfront timber against river rot, UV fading, and marine slip hazards.',
    description: 'From Pamlico River boardwalks to multi-tier backyard decks, eastern NC sun and river moisture quickly degrade pressure-treated pine and composite boards. We provide systematic marine cleaning, loose board fastening, splinter sanding, structural checks, and penetrating oil-based marine stains.',
    capabilities: [
      'Deep cleaning to remove green slime, river algae, and slippery film',
      'Rotted stringer and deck plank replacement with marine-grade fasteners',
      'Handrail stability reinforcement and dock cleat re-anchoring',
      'Penetrating semi-transparent oil stain application (resistant to salt and sun)',
      'Boat slip boardwalk maintenance and seawall cap wash & seal'
    ],
    equipment: [
      'Variable pressure marine timber wands (prevents wood gouging)',
      'Pneumatic decking nailers & 316 stainless-steel marine screws',
      'Airless industrial sprayers with back-brushing applicator units'
    ],
    typicalTime: '1–2 days (cleaning followed by cure and staining)'
  },
  {
    id: 'boat-cleaning',
    number: '04',
    title: 'Mobile Dockside Boat Detailing',
    tagline: 'We come straight to your private dock, boat lift, marina slip, or dry storage trailer.',
    description: 'Skip the hassle of hauling your vessel to a marina yard. Our mobile marine detailing crew brings freshwater tanks, marine-grade compounds, and UV protectants directly to your dock. We clean center consoles, skiffs, bay boats, pontoons, and cruisers after long days on the sound.',
    capabilities: [
      'Hull waterline scum line, river stain, and salt crust removal',
      'Gelcoat one-step compound, high-gloss machine polish, and marine polymer wax',
      'Non-skid deck scrubbing with marine-approved biodegradable cleaners',
      'Marine vinyl upholstery deep-clean and UV-inhibitor conditioning',
      'T-top aluminum polish, eisenglass clarity restoration, and canvas wash'
    ],
    equipment: [
      'RUPES & Flex marine rotary and dual-action polishers',
      'High-foaming marine wash cannons with non-abrasive soft brushes',
      'Onboard spot-free deionized water rinse systems'
    ],
    typicalTime: '3–6 hours dockside'
  },
  {
    id: 'labor',
    number: '05',
    title: 'On-Demand Skilled Labor & Estate Work',
    tagline: 'Strong, reliable local labor for heavy lifting, storm preparations, and property clearing.',
    description: 'When you need dependable, hardworking hands for jobs that do not fit a neat box, our vetted crew steps in. Whether you need pre-hurricane patio furniture stowing and storm shutters secured, post-gale fallen pine limbs cleared, or bulk materials hauled to the county transfer station, we arrive ready to work.',
    capabilities: [
      'Hurricane & tropical storm prep: boarding up, furniture tie-down, dock prep',
      'Post-storm emergency tree limb chainsawing and debris hauling',
      'Bulk material spreading: river rock, gravel, topsoil, and pine straw loads',
      'Dock box assembly, kayak rack installs, and outdoor furniture staging',
      'Property cleanouts, shed decluttering, and dump trailer hauling'
    ],
    equipment: [
      '14-foot hydraulic dump trailer (handles up to 10,000 lbs debris)',
      'Commercial Stihl chainsaws, pole saws, and log cant hooks',
      'Heavy-duty dollies, rigging straps, and landscape wheelbarrows'
    ],
    typicalTime: 'Hourly, half-day (4h), or full-day (8h)'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'dock-revival',
    title: 'Deep Creek Private Pier & Slip Restoration',
    category: 'Deck & Dock Restoration',
    location: 'Bath, NC (Bath Creek)',
    description: '450 sq ft weathered pine dock covered in heavy river algae, black mildew, and splintered grain restored with gentle rot-wash, fastener tightening, and two coats of honey teak marine penetrant.',
    beforeStats: 'Heavy black algae, 7 years weathered, hazardous slippery surface',
    afterStats: 'Restored rich cedar grain, 100% slip-safe, sealed for 3+ years',
    theme: 'wood'
  },
  {
    id: 'waterfront-siding',
    title: 'Pamlico River Estate Soft-Wash & Flatwork',
    category: 'Pressure Washing',
    location: 'Washington, NC (River Road)',
    description: 'Two-story waterfront residence with north-facing green lichen, black roof streak runoff, and a 1,200 sq ft salt-pitted brick paver patio.',
    beforeStats: 'Green algae bloom on vinyl, moldy soffits, stained pavers',
    afterStats: 'Pristine bright siding, zero chemical burn to hydrangeas, gleaming stone',
    theme: 'siding'
  },
  {
    id: 'boat-hull',
    title: '26ft Regulator Center Console Hull Restoration',
    category: 'Boat Detailing',
    location: 'Belhaven Marina & Private Slip',
    description: 'Heavy brackish waterline brown river stain and chalky oxidized navy gelcoat brought back to mirror gloss with rotary wool compound and ceramic sealant.',
    beforeStats: 'Severe tannin waterline line, chalky oxidized gelcoat',
    afterStats: 'High-gloss mirror finish, hydrophobic water beading, clean non-skid',
    theme: 'boat'
  },
  {
    id: 'coastal-grounds',
    title: 'Blounts Creek Shoreline Grounds Transformation',
    category: 'Landscaping & Labor',
    location: 'Blounts Creek, NC',
    description: 'Overgrown briars, downed pine limbs, and unkept shoreline slope cleared, re-graded, edged, and dressed with 40 bales of fresh longleaf pine straw.',
    beforeStats: 'Overgrown brush, fallen branches, lost shoreline view',
    afterStats: 'Defined lawn perimeter, open water vista, clean pine straw beds',
    theme: 'lawn'
  }
];

export const SERVICE_TOWNS: ServiceTown[] = [
  {
    name: 'Washington (Historic & Waterfront)',
    county: 'Beaufort County',
    waterway: 'Pamlico River',
    schedule: 'Mon–Sat (Daily Coverage)',
    responseTime: '< 24 Hours'
  },
  {
    name: 'Bath & Bath Creek',
    county: 'Beaufort County',
    waterway: 'Bath Creek & Pamlico River',
    schedule: 'Mon, Wed, Fri & Emergency',
    responseTime: '< 24 Hours'
  },
  {
    name: 'Belhaven & Pungo River',
    county: 'Beaufort County',
    waterway: 'Pungo River & Pantego Creek',
    schedule: 'Tue, Thu, Sat',
    responseTime: '24–48 Hours'
  },
  {
    name: 'New Bern & Trent Woods',
    county: 'Craven County',
    waterway: 'Neuse & Trent Rivers',
    schedule: 'Tue, Thu, Fri',
    responseTime: '24–48 Hours'
  },
  {
    name: 'Oriental & Minnesott Beach',
    county: 'Pamlico County',
    waterway: 'Neuse River & Greens Creek',
    schedule: 'Wed & Saturday Route',
    responseTime: '24–48 Hours'
  },
  {
    name: 'Chocowinity & Whichards Beach',
    county: 'Beaufort County',
    waterway: 'Pamlico River South Shore',
    schedule: 'Mon–Fri (Daily Coverage)',
    responseTime: '< 24 Hours'
  },
  {
    name: 'Edenton & Albemarle Sound',
    county: 'Chowan County',
    waterway: 'Albemarle Sound & Chowan River',
    schedule: 'Weekly Scheduled Route',
    responseTime: '48 Hours'
  },
  {
    name: 'Swan Quarter & Engelhard',
    county: 'Hyde County',
    waterway: 'Pamlico Sound',
    schedule: 'By Appointment / Storm Support',
    responseTime: '48 Hours'
  }
];

export const SEASONAL_PACKAGES = [
  {
    name: 'Coastal Spring Wake-Up',
    season: 'March – May',
    focus: 'Property & Vessel De-Winterization',
    popular: true,
    features: [
      'Complete house exterior soft wash & spider web clearing',
      'Dock & deck safety pressure wash to eliminate winter slickness',
      'First lawn scalp, deep edge, and 25 bales of fresh pine straw',
      'Boat de-winterizing wash, battery check, and waterline polish',
      'Winter storm debris haul-away (up to 1 trailer load)'
    ]
  },
  {
    name: 'Peak Boating Summer Care',
    season: 'June – August',
    focus: 'Recurring Maintenance & Dockside Turnaround',
    popular: false,
    features: [
      'Bi-weekly precision turf mowing, trimming, and blowing',
      'Monthly dockside boat washdown and deck non-skid scrub',
      'Dock lighting, cleat, and board safety inspections',
      'High-traffic patio & pool deck pressure rinses',
      'Priority emergency service before summer weekend holidays'
    ]
  },
  {
    name: 'Storm Readiness & Post-Gale Haul',
    season: 'August – November',
    focus: 'Hurricane Prep & Emergency Labor',
    popular: false,
    features: [
      'Pre-storm outdoor furniture stowing & dock tie-off reinforcement',
      'Storm shutter placement & vulnerable window boarding',
      'Immediate priority post-storm chainsaw clearing & pathway opening',
      'Flood mud silt removal from docks and driveways',
      'Fast-track dump trailer hauling for fallen trees and brush'
    ]
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Living right on the Pamlico River in Bath, our docks and decks turn pitch black with mildew every single year. Inner Banks Landscaping came out with their surface cleaner and restored the wood without eating up the grain. They even cleaned our 23ft Grady-White at the lift. Honest work and great communication.",
    author: "Capt. Mark Halloway",
    title: "Waterfront Homeowner & Angler",
    location: "Bath Creek, NC",
    service: "Deck Restoration & Boat Detailing"
  },
  {
    quote: "Finding dependable, hardworking labor in eastern North Carolina used to be a struggle until we hired this crew. They edged 1.5 acres of Centipede grass, tucked fresh pine straw around all our crape myrtles, and power-washed the brick circular driveway in one afternoon.",
    author: "Eleanor & David Vance",
    title: "Estate Owners",
    location: "River Road, Washington, NC",
    service: "Estate Landscaping & Pressure Washing"
  },
  {
    quote: "When Hurricane winds brought down two massive loblolly pine boughs across our access road and boat ramp, they were on site with chainsaws and a hydraulic dump trailer before insurance even returned my call. Courteous, punctual, and exceptionally strong crew.",
    author: "Richard Sterling",
    title: "Commercial Marina Tenant & Homeowner",
    location: "Belhaven, NC",
    service: "Emergency Storm Clearing & Skilled Labor"
  }
];
