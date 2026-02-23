export interface ForensicService {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
}

export const forensicServices: ForensicService[] = [
  { slug: 'damp-moisture-forensics', title: 'Damp & moisture forensics', shortDescription: 'Rising and penetrating damp causation, moisture mapping, condensation and ventilation failure.', href: '/services/damp-moisture-forensics' },
  { slug: 'water-ingress-leak-causation', title: 'Water ingress & leak causation', shortDescription: 'Water ingress investigation, leak causation, moisture mapping and building defect investigation.', href: '/services/water-ingress-leak-causation' },
  { slug: 'condensation-ventilation-failure', title: 'Condensation & ventilation failure', shortDescription: 'Ventilation audit, condensation survey Hampshire, hygrothermal and dew point analysis.', href: '/services/condensation-ventilation-failure' },
  { slug: 'indoor-air-quality-health', title: 'Indoor air quality & health investigation', shortDescription: 'CO₂, VOC, mould and building-related health complaints. Indoor air quality testing London.', href: '/services/indoor-air-quality-health' },
  { slug: 'building-pathology-material-failure', title: 'Building pathology & material failure', shortDescription: 'Building pathology report, material and coating failure, timber decay analysis.', href: '/services/building-pathology-material-failure' },
  { slug: 'insurance-dispute-reports', title: 'Insurance & dispute reports', shortDescription: 'Insurance building dispute report, landlord tenant damp dispute, independent building expert London.', href: '/services/insurance-dispute-reports' },
  { slug: 'expert-witness-litigation', title: 'Expert witness & litigation support', shortDescription: 'Expert building report, litigation-grade evidence, court-ready causation analysis.', href: '/services/expert-witness-litigation' },
];
