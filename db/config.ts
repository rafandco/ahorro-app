import { defineDb, defineTable, column, NOW } from "astro:db"

// Tabla de usuarios
const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userName: column.text({ unique: true }),
    firstName: column.text(),
    lastName: column.text(),
    password: column.text(),
  },
})

// Tabla de entradas
const Entry = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    initialAmount: column.number(),
    finalAmount: column.number(),
    createdAt: column.date({ default: NOW }),
    userId: column.number({ references: () => User.columns.id }),
  },
})

// https://astro.build/db/config
export default defineDb({
  tables: { User, Entry },
})
