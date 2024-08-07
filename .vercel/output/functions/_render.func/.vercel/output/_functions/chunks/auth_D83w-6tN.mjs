import { Lucia } from "lucia"
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle"
import { d as db, S as Session, U as User } from "./_astro_db_DY7iTdg9.mjs"

const adapter = new DrizzleSQLiteAdapter(db, Session, User)
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production"
    }
  }
})

export { lucia as l }
