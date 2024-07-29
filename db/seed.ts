import { db, User, Entry } from "astro:db"

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(User).values([
    {
      id: "1",
      username: "fer07",
      email: "fer07@gmail.com",
      firstName: "Fernando",
      lastName: "Rodríguez López",
      password: "fernando1234",
    },
    {
      id: "2",
      username: "fran09",
      email: "fran09@gmail.com",
      firstName: "Francisco",
      lastName: "Pérez Ramírez",
      password: "Fracisco1234",
    },
  ])

  await db.insert(Entry).values([
    {
      id: "1",
      initialAmount: 10,
      finalAmount: 20,
      createdAt: new Date(Date.now()),
      userId: "1",
    },
    {
      id: "2",
      initialAmount: 23,
      finalAmount: 28,
      createdAt: new Date(Date.now()),
      userId: "1",
    },
    {
      id: "3",
      initialAmount: 43,
      finalAmount: 68,
      createdAt: new Date(Date.now()),
      userId: "2",
    },
  ])
}
