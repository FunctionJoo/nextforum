import { connectDB } from "@/util/database"
import { mongoClient } from "mongodb"

export default async function Home() {

  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div>앙뇽</div>
  )
}
