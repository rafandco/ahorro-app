// @ts-check
import { defineConfig } from 'astro/config';

import db from '@astrojs/db';

import vue from '@astrojs/vue';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [db(), vue()],
  output: "server",
  adapter: vercel(),
});