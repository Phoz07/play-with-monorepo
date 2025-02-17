import { Hono } from "hono";
import { createDb } from "./db";
import { usersTable } from "./db/schema/users";

export type Env = CloudflareEnv;

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
  return c.json({ env: c.env.ENVIRONMENT! });
});

app.get("/users", async (c) => {
  const db = createDb(c.env.DB);
  try {
    const users = await db.select().from(usersTable);
    return c.json(users);
  } catch (err) {
    console.log(err);
  }
});

export default app;
