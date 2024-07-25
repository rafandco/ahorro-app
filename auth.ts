import { Lucia } from "lucia"
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle"
import { db, Session, User } from "astro:db"

const adapter = new DrizzleSQLiteAdapter(db as any, Session as any, User as any) // your adapter

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
})

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia
  }
}
