export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'export' | 'general' | 'quality' | 'payments';
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'export',
    question: 'What is the typical transit duration from your port to Southeast Asia?',
    answer: 'Ocean freight transit from VOC Port (Tuticorin) or Chennai Port to Port Klang (Malaysia) is approximately 5 to 7 days, and to Singapore is 4 to 6 days. For express consignments, air cargo from Madurai (IXM) or Chennai (MAA) reaches within 24 to 36 hours.',
  },
  {
    id: 'faq-2',
    category: 'export',
    question: 'What export certificates and compliance documents do you supply?',
    answer: 'Every international consignment is accompanied by official APEDA Registration-cum-Membership Certificate (RCMC), Government Phytosanitary Certificate from the Directorate of Plant Protection, Certificate of Origin issued by the Chamber of Commerce, Commercial Invoice, Packing List, and Clean Bill of Lading.',
  },
  {
    id: 'faq-3',
    category: 'quality',
    question: 'How do you maintain the cold chain during transportation?',
    answer: 'From the moment of farm harvest, produce is transported in insulated vehicles to our packhouse where it undergoes hydro-cooling or forced-air cooling to eliminate field heat. Containers are pre-cooled to the exact setpoint before loading, and sealed with real-time digital temperature/humidity data loggers.',
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'What is your Minimum Order Quantity (MOQ) for international orders?',
    answer: 'For sea freight, our standard MOQ is one 20ft Reefer Container (~10-12 MT) or one 40ft High-Cube Reefer (~20-24 MT). For air cargo shipments (such as fresh curry leaves, drumsticks, or chillies), our MOQ starts at 500 kg to 1 Metric Tonne.',
  },
  {
    id: 'faq-5',
    category: 'payments',
    question: 'What payment terms and settlement methods do you support?',
    answer: 'We work with reputable international banking channels. Standard payment terms include 100% Irrevocable Letter of Credit at Sight (LC at Sight) from prime international banks, or Telegraphic Transfer (TT) with advance deposit and balance upon presentation of shipping document copies.',
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'Can buyers request custom carton branding or specific packaging sizes?',
    answer: 'Yes! We support OEM buyer-branded cartons with custom graphics, barcode labeling, language translations, and net-weight specifications (e.g. 5kg, 7kg, 13kg boxes or plastic crates) subject to minimum container run volumes.',
  },
];
