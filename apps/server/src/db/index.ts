import { drizzle } from "drizzle-orm/d1";

// function เชื่อมต่อกับฐานข้อมูล
export function createDb(db: D1Database) {
  return drizzle(db);
}
