import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema",
  out: "./migrations",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID_PROD!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
