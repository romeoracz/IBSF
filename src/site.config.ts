/**
 * Central config for NAP, contact and booking.
 * Update these values for production; keep NAP identical to Google Business Profile.
 */
export const siteConfig = {
  name: 'Independent Building Science & Forensics',
  shortName: 'IBFS',
  tagline: 'Expert Diagnostics in Southampton, Winchester & London',
  url: 'https://www.ibfs-forensics.co.uk',
  description:
    'Independent damp surveys, indoor air quality testing and building forensics. Southampton, Winchester & London.',

  /** NAP – keep identical across site, GBP and directories */
  address: {
    line1: 'Southampton',
    line2: 'Hampshire',
    full: 'Southampton, Hampshire',
  },
  phone: '+44 1234 567890',
  email: 'enquiries@ibfs-forensics.co.uk',

  /** Contact */
  whatsapp: 'https://wa.me/441234567890',
  bookingUrl: 'https://calendly.com/ibfs-forensics',

  /** Form – use Formspree or Netlify form endpoint */
  formEndpoint: 'https://formspree.io/f/xxxxxxxx',

  /** Google Map embed – replace with your place ID or coordinates */
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39856.0!2d-1.4!3d50.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzAwLjAiTiAxwrAyNCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1',

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
