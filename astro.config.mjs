import { defineConfig } from "astro/config"
import db from "@astrojs/db"
import vercel from "@astrojs/vercel/serverless"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
  integrations: [db(), vue()],
  output: "server",
  adapter: vercel()
})