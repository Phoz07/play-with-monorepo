import build from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import adapter from "@hono/vite-dev-server/cloudflare";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    devServer({
      adapter,
      entry: "src/index.ts",
    }),
    build({
      entry: "src/index.ts",
    }),
  ],
});
