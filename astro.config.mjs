import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.independentbuildingforensics.co.uk',
  integrations: [tailwind()],
  output: 'static',
});
