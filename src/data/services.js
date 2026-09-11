import {
  HardHat,
  Sofa,
  Hammer,
  Wrench,
  Home,
  Building2,
  Warehouse,
  Landmark,
  ChefHat,
  Tv,
  DoorClosed,
  Flame,
  Frame,
  Layers,
  Zap,
  Droplets,
  LayoutGrid,
  Umbrella,
  Sparkles,
  Paintbrush,
} from 'lucide-react'

/*
 * Central content for the 4 service pages.
 * Each page renders its `works` array as a dark zig-zag timeline
 * (alternating cards along a central connector line).
 */
export const services = [
  {
    slug: 'constructions',
    icon: HardHat,
    name: 'Constructions',
    short: 'Turnkey construction of homes, villas and buildings in Bangalore.',
    hero: {
      tagline: 'Build Right with VR Constructions',
      titleBefore: 'Home & Building',
      titleAccent: 'Construction',
      titleAfter: 'in Bangalore',
      desc: 'From foundation to handover — turnkey construction of independent houses, villas and commercial buildings with verified quality material and dedicated site engineers.',
      img: '/images/slide-1.jpg',
    },
    intro:
      'VR Constructions delivers turnkey construction projects across Bangalore with transparent cost-plus contracts, stage-wise payments and weekly progress updates. Our dedicated civil engineers supervise every stage — from excavation and structure to finishing and handover.',
    works: [
      {
        icon: Home,
        tag: 'We Build',
        title: 'Residential Construction',
        desc: 'Custom homes built on your plot with high standards, quality material and great value for money.',
        items: [
          'Independent houses',
          'Villas & duplex homes',
          'Individual floors',
          'Row houses',
        ],
      },
      {
        icon: Building2,
        tag: 'We Deliver',
        title: 'Commercial Construction',
        desc: 'Commercial spaces executed on schedule with clear stage-wise billing and dedicated supervision.',
        items: [
          'Office spaces',
          'Retail showrooms',
          'Apartment buildings',
          'Schools & institutions',
        ],
      },
      {
        icon: Warehouse,
        tag: 'We Erect',
        title: 'Warehouse Construction',
        desc: 'Large-span storage and industrial structures engineered for strength, safety and fast completion.',
        items: [
          'Warehouses & godowns',
          'Industrial sheds',
          'PEB structures',
          'Cold storage shells',
        ],
      },
      {
        icon: Landmark,
        tag: 'We Restore',
        title: 'O.S Works (Old Structures)',
        desc: 'Assessment, strengthening and rebuilding of old structures by experienced structural engineers.',
        items: [
          'Old structure assessment',
          'Structural strengthening',
          'Retrofitting & repairs',
          'Demolition & rebuild',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Consultation & Package', desc: 'Share your plot details and budget; we recommend the right package and contract model.' },
      { step: '02', title: 'Design & Approvals', desc: 'Floor plans, 3D elevation, structural drawings and plan sanction handled by our team.' },
      { step: '03', title: 'Construction & Tracking', desc: 'Stage-wise execution with weekly photo/video updates and transparent billing.' },
      { step: '04', title: 'Handover & Warranty', desc: 'On-time handover with up to 10 years structural warranty and snag-free support.' },
    ],
  },
  {
    slug: 'interiors',
    icon: Sofa,
    name: 'Interiors',
    short: 'Beautiful, functional interiors designed and executed end-to-end.',
    hero: {
      tagline: 'Spaces That Feel Like Home',
      titleBefore: 'Interior Design &',
      titleAccent: 'Execution',
      titleAfter: 'for Every Room',
      desc: 'Modular kitchens, wardrobes, TV units, pooja cabinets, false ceilings and complete home interiors — designed in 3D and executed with premium finishes by our in-house team.',
      img: '/images/slide-2.jpg',
    },
    intro:
      'Our interior team turns empty rooms into warm, functional spaces. From 3D design concepts and material selection to flawless on-site execution, we handle every element of your interior work — on time and within your budget.',
    works: [
      {
        icon: ChefHat,
        tag: 'We Craft',
        title: 'Kitchen',
        desc: 'Ergonomic modular kitchens with premium hardware, smart storage and stylish finishes.',
        items: [
          'L-shape, parallel & island layouts',
          'Quartz / granite counter tops',
          'Tall units & pull-out baskets',
          'Backsplash & under-cabinet lighting',
        ],
      },
      {
        icon: Tv,
        tag: 'We Craft',
        title: 'Wall Unit & TV Cabinet',
        desc: 'Designer wall units that anchor your living room — storage, display and entertainment in one.',
        items: [
          'Floating & floor-standing units',
          'Backlit TV panels',
          'Crockery & display units',
          'Concealed wiring & cable management',
        ],
      },
      {
        icon: DoorClosed,
        tag: 'We Install',
        title: 'Wardrobes & Loft',
        desc: 'Custom wardrobes maximising every inch — from floor to ceiling, including lofts.',
        items: [
          'Sliding & hinged shutters',
          'Loft storage on parapet',
          'Dresser & mirror integration',
          'Soft-close hinges & handles',
        ],
      },
      {
        icon: Flame,
        tag: 'We Craft',
        title: 'Pooja Cabinet',
        desc: 'Compact, elegant pooja units in wood and laminate — designed for your daily rituals.',
        items: [
          'Wall-mounted & floor models',
          'Carved / CNC jaali doors',
          'Marble or granite platform',
          'Integrated lighting',
        ],
      },
      {
        icon: Frame,
        tag: 'We Finish',
        title: 'Wall Paneling',
        desc: 'Premium wall paneling that adds texture, warmth and character to any room.',
        items: [
          'Fluted & CNC panels',
          'Wooden laminate paneling',
          'Fabric & PU finish panels',
          'TV feature walls',
        ],
      },
      {
        icon: Layers,
        tag: 'We Install',
        title: 'False Ceiling',
        desc: 'Gypsum and POP ceilings with layered lighting plans for every room.',
        items: [
          'Gypsum board ceilings',
          'POP & grid ceilings',
          'Cove, spot & profile lighting',
          'Ceiling repairs & renovation',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Requirement & Measurement', desc: 'Site visit, measurements and understanding your lifestyle, taste and budget.' },
      { step: '02', title: '3D Design & Quote', desc: 'Detailed 3D designs with material boards and a transparent itemised quotation.' },
      { step: '03', title: 'Production & Execution', desc: 'Precision factory-finished units installed by our supervised crews.' },
      { step: '04', title: 'Handover & Warranty', desc: 'Deep-cleaned, ready-to-use interiors with up to 10 years warranty on woodwork.' },
    ],
  },
  {
    slug: 'renovations',
    icon: Hammer,
    name: 'Renovations',
    short: 'Upgrade, restore and modernise your existing home.',
    hero: {
      tagline: 'Old Home, Brand-New Feel',
      titleBefore: 'Home Renovation &',
      titleAccent: 'Remodelling',
      titleAfter: 'Services',
      desc: 'All types of renovation work — kitchen and bathroom remodels, painting, structural repairs, flooring and complete home makeovers — with clean, on-schedule execution.',
      img: '/images/slide-3.jpg',
    },
    intro:
      'Whether it is a tired kitchen, a leaking bathroom or a full-home refresh, VR Constructions renovates with minimum disruption to your daily life. We assess the existing condition, propose practical upgrades, protect your furniture and finish on schedule.',
    works: [
      {
        icon: Sparkles,
        tag: 'All Types',
        title: 'Renovation Work',
        desc: 'We handle every type of renovation — from a single room refresh to a complete home makeover.',
        items: [
          'Kitchen & bathroom remodel',
          'Full-home makeover',
          'Room extensions & layout changes',
          'Rental / resale value upgrades',
        ],
      },
      {
        icon: Paintbrush,
        tag: 'We Paint',
        title: 'Painting — Interior & Exterior',
        desc: 'Putty-perfect preparation and premium paints for a finish that lasts for years.',
        items: [
          'Interior emulsion finishes',
          'Exterior weather-proof paint',
          'Putty, primer & crack filling',
          'Texture & designer finishes',
        ],
      },
      {
        icon: Hammer,
        tag: 'We Repair',
        title: 'Civil & Structural Repairs',
        desc: 'Cracks, leakages and weak structures repaired and strengthened by our civil team.',
        items: [
          'Crack & leakage treatment',
          'Terrace re-waterproofing',
          'Sunken slab & balcony repair',
          'RCC jacketing & strengthening',
        ],
      },
      {
        icon: LayoutGrid,
        tag: 'We Re-lay',
        title: 'Flooring & Re-tiling',
        desc: 'Old floors replaced and re-polished with minimal demolition waste.',
        items: [
          'Vitrified & ceramic re-tiling',
          'Marble / granite re-polishing',
          'Anti-skid bathroom flooring',
          'Wooden & vinyl flooring',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Condition Assessment', desc: 'Thorough inspection of structure, plumbing and electricals with photo documentation.' },
      { step: '02', title: 'Scope & Estimate', desc: 'Clear renovation scope, material options and a fixed stage-wise estimate.' },
      { step: '03', title: 'Dust-Controlled Execution', desc: 'Section-wise work with furniture protection and daily clean-up.' },
      { step: '04', title: 'Quality Check & Handover', desc: 'Snag list closure, deep cleaning and warranty on renovation work.' },
    ],
  },
  {
    slug: 'others',
    icon: Wrench,
    name: 'Others',
    short: 'Electricals, plumbing, tiles, fabrication, waterproofing and more.',
    hero: {
      tagline: 'Every Trade Under One Roof',
      titleBefore: 'Electrical, Plumbing &',
      titleAccent: 'Site Works',
      titleAfter: 'Services',
      desc: 'Electrical wiring, plumbing, tiles laying, carpentry, MS/SS/aluminium fabrication, false ceiling and waterproofing — skilled crews for every trade around your home.',
      img: '/images/slide-1.jpg',
    },
    intro:
      'Building and maintaining a home needs more than civil work. VR Constructions provides skilled teams for every supporting trade — electricals, plumbing, tiles, carpentry, fabrication and waterproofing — supervised with the same quality standards as our construction projects.',
    works: [
      {
        icon: Zap,
        tag: 'We Wire',
        title: 'Electrical Works',
        desc: 'Safe, certified electrical work for new homes and renovations.',
        items: [
          'House wiring & rewiring',
          'DB, MCB & earthing',
          'Light & fan points',
          'Inverter & UPS wiring',
        ],
      },
      {
        icon: Droplets,
        tag: 'We Plumb',
        title: 'Plumbing Works',
        desc: 'Complete plumbing — from sump to tap — with leak-proof workmanship.',
        items: [
          'CPVC / UPVC pipe lines',
          'Bathroom sanitary fittings',
          'Sump & overhead tanks',
          'Drainage & rainwater lines',
        ],
      },
      {
        icon: LayoutGrid,
        tag: 'We Fix',
        title: 'Tiles Laying',
        desc: 'Precision laying and polishing for a mirror-smooth finish.',
        items: [
          'Marble laying & polishing',
          'Granite laying & polishing',
          'Vitrified & ceramic tiles',
          'Anti-skid bathroom tiles',
        ],
      },
      {
        icon: Hammer,
        tag: 'We Craft',
        title: 'Carpentry Works',
        desc: 'Site carpentry for doors, windows and custom woodwork.',
        items: [
          'Doors & windows',
          'Custom furniture',
          'Repairs & refits',
          'Site-made woodwork',
        ],
      },
      {
        icon: Wrench,
        tag: 'We Fabricate',
        title: 'Fabrication — MS / SS / Aluminium',
        desc: 'Metal fabrication for safety, style and structure.',
        items: [
          'M.S — grills, gates & stairs',
          'S.S — railings & handrails',
          'Aluminium doors & windows',
          'Structural fabrication',
        ],
      },
      {
        icon: Umbrella,
        tag: 'We Protect',
        title: 'Water Proofing',
        desc: 'Long-lasting waterproofing that keeps leakages out for good.',
        items: [
          'Terrace & roof waterproofing',
          'Bathrooms & kitchens',
          'Sumps & lift pits',
          'Expansion joints',
        ],
      },
    ],
    process: [
      { step: '01', title: 'Requirement Discussion', desc: 'Tell us the trade and scope — wiring, plumbing, tiles, fabrication or waterproofing.' },
      { step: '02', title: 'Site Visit & Estimate', desc: 'Our supervisor measures, lists materials and shares a transparent estimate.' },
      { step: '03', title: 'Skilled Execution', desc: 'Trained crews complete the work with supervision and quality checks.' },
      { step: '04', title: 'Testing & Handover', desc: 'Testing, snag closure and warranty on workmanship.' },
    ],
  },
]

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug)
