import type { ServiceItem } from './services';
import { services } from './services';

export interface ServicePageContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  problem: string;
  approach: string;
  deliverables: string[];
  keywords: string[];
}

export const servicePagesContent: Record<string, ServicePageContent> = {
  'building-inspection-surveys': {
    slug: 'building-inspection-surveys',
    metaTitle: 'Building Inspection & Structural Surveys – Southampton, Winchester & London | IBSF',
    metaDescription: 'Independent building inspectors in London, Southampton & Winchester. Structural survey, property inspection, homebuyers survey and commercial building inspection.',
    problem: 'Whether you are buying, selling or maintaining a property, you need an impartial assessment of its condition. Structural defects, damp, timber issues and compliance gaps can be missed by non-specialists. An independent building inspection or structural survey gives you evidence-based clarity and helps you avoid costly surprises.',
    approach: 'We use a systematic approach: visual inspection, moisture mapping where relevant, and—when needed—targeted testing. Our reports distinguish between minor defects and serious issues, and we do not recommend contractors, so our advice remains unbiased. We serve homeowners, buyers, commercial clients and those needing building compliance reports or energy performance inspection.',
    deliverables: ['Written building inspection report', 'Structural survey summary and risk ranking', 'Recommendations for further investigation or remediation', 'Clear photography and annotated findings'],
    keywords: ['building inspectors services London', 'structural survey UK', 'property inspection London', 'homebuyers survey London', 'pre-purchase building inspection London', 'commercial building inspector London', 'building inspectors near me Southampton', 'emergency building inspection Winchester', 'building inspectors Haringey', 'building inspectors Lambeth', 'building inspectors Islington'],
  },
  'damp-condensation-surveys': {
    slug: 'damp-condensation-surveys',
    metaTitle: 'Independent Damp & Condensation Surveys – Southampton, Winchester & London | IBSF',
    metaDescription: 'Independent damp survey, condensation survey and mould investigation in Southampton, Winchester and London. Rising damp, penetrating damp and black mould diagnostics.',
    problem: 'Damp and condensation cause mould, decay and health concerns. Misdiagnosis (e.g. labelling condensation as rising damp) leads to unnecessary and costly treatments. An independent damp survey identifies the true cause—whether rising damp, penetrating damp, condensation or a combination—so you can fix the right problem.',
    approach: 'We use moisture meters, thermal imaging and environmental logging to distinguish between rising damp, penetrating damp and condensation. Our condensation surveys include humidity and temperature data. We do not sell treatments or recommend specific contractors, so you get an unbiased damp survey cost and clear remedial options.',
    deliverables: ['Damp survey report with cause analysis', 'Moisture maps and data where relevant', 'Condensation survey findings and ventilation advice', 'Remedial recommendations (no contractor ties)'],
    keywords: ['damp survey Southampton', 'damp survey cost London', 'damp survey near me Winchester', 'independent damp survey London', 'condensation survey London', 'condensation expert Winchester', 'mould inspection London', 'black mould investigation London', 'rising damp survey London', 'penetrating damp survey Winchester', 'damp survey Haringey', 'damp survey Camden', 'damp survey Southwark', 'damp survey Hampshire', 'damp survey Kent'],
  },
  'indoor-air-quality-ventilation': {
    slug: 'indoor-air-quality-ventilation',
    metaTitle: 'Indoor Air Quality Testing & Ventilation Audits – Winchester, London & Southampton | IBSF',
    metaDescription: 'IAQ testing, ventilation audit and CO₂ monitoring in London, Winchester and Southampton. Whole house ventilation, HEPA and air quality improvement.',
    problem: 'Poor indoor air quality and inadequate ventilation affect health, comfort and building durability. After insulation or retrofit, many buildings suffer from condensation or stuffy air because ventilation was not properly considered. IAQ testing and ventilation audits identify shortfalls and guide cost-effective improvements.',
    approach: 'We use CO₂ loggers, humidity and temperature monitors, and—where appropriate—VOC and particulate sampling. Ventilation audits assess extract rates, airflow and system condition. Our recommendations are independent of equipment suppliers, so you get ventilation services and air quality improvement advice tailored to your building.',
    deliverables: ['Indoor air quality audit report', 'Ventilation assessment and data logs', 'CO₂ and humidity summary', 'Recommendations for ventilation installation or repair'],
    keywords: ['indoor air quality testing London', 'indoor air quality audit Winchester', 'ventilation services London', 'ventilation installation London', 'ventilation audit Southampton', 'ventilation system repair London', 'IAQ services Winchester', 'whole house ventilation Winchester', 'home ventilation solutions London', 'air quality improvement London', 'CO₂ monitoring London', 'air quality specialist London', 'HEPA filter installation London', 'air balancing services London', 'ventilation audit South East'],
  },
  'odour-voc-investigations': {
    slug: 'odour-voc-investigations',
    metaTitle: 'Odour & VOC Investigations – London, Winchester & Southampton | IBSF',
    metaDescription: 'Odour investigation, VOC testing and musty smell analysis in London, Winchester and Southampton. Independent odour analysis and off-gassing audits.',
    problem: 'Persistent odours and chemical off-gassing can affect health and property value. Musty smells often indicate damp or mould; other odours may point to VOCs from materials or combustion. Without proper odour investigation and VOC testing, the source can remain unknown and remedies may be misdirected.',
    approach: 'We combine smell investigation with environmental monitoring: VOC sampling, humidity and temperature logging, and—where relevant—targeted material or air testing. Our odour analysis is impartial; we do not sell air purifiers or remediation products. VOC monitor rental and off-gassing audits help identify sources and timelines for improvement.',
    deliverables: ['Odour investigation report', 'VOC testing results and interpretation', 'Musty smell investigation summary', 'Recommendations for source control or ventilation'],
    keywords: ['odour investigation London', 'odour analysis London', 'smell investigation Winchester', 'musty smell investigation London', 'VOC testing London', 'VOC testing services Winchester', 'VOC monitor rental London', 'off-gassing audit Winchester', 'chemical exposure audit London', 'odour investigation South East', 'odour investigation Hampshire'],
  },
  'materials-coatings-failure': {
    slug: 'materials-coatings-failure',
    metaTitle: 'Materials & Coating Failure Analysis – South East & London | IBSF',
    metaDescription: 'Paint peeling, render failure, efflorescence and coating failure investigation in London and the South East. Independent materials failure consultant.',
    problem: 'Paint peeling, render failure, efflorescence and surface blistering often have underlying causes: moisture, incompatible materials or application errors. Without a proper coating failure investigation or materials failure analysis, repairs can fail again. An independent assessment identifies root causes and supports warranty or dispute discussions.',
    approach: 'We inspect failed surfaces, review exposure and use, and—where appropriate—recommend or interpret testing (e.g. coating adhesion testing). Our materials failure consultant reports are evidence-based and suitable for insurers, contractors and homeowners. We cover paint peeling investigation, render failure analysis, efflorescence investigation and corrosion stains analysis.',
    deliverables: ['Materials failure report', 'Cause analysis (moisture, compatibility, workmanship)', 'Coating failure investigation summary', 'Recommendations for remediation or further testing'],
    keywords: ['paint peeling investigation London', 'render failure analysis London', 'efflorescence investigation London', 'coating failure investigation London', 'plaster cracking investigation London', 'surface blistering analysis London', 'building material failure London', 'materials failure consultant London', 'coating adhesion testing London', 'materials failure analysis South East', 'materials failure analysis Hampshire'],
  },
  'water-ingress-damage': {
    slug: 'water-ingress-damage',
    metaTitle: 'Water Ingress & Damage Surveys – London, Winchester & Southampton | IBSF',
    metaDescription: 'Water leak detection, roof leak investigation and moisture mapping in London, Winchester and Southampton. Flood damage assessment and damp basement surveys.',
    problem: 'Water ingress causes decay, mould and structural damage. Sources can be hard to locate: roof leaks, plumbing, groundwater or surface water. Water damage investigation and moisture mapping help pinpoint the cause so repairs are targeted and effective. After flooding, an independent flood damage assessment supports insurance and remediation planning.',
    approach: 'We use moisture mapping, visual inspection and—where useful—thermal imaging to trace water ingress. Our water leak detection and roof leak investigation work is methodical and documented. We provide water damage investigation and damp basement surveys in London, Winchester and Southampton, and flood damage assessment where needed.',
    deliverables: ['Water ingress investigation report', 'Moisture maps and leak source assessment', 'Roof or basement water ingress summary', 'Recommendations for repair and moisture control'],
    keywords: ['water ingress investigation London', 'water leak detection London', 'roof leak investigation London', 'basement water ingress Winchester', 'moisture ingress investigation London', 'water damage investigation London', 'damp ingress survey Winchester', 'flood damage assessment Winchester', 'damp basement London', 'moisture mapping London', 'water ingress investigation South East', 'water ingress investigation Hampshire'],
  },
  'asbestos-interpretation-disputes': {
    slug: 'asbestos-interpretation-disputes',
    metaTitle: 'Asbestos Report Interpretation & Property Dispute Surveys – London & South East | IBSF',
    metaDescription: 'Asbestos survey interpretation, property dispute surveys and independent evidence for damp and building defect disputes in London and the South East.',
    problem: 'Asbestos reports can be complex to interpret; risk ranking and management options are not always clear. In property and insurance disputes—landlord-tenant damp disputes, building defect disputes or neighbour disputes—independent evidence from a building inspection or damp survey can be critical. Parties need unbiased asbestos advice and dispute support.',
    approach: 'We provide asbestos report interpretation and asbestos risk ranking in plain language. For disputes, we offer independent evidence: property dispute surveys, landlord tenant dispute damp assessments, insurance dispute building inspection and neighbour dispute building inspection. Our reports are suitable for legal and insurance use.',
    deliverables: ['Asbestos report interpretation summary', 'Risk ranking and management advice', 'Dispute survey report (property, damp, building defect)', 'Independent evidence for legal or insurance use'],
    keywords: ['asbestos report interpretation London', 'asbestos advice London', 'asbestos risk ranking London', 'asbestos survey interpretation Winchester', 'property dispute survey London', 'landlord tenant dispute damp London', 'insurance dispute building inspection London', 'independent evidence damp dispute London', 'building defect dispute London', 'neighbour dispute building inspection Winchester', 'property dispute survey South East'],
  },
  'ventilation-energy-audits': {
    slug: 'ventilation-energy-audits',
    metaTitle: 'Ventilation & Energy-Loss Audits – Condensation After Insulation | London & South East | IBSF',
    metaDescription: 'Ventilation audit after retrofit, condensation after insulation and heat pump underperformance investigations. Southampton, Winchester and London.',
    problem: 'After insulation, double glazing or other energy retrofits, many buildings develop condensation or poor air quality because ventilation was not balanced. Heat pump underperformance can also relate to building airtightness and ventilation. A ventilation energy-loss audit or ventilation inspection after insulation clarifies the interaction between airtightness and ventilation.',
    approach: 'We assess ventilation rates, extract performance and humidity patterns before and after retrofit. Our ventilation audit after insulation and condensation after double glazing investigations are independent of installers. We cover energy retrofit issues, energy performance certificates and airtightness vs ventilation balance across Southampton, Winchester and London.',
    deliverables: ['Ventilation audit report (post-retrofit)', 'Condensation cause analysis', 'Airtightness vs ventilation assessment', 'Recommendations for ventilation or energy efficiency'],
    keywords: ['condensation after insulation London', 'ventilation audit after retrofit London', 'heat pump underperformance London', 'ventilation inspection after insulation Winchester', 'energy retrofit issues London', 'energy performance certificates Winchester', 'airtightness vs ventilation London', 'ventilation energy-loss audit London', 'condensation after double glazing Winchester', 'energy efficiency survey London', 'energy performance inspection South East'],
  },
  'decontamination-environmental': {
    slug: 'decontamination-environmental',
    metaTitle: 'Decontamination & Environmental Services – Fogging, Odour Removal | London | IBSF',
    metaDescription: 'Hydrogen peroxide fogging, ozone decontamination and fogging services in London. Vehicle odour removal and decontamination fogging.',
    problem: 'Odours and contamination from mould, fire, or other sources often require more than surface cleaning. Hydrogen peroxide fogging and ozone decontamination can treat air and exposed surfaces in a way that conventional cleaning cannot. Vehicle odour removal and building decontamination need a clear scope and post-treatment verification.',
    approach: 'We advise on decontamination fogging options (hydrogen peroxide fogging, ozone decontamination) and—where appropriate—specify or verify fogging services. Our role is independent of contractors; we help define scope and confirm outcomes. We cover fogging services London, decontamination fogging and vehicle odour removal where within our remit.',
    deliverables: ['Decontamination scope and method advice', 'Pre- and post-fogging assessment where agreed', 'Odour removal verification', 'Recommendations for ongoing environmental control'],
    keywords: ['hydrogen peroxide fogging London', 'ozone decontamination London', 'fogging services London', 'decontamination fogging London', 'vehicle odour removal London'],
  },
  'building-health-forensics': {
    slug: 'building-health-forensics',
    metaTitle: 'Building-Related Health Forensics – Sick Building Syndrome | London & South East | IBSF',
    metaDescription: 'Sick building syndrome and building-related illness investigation in London and the South East. Indoor environment health and symptom diagnostics.',
    problem: 'When occupants report that a building makes them sick—headaches, fatigue, respiratory or skin symptoms—the cause may be indoor environment quality: mould, VOCs, poor ventilation or other factors. Building-related illness and sick building syndrome investigation requires a systematic, evidence-based approach to identify triggers and recommend changes.',
    approach: 'We carry out indoor environment health investigations: IAQ and ventilation assessment, damp and mould review, and—where relevant—VOC or particulate sampling. Our building-related symptoms and sick building syndrome investigations are impartial and suitable for employers, landlords and occupants. We serve London and the South East.',
    deliverables: ['Building-related health investigation report', 'Indoor environment assessment summary', 'Identification of likely triggers (damp, VOCs, ventilation)', 'Recommendations for remediation and reoccupation'],
    keywords: ['sick building syndrome investigation London', 'building makes me sick London', 'building-related illness London', 'indoor environment health investigation London', 'building-related symptoms London', 'building inspection South East', 'building inspection Hampshire'],
  },
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return servicePagesContent[slug];
}
