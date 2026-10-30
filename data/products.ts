export interface ProduceItem {
  id: string;
  name: string;
  category: 'vegetables' | 'fruits' | 'greens' | 'exotic';
  categoryLabel: string;
  spec: string;
  description: string;
  availability: string;
  isYearRound: boolean;
  packing: string;
  image?: string;
  origin?: string;
  temperature?: string;
}

export const PRODUCE_CATEGORIES = [
  {
    id: 'vegetables',
    title: 'Vegetables',
    subtitle: 'Staples sourced directly from Madurai, Dindigul, and Tamil Nadu farm clusters.',
    image: '/assets/images/category-vegetables.webp',
    imageFallback: '/assets/images/category-vegetables.jpg',
  },
  {
    id: 'fruits',
    title: 'Fruits',
    subtitle: 'Naturally sweet, orchard-picked fruits packed to international receiving protocols.',
    image: '/assets/images/category-fruits.webp',
    imageFallback: '/assets/images/category-fruits.jpg',
  },
  {
    id: 'greens',
    title: 'Leafy Greens',
    subtitle: 'Rapid dispatch air-cargo greens pre-cooled immediately after harvest.',
    image: '/assets/images/category-leafy-greens.webp',
    imageFallback: '/assets/images/category-leafy-greens.jpg',
  },
  {
    id: 'exotic',
    title: 'Exotic Produce',
    subtitle: 'Tailored procurement of South Indian heritage vegetables aligned with global diaspora markets.',
    image: '/assets/images/category-exotic.webp',
    imageFallback: '/assets/images/category-exotic.jpg',
  },
];

export const PRODUCE_ITEMS: ProduceItem[] = [
  // Commercial Vegetables
  {
    id: 'red-onions',
    name: 'Red Onions & Shallots',
    category: 'vegetables',
    categoryLabel: 'Commercial Vegetables',
    spec: '30mm – 65mm Grades',
    description: 'Crisp, pungency-tested Indian red onions and small sambar shallots. Graded for skin tightness and low moisture content.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '5kg, 10kg, 25kg red mesh bags',
    origin: 'Dindigul & Madurai, Tamil Nadu',
    temperature: '+2°C to +4°C (Well ventilated)',
  },
  {
    id: 'green-chillies',
    name: 'Green Chillies',
    category: 'vegetables',
    categoryLabel: 'Commercial Vegetables',
    spec: 'G4 / Bullet / Teja Varieties',
    description: 'Bright green, fresh stem-intact chillies sorted for uniform length and heat profile. Free from blemishes and spray residues.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '4kg / 5kg Corrugated Air-Vent Cartons',
    origin: 'Theni & Madurai, Tamil Nadu',
    temperature: '+8°C to +10°C',
  },
  {
    id: 'fresh-tomatoes',
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    categoryLabel: 'Commercial Vegetables',
    spec: 'Roma & Hybrid Table Varieties',
    description: 'Firm, semi-ripe or table-ripe tomatoes harvest-selected for extended transit shelf life and cooking consistency.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '10kg & 15kg Heavy-duty Crates / Boxes',
    origin: 'Dindigul & Salem, Tamil Nadu',
    temperature: '+10°C to +12°C',
  },
  {
    id: 'drumsticks',
    name: 'Drumsticks (Moringa)',
    category: 'vegetables',
    categoryLabel: 'Commercial Vegetables',
    spec: 'Grade A Export Format (35-45cm)',
    description: 'Tender, seed-soft moringa pods cut to uniform length. Premium ventilated box packing for overseas air cargo and reefer sea consignments.',
    availability: 'Peak: Oct – Jun',
    isYearRound: false,
    packing: '5kg Telescopic Ventilated Cartons',
    origin: 'Madurai & Ottanchathiram, Tamil Nadu',
    temperature: '+10°C to +12°C',
  },

  // Tropical Fruits
  {
    id: 'cavendish-bananas',
    name: 'Cavendish Bananas',
    category: 'fruits',
    categoryLabel: 'Tropical Fruits',
    spec: 'G9 Variety / Hands & Clusters (39-46mm)',
    description: 'Clean calibration, blemish-free green bananas treated for ripening control and packed in high-density export boxes with ethylene management.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '7kg & 13kg Telescopic Corrugated CFB',
    origin: 'Theni & Tiruchirappalli, Tamil Nadu',
    temperature: '+13.5°C (Controlled Air)',
  },
  {
    id: 'mangoes',
    name: 'South Indian Mangoes',
    category: 'fruits',
    categoryLabel: 'Tropical Fruits',
    spec: 'Alphonso / Banganapalli / Totapuri',
    description: 'Sun-ripened, hot water treated or vapour heat treated per import nation phytosanitary mandates. Fragrant, sweet, and uniform in size.',
    availability: 'Seasonal: Apr – Jul',
    isYearRound: false,
    packing: '3kg & 5kg Partitioned Foam-Lined Boxes',
    origin: 'Krishnagiri & Madurai, Tamil Nadu',
    temperature: '+11°C to +13°C',
  },
  {
    id: 'pomegranates',
    name: 'Fresh Pomegranates',
    category: 'fruits',
    categoryLabel: 'Tropical Fruits',
    spec: 'Bhagwa Red Arils (200g–400g per piece)',
    description: 'Deep red glowing skin with sweet, soft-seeded ruby arils. Graded piece-by-piece and packed in individual foam protective nets.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '3.5kg – 4kg Master Cartons with dividers',
    origin: 'Maharashtra & Tamil Nadu Belts',
    temperature: '+5°C to +7°C',
  },
  {
    id: 'coconuts',
    name: 'Semi-Husked Coconuts',
    category: 'fruits',
    categoryLabel: 'Tropical Fruits',
    spec: '550g – 650g Average Weight',
    description: 'Cleaned, defibered mature coconuts with rich water content and thick meat. Highly durable for maritime container transit.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '13kg – 14kg PP Mesh Sacks (~25 nuts/bag)',
    origin: 'Pollachi & Madurai, Tamil Nadu',
    temperature: '+12°C to +15°C Ambient Controlled',
  },

  // Leafy Greens & Herbs
  {
    id: 'curry-leaves',
    name: 'Curry Leaves (Export Grade)',
    category: 'greens',
    categoryLabel: 'Leafy Greens & Herbs',
    spec: 'De-stemmed / Bundled Quality',
    description: 'Aromatic dark green foliage washed, dry-treated, and vacuum pre-cooled for zero yellowing during rapid air transit.',
    availability: 'Weekly Air Shipments',
    isYearRound: true,
    packing: '2kg & 5kg Thermocol / Insulated Styrofoam Boxes',
    origin: 'Madurai & Karur, Tamil Nadu',
    temperature: '+4°C to +6°C (Pre-cooled)',
  },
  {
    id: 'coriander-mint',
    name: 'Fresh Coriander & Mint',
    category: 'greens',
    categoryLabel: 'Leafy Greens & Herbs',
    spec: 'Root Washed / Moisture-Controlled',
    description: 'Crisp, highly fragrant bunches sorted for clean stems and packed in perforated poly-liners within chilled boxes.',
    availability: 'Year-Round',
    isYearRound: true,
    packing: '5kg Perforated Chilled Boxes with ice-packs',
    origin: 'Dindigul & Nilgiris, Tamil Nadu',
    temperature: '+2°C to +4°C',
  },
  {
    id: 'lettuce-cabbage',
    name: 'Crisp Lettuce & Cabbage',
    category: 'greens',
    categoryLabel: 'Leafy Greens & Herbs',
    spec: 'Iceberg & Green Round Head',
    description: 'Dense, compact heads trimmed of outer foliage and wrapped in protective food-safe film for cold storage supply chains.',
    availability: 'Seasonal & Coordinated',
    isYearRound: false,
    packing: '10kg Cartons / Film Wrapped',
    origin: 'Ooty & Nilgiris, Tamil Nadu',
    temperature: '+1°C to +3°C',
  },

  // Exotic Produce
  {
    id: 'regional-specialties',
    name: 'Specialty Regional Produce',
    category: 'exotic',
    categoryLabel: 'Specialty & Exotics',
    spec: 'Okra, Ivy Gourd (Kovakkai), Elephant Foot Yam',
    description: 'Tailored procurement of South Indian heritage vegetables aligned with Middle East and Southeast Asian diaspora markets.',
    availability: 'Custom Quotations',
    isYearRound: true,
    packing: 'Custom Box & Crate Options',
    origin: 'Madurai & Theni Belt',
    temperature: '+8°C to +12°C',
  },
];
