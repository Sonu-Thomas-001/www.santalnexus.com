export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  pillars: string;
  bio: string;
  photoWebp: string;
  photoJpg: string;
  desk?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'bala-chellapandiyan',
    name: 'Bala Chellapandiyan',
    role: 'Founder & CEO',
    badge: 'FOUNDER & CEO',
    pillars: 'Vision | Strategy | Growth',
    bio: 'With a strong passion for agriculture, trade and global markets, Bala Chellapandiyan founded Santal Nexus to connect Indian fresh produce with the world. He leads the company\'s vision, strategy and business growth, ensuring long-term value for farmers, partners and customers.',
    photoWebp: '/assets/images/team/bala-chellapandiyan.jpeg',
    photoJpg: '/assets/images/team/bala-chellapandiyan.jpeg',
    desk: 'Executive Management & Global Commercial Partnerships',
  },
  {
    id: 'ashish-bhosale',
    name: 'Ashish Bhosale',
    role: 'Purchase and Procurement Manager',
    badge: 'PURCHASE & PROCUREMENT',
    pillars: 'Sourcing | Farm Clusters | Quality Intake',
    bio: 'Ashish Bhosale manages direct procurement across regional farming belts. He works closely with grower networks to schedule harvests, oversee quality intake grading, and ensure fair, transparent pricing for farming communities.',
    photoWebp: '/assets/images/team/ashish-bhosale.jpeg',
    photoJpg: '/assets/images/team/ashish-bhosale.jpeg',
    desk: 'Farm Procurement, Regional Clusters & Grower Alliances',
  },
  {
    id: 'shanmugamani-anand',
    name: 'Shanmugamani Anand',
    role: 'Operations & Quality Management',
    badge: 'OPERATIONS & QUALITY',
    pillars: 'Post-Harvest | APEDA Grading | Cold-Chain',
    bio: 'Shanmugamani Anand oversees packhouse operations, sizing calibrators, APEDA export sorting standards, and cold-chain precision. He ensures produce arrives in pristine condition at destination sea and air ports worldwide.',
    photoWebp: '/assets/images/team/shanmugamani-anand.jpeg',
    photoJpg: '/assets/images/team/shanmugamani-anand.jpeg',
    desk: 'Packhouse Sorting, Quality Auditing & Cold-Chain Protocol',
  },
  {
    id: 'hemavathy',
    name: 'Mrs. Hemavathy',
    role: 'Administration and HR Manager',
    badge: 'ADMIN & HR',
    pillars: 'People | Operations | Governance',
    bio: 'Mrs. Hemavathy oversees day-to-day corporate administration, human resources, statutory compliance, and organizational welfare. She fosters an empowering, performance-driven culture supporting smooth operations across all departments.',
    photoWebp: '/assets/images/team/hemavathy.jpeg',
    photoJpg: '/assets/images/team/hemavathy.jpeg',
    desk: 'Corporate Administration, Talent Acquisition & Statutory Compliance',
  },
  {
    id: 'priya-shesan',
    name: 'Mrs. Priya Shesan',
    role: 'Accounts and Finance Executive',
    badge: 'ACCOUNTS & FINANCE',
    pillars: 'Finance | Billing | Settlements',
    bio: 'Mrs. Priya Shesan manages financial accounts, trade billing, commercial documentation, and banking coordination. She ensures financial accuracy, timely farmer settlements, and transparent commercial transactions for buyers and suppliers.',
    photoWebp: '/assets/images/team/priya-shesan.png',
    photoJpg: '/assets/images/team/priya-shesan.png',
    desk: 'Commercial Finance, Trade Settlements & Accounts Coordination',
  },
];

export const TEAM_PILLARS = [
  {
    title: 'Sustainable Farming',
    subtitle: 'Better for Farmers',
    description: 'Working closely with farming communities with fair pricing and sustainable agricultural practices.',
  },
  {
    title: 'Global Trade',
    subtitle: 'Bigger Opportunities',
    description: 'Bridging regional Indian harvests with demanding global markets across Middle East and Southeast Asia.',
  },
  {
    title: 'Our Team',
    subtitle: 'Stronger Together',
    description: 'Cross-functional operational specialists dedicated to produce freshness and seamless deliveries.',
  },
  {
    title: 'Santal Nexus',
    subtitle: 'Expanding Beyond Borders',
    description: 'Rooted in Madurai, Tamil Nadu, with a borderless horizon for quality fresh produce trade.',
  },
];

export const FUNCTIONAL_DESKS = [
  {
    title: 'Farm Procurement & Agronomy Desk',
    lead: 'Lead: Ashish Bhosale · Clusters: Madurai, Theni, Dindigul, Nilgiris',
    scope: 'Manages direct relationships with over 150+ certified smallholder farmers, harvest scheduling, pre-harvest pesticide screening, and field grading.',
    contact: 'Direct Farm Visits Available by Appointment',
  },
  {
    title: 'Packhouse & Quality Assurance Desk',
    lead: 'Lead: Shanmugamani Anand · Facilities: Madurai & Tuticorin Packhouse Corridors',
    scope: 'Supervises post-harvest cleaning, sizing calibrators, hydro-cooling/forced-air cooling, APEDA packaging compliance, and cold room storage.',
    contact: 'Stringent Pre-dispatch Inspection Protocols',
  },
  {
    title: 'Corporate Admin & Talent Desk',
    lead: 'Lead: Mrs. Hemavathy · Operations HQ: Madurai',
    scope: 'Manages statutory registrations, APEDA trade compliance, workforce welfare, recruitment of field specialists, and operational governance.',
    contact: 'Corporate Desk: info@santalnexus.com',
  },
  {
    title: 'Commercial Finance & Accounts Desk',
    lead: 'Lead: Mrs. Priya Shesan · Trade Finance Unit',
    scope: 'Oversees trade billing, Letter of Credit (LC) / TT coordination, timely farmer disbursements, shipping line invoicing, and financial documentation.',
    contact: 'Accounts Desk: +91 99948 45296',
  },
];
