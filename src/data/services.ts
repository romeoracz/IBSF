export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  href: string;
  icon: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'building-inspection-surveys',
    title: 'Building inspection & surveys',
    shortDescription: 'Structural surveys, property inspection, homebuyers and pre-purchase building inspections.',
    href: '/services/building-inspection-surveys',
    icon: 'clipboard-document-check',
  },
  {
    slug: 'damp-condensation-surveys',
    title: 'Damp & condensation surveys',
    shortDescription: 'Independent damp surveys, condensation surveys and mould investigation.',
    href: '/services/damp-condensation-surveys',
    icon: 'drop',
  },
  {
    slug: 'indoor-air-quality-ventilation',
    title: 'Indoor air quality & ventilation audits',
    shortDescription: 'IAQ testing, ventilation audits and CO₂ monitoring for homes and workplaces.',
    href: '/services/indoor-air-quality-ventilation',
    icon: 'wind',
  },
  {
    slug: 'odour-voc-investigations',
    title: 'Odour & VOC investigations',
    shortDescription: 'Odour analysis, VOC testing and musty smell investigations.',
    href: '/services/odour-voc-investigations',
    icon: 'beaker',
  },
  {
    slug: 'materials-coatings-failure',
    title: 'Materials & coatings failure analysis',
    shortDescription: 'Paint peeling, render failure, efflorescence and coating adhesion testing.',
    href: '/services/materials-coatings-failure',
    icon: 'paint-brush',
  },
  {
    slug: 'water-ingress-damage',
    title: 'Water ingress & damage surveys',
    shortDescription: 'Water leak detection, roof leak investigation and moisture mapping.',
    href: '/services/water-ingress-damage',
    icon: 'water',
  },
  {
    slug: 'asbestos-interpretation-disputes',
    title: 'Asbestos interpretation & dispute support',
    shortDescription: 'Asbestos report interpretation, property and insurance dispute surveys.',
    href: '/services/asbestos-interpretation-disputes',
    icon: 'shield-exclamation',
  },
  {
    slug: 'ventilation-energy-audits',
    title: 'Ventilation & energy-loss audits',
    shortDescription: 'Condensation after insulation, heat pump and retrofit ventilation audits.',
    href: '/services/ventilation-energy-audits',
    icon: 'bolt',
  },
  {
    slug: 'decontamination-environmental',
    title: 'Decontamination & environmental services',
    shortDescription: 'Hydrogen peroxide fogging, ozone decontamination and odour removal.',
    href: '/services/decontamination-environmental',
    icon: 'sparkles',
  },
  {
    slug: 'building-health-forensics',
    title: 'Building-related health forensics',
    shortDescription: 'Sick building syndrome and building-related illness investigations.',
    href: '/services/building-health-forensics',
    icon: 'heart',
  },
];
