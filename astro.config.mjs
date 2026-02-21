import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.ibfs-forensics.co.uk',
  integrations: [tailwind()],
  output: 'static',
});
