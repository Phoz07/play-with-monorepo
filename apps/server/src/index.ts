import { Hono } from "hono";

export type Env = {
  DB: D1Database;
};

const app = new Hono();

app.get("/", (c) => {
  return c.text("This is main route");
});

export default app;
