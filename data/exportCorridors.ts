export interface ExportCorridor {
  country: string;
  flag: string;
  ports: string;
  transitTime: string;
  description: string;
  modes: string[];
}

export const EXPORT_CORRIDORS: ExportCorridor[] = [
  {
    country: 'Malaysia Corridors',
    flag: '🇲🇾',
    ports: 'Port Klang & Penang Port',
    transitTime: '5 – 7 Days (Ocean Freight)',
    description: 'Direct regular vessel sailings from Tuticorin (VOC Port) & Chennai with rapid discharge turnaround.',
    modes: ['Reefer Sea Container', 'Express Air Cargo via MAA'],
  },
  {
    country: 'Singapore Corridors',
    flag: '🇸🇬',
    ports: 'Jurong Port & Pasir Panjang / Changi Air Cargo',
    transitTime: '4 – 6 Days (Ocean) / 24hrs (Air)',
    description: 'Premium grade perishables, Cavendish bananas, drumsticks, and leafy herbs shipped on high-priority routes.',
    modes: ['Reefer Sea Container', 'Same-Day Air Freight'],
  },
  {
    country: 'Middle East / GCC Corridors',
    flag: '🇦🇪',
    ports: 'Jebel Ali (Dubai), Hamad (Qatar), Dammam & Jeddah (KSA)',
    transitTime: '4 – 8 Days (West Coast / Tuticorin feeder)',
    description: 'High-cube refrigerated container supply chains for red onions, pomegranates, bananas, and semi-husked coconuts.',
    modes: ['40ft High-Cube Reefer', 'Air Cargo Direct'],
  },
  {
    country: 'Europe & UK Corridors',
    flag: '🇪🇺',
    ports: 'Rotterdam & London Gateway',
    transitTime: '18 – 24 Days (Ocean) / 36hrs (Air)',
    description: 'Strict phytosanitary compliant, Global G.A.P. sourced seasonal specialties, fresh mangoes, and exotic vegetables.',
    modes: ['Controlled Atmosphere Reefers', 'Scheduled Air Cargo'],
  },
];

export const INCOTERMS = [
  {
    code: 'FOB',
    title: 'Free On Board',
    sub: 'Tuticorin / Chennai Seaport',
    description: 'We handle inland farm sourcing, packhouse grading, export boxing, phytosanitary clearance, and loading aboard buyer\'s nominated vessel.',
    points: [
      'Ideal for buyers holding direct carrier ocean contracts',
      'Full Indian export customs & terminal handling handled by Santal Nexus',
    ],
  },
  {
    code: 'CIF',
    title: 'Cost, Insurance & Freight',
    sub: 'Delivered to Buyer\'s Discharge Port',
    description: 'Turnkey landed solution. We book ocean freight, attach complete marine insurance, and monitor cold-chain temperatures until vessel arrival.',
    points: [
      'Hassle-free predictable landed cost for international importers',
      'Comprehensive Institute Cargo Clauses (A) all-risk insurance policy attached',
    ],
  },
  {
    code: 'CFR',
    title: 'Cost and Freight',
    sub: 'Port Klang, Singapore, Jebel Ali, Hamad',
    description: 'We manage full produce procurement, packing, and ocean freight costs up to the discharge port, while buyer coordinates local cargo insurance.',
    points: [
      'Highly competitive container freight rates with tier-one shipping lines',
      'Flexible payment terms through Irrevocable Letter of Credit (LC) / TT',
    ],
  },
];

export const REEFER_SPECS = [
  {
    title: '40ft High-Cube Reefer Container',
    capacity: 'Approx. 20 – 24 Metric Tonnes',
    details: 'Equipped with dual microprocessors, de-humidification controls, fresh air exchange, and continuous temperature data loggers.',
    example: 'Ideal for ~1,540 boxes of Cavendish Bananas or bulk palletized produce.',
  },
  {
    title: '20ft Reefer Container',
    capacity: 'Approx. 10 – 12 Metric Tonnes',
    details: 'Compact cold chain unit optimized for mixed vegetable consignments, green chillies, moringa, and trial commercial orders.',
    example: 'Popular for specialized regional produce shipments.',
  },
  {
    title: 'Express Air Freight Perishables',
    capacity: '500 kg to 5 Metric Tonnes',
    details: '24 to 36-hour farm-to-table transit via Madurai International (IXM) or Chennai International (MAA) cargo terminals.',
    example: 'Dedicated to temperature-sensitive curry leaves, coriander, mint, and fresh chillies.',
  },
];
