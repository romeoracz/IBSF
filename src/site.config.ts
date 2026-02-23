/**
 * Central config for NAP, contact and booking.
 * Premium forensic consultancy – keep NAP identical to Google Business Profile.
 */
export const siteConfig = {
  name: 'Independent Building Science & Forensics',
  brandHeadline: 'Independent Building Forensics',
  shortName: 'IBFS',
  tagline: 'Evidence That Stands Up in Court',
  url: 'https://www.independentbuildingforensics.co.uk',
  description:
    'Independent forensic building investigations. Instrument-led damp, moisture, ventilation and water ingress reports for disputes, insurance and litigation. Southampton, Winchester & London.',

  /** NAP – keep identical to Google Business Profile (15 Rockstone Pl, Southampton SO15 2EP) */
  address: {
    streetAddress: '15 Rockstone Pl',
    addressLocality: 'Southampton',
    postalCode: 'SO15 2EP',
    addressRegion: 'Hampshire',
    /** Single-line address for NAP; must match GBP exactly */
    full: '15 Rockstone Pl, Southampton SO15 2EP',
  },
  /** Building name (not in GBP NAP); use in narrative copy only for local authority */
  buildingName: "Director General's House",
  phone: '+44 7555 809800',
  email: 'enquiries@ibfs-forensics.co.uk',

  /** Contact */
  whatsapp: 'https://wa.me/447555809800',
  bookingUrl: 'https://calendly.com/ibfs-forensics',

  /** Form – use Formspree or Netlify form endpoint */
  formEndpoint: 'https://formspree.io/f/xxxxxxxx',

  /** Google Map embed – 15 Rockstone Pl, Southampton SO15 2EP (paste Share > Embed from Google Maps for exact pin) */
  mapEmbedUrl:
    'https://www.google.com/maps?q=15+Rockstone+Place,+Southampton+SO15+2EP&output=embed',

  /** Areas served (for schema and copy) */
  areas: [
    'Southampton',
    'Winchester',
    'London',
    'Hampshire',
    'South East England',
  ],
  boroughs: ['Haringey', 'Lambeth', 'Islington', 'Camden', 'Southwark'],
};
