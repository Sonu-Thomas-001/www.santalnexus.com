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
    photoWebp: '/assets/images/team/bala-chellapandiyan.webp',
    photoJpg: '/assets/images/team/bala-chellapandiyan.jpg',
    desk: 'Executive Management & Global Commercial Partnerships',
  },
  {
    id: 'asanitha',
    name: 'As anitha',
    role: 'HR Manager',
    badge: 'HR',
    pillars: 'People | Culture | Team',
    bio: 'As anitha manages our human resources and builds a positive work culture. She ensures the right people, development and support systems are in place to help our team grow and contribute to the company\'s success.',
    photoWebp: '/assets/images/team/asanitha.webp',
    photoJpg: '/assets/images/team/asanitha.jpg',
    desk: 'Talent Acquisition, Welfare & Organizational Culture',
  },
  {
    id: 'karthik-s',
    name: 'Karthik S',
    role: 'Administrator',
    badge: 'ADMINISTRATOR',
    pillars: 'Operations | Coordination | Support',
    bio: 'Karthik S handles day-to-day operations, documentation and coordination across teams and partners. He ensures smooth processes, timely communication and efficient support for our business activities.',
    photoWebp: '/assets/images/team/karthik-s.webp',
    photoJpg: '/assets/images/team/karthik-s.jpg',
    desk: 'Corporate Compliance, Trade Documentation & Billing',
  },
  {
    id: 'priya-k',
    name: 'Priya K',
    role: 'Operations Support',
    badge: 'OPERATIONS SUPPORT',
    pillars: 'Logistics | Customer Care | Support',
    bio: 'Priya K supports export coordination, logistics follow-up and customer communication. She works closely with our partners to ensure smooth deliveries and excellent service at every step.',
    photoWebp: '/assets/images/team/priya-k.webp',
    photoJpg: '/assets/images/team/priya-k.jpg',
    desk: 'Cold-Chain Coordination, Carrier Tracking & Buyer Support',
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
    lead: 'Farm Clusters: Madurai, Theni, Dindigul, Nilgiris',
    scope: 'Manages direct relationships with over 150+ certified smallholder farmers, harvest scheduling, pre-harvest pesticide screening, and field grading.',
    contact: 'Direct Farm Visits Available by Appointment',
  },
  {
    title: 'Packhouse & Quality Assurance Desk',
    lead: 'Facilities: Madurai & Tuticorin Packhouse Corridors',
    scope: 'Supervises post-harvest cleaning, sizing calibrators, hydro-cooling/forced-air cooling, APEDA packaging compliance, and cold room storage.',
    contact: 'Stringent Pre-dispatch Inspection Protocols',
  },
  {
    title: 'Export Logistics & Reefer Desk',
    lead: 'Port Corridors: VOC Port Tuticorin, Chennai Port, Cochin',
    scope: 'Manages reefer container booking, temperature data logging, customs clearance, shipping line coordination, and phytosanitary certificate issuance.',
    contact: 'Real-time Cargo Tracking Updates',
  },
  {
    title: 'Commercial & Trade Relations Desk',
    lead: 'Overseas Hubs: UAE, Malaysia, Singapore, Qatar',
    scope: 'Provides competitive FOB/CIF quotation structuring, contracts execution, Letter of Credit (LC) / TT settlement coordination, and buyer relationship management.',
    contact: 'Bala Chellapandiyan (+91 99946 40141)',
  },
];
