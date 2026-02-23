export interface ForensicServicePage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  problem: string;
  risk: string;
  investigation: string;
  findings: string;
  reportOutput: string[];
}

export const forensicServicePages: Record<string, ForensicServicePage> = {
  'damp-moisture-forensics': {
    slug: 'damp-moisture-forensics',
    metaTitle: 'Damp & Moisture Forensics | Independent Building Forensics – Southampton, Winchester & London',
    metaDescription: 'Forensic damp investigation, independent damp survey Southampton, Winchester & London. Rising and penetrating damp causation, moisture mapping. Instrument-verified reports.',
    title: 'Damp & moisture forensics',
    problem: 'Damp and moisture disputes require clear causation: rising damp, penetrating damp, condensation or construction defect. Misdiagnosis leads to failed remediation and continued dispute.',
    risk: 'Without instrument-led analysis, liability remains unclear. Insurers, landlords and developers need defensible evidence of cause and extent.',
    investigation: 'We use Protimeter moisture mapping, thermal imaging, hygrothermal logging and environmental data to distinguish moisture sources and migration. No remedial bias.',
    findings: 'Causation is isolated using recorded data. Moisture maps, dew point analysis and ventilation performance support clear conclusions.',
    reportOutput: ['Causation analysis', 'Moisture maps and data logs', 'Remedial guidance (no contractor recommendation)', 'Suitable for dispute and insurance'],
  },
  'water-ingress-leak-causation': {
    slug: 'water-ingress-leak-causation',
    metaTitle: 'Water Ingress & Leak Causation | Independent Building Forensics',
    metaDescription: 'Water ingress investigation London, leak causation, moisture mapping. Forensic building investigations Southampton, Winchester & London.',
    title: 'Water ingress & leak causation',
    problem: 'Water ingress and leaks require traceable causation—roof, envelope, plumbing or ground. Building defect investigation must be independent and data-led.',
    risk: 'Unclear causation prolongs insurance and developer disputes. Evidence must support liability and scope of repair.',
    investigation: 'We combine moisture mapping, thermal imaging and systematic inspection to trace water ingress and leak causation. Data is logged and repeatable.',
    findings: 'Source and path of water are documented. Moisture ingress investigation London and water damage investigation support dispute resolution.',
    reportOutput: ['Leak source and pathway analysis', 'Moisture maps', 'Photographic and thermal evidence', 'Remedial scope guidance'],
  },
  'condensation-ventilation-failure': {
    slug: 'condensation-ventilation-failure',
    metaTitle: 'Condensation & Ventilation Failure | Forensic Building Investigations',
    metaDescription: 'Ventilation audit Winchester, condensation survey Hampshire. Hygrothermal and dew point analysis. Southampton, Winchester & London.',
    title: 'Condensation & ventilation failure',
    problem: 'Condensation and ventilation failure drive mould, decay and health complaints. Causation often involves retrofit, occupancy and system performance.',
    risk: 'Disputes turn on whether condensation or construction defect is primary. Ventilation performance and dew point must be quantified.',
    investigation: 'We use CO₂ and humidity logging, ventilation testing and psychrometric analysis. Condensation survey Hampshire and ventilation audit Winchester and London.',
    findings: 'Environmental loading and ventilation shortfalls are quantified. Dew point modelling supports causation.',
    reportOutput: ['Ventilation performance analysis', 'Environmental data logs', 'Dew point and condensation risk', 'Remedial and design guidance'],
  },
  'indoor-air-quality-health': {
    slug: 'indoor-air-quality-health',
    metaTitle: 'Indoor Air Quality & Health Investigation | Independent Building Forensics',
    metaDescription: 'Indoor air quality testing London, CO₂, VOC and mould investigation. Building-related health complaints. Southampton, Winchester & London.',
    title: 'Indoor air quality & health investigation',
    problem: 'Building-related health complaints require objective assessment of IAQ: CO₂, VOCs, mould and ventilation. Subjective claims need data.',
    risk: 'Employers, landlords and insurers need defensible evidence of environmental conditions and causation.',
    investigation: 'We use CO₂ and VOC monitoring, air and surface sampling, and ventilation assessment. Indoor air quality testing London and Hampshire.',
    findings: 'Environmental data is logged and interpreted. Links between conditions and reported symptoms are assessed with appropriate caveats.',
    reportOutput: ['IAQ data and interpretation', 'Ventilation assessment', 'Sampling results where applicable', 'Remedial and management guidance'],
  },
  'building-pathology-material-failure': {
    slug: 'building-pathology-material-failure',
    metaTitle: 'Building Pathology & Material Failure | Independent Building Forensics',
    metaDescription: 'Building pathology report, material and coating failure, timber decay. Expert building report for disputes. Southampton, Winchester & London.',
    title: 'Building pathology & material failure',
    problem: 'Material and coating failure, timber decay and structural moisture require building pathology expertise. Causation may be design, workmanship or environment.',
    risk: 'Developer defect liability and insurance claims depend on clear causation and scope.',
    investigation: 'We combine visual inspection, moisture mapping and targeted testing. Building pathology report standards; no remedial interest.',
    findings: 'Causation and extent are documented. Timber decay, coating failure and moisture are linked to data where possible.',
    reportOutput: ['Building pathology report', 'Causation and extent', 'Photographic and moisture evidence', 'Remedial scope (no contractor tie)'],
  },
  'insurance-dispute-reports': {
    slug: 'insurance-dispute-reports',
    metaTitle: 'Insurance & Dispute Reports | Independent Building Forensics',
    metaDescription: 'Insurance building dispute report, landlord tenant damp dispute. Independent building expert London. Southampton, Winchester & London.',
    title: 'Insurance & dispute reports',
    problem: 'Insurance and landlord-tenant damp disputes need independent, defensible evidence. Parties require clarity on cause, extent and liability.',
    risk: 'Biased or shallow reports undermine settlement and litigation. Insurance building dispute report must be instrument-led and clear.',
    investigation: 'We provide independent evidence for insurance and landlord tenant damp dispute cases. Same methodology as all forensic work: data-led, no remedial bias.',
    findings: 'Reports are structured for insurers and legal use. Causation and remedial scope are clearly set out.',
    reportOutput: ['Causation and liability commentary', 'Evidence summary', 'Data and imagery', 'Suitable for insurers and solicitors'],
  },
  'expert-witness-litigation': {
    slug: 'expert-witness-litigation',
    metaTitle: 'Expert Witness & Litigation Support | Independent Building Forensics',
    metaDescription: 'Expert building report, litigation support, court-ready causation. Independent building expert London. Southampton, Winchester & London.',
    title: 'Expert witness & litigation support',
    problem: 'Litigation and formal disputes require expert building reports that meet court standards. Evidence must be robust and methodology defensible.',
    risk: 'Weak or partisan expert evidence undermines cases. Instructions must be independent and evidence-based.',
    investigation: 'We deliver expert building report and litigation support where instructions are clear and conflict-free. Methodology is transparent and repeatable.',
    findings: 'Reports are suitable for use in legal proceedings. Causation, data and conclusions are clearly presented.',
    reportOutput: ['Expert building report', 'Court-ready structure and language', 'Full evidence and methodology', 'Clear conclusions and caveats'],
  },
};
