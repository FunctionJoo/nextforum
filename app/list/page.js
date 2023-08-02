import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import Link from "next/link"
import DetailLink from "./DetailLink";

export default async function List() {

  const db = (await connectDB).db("forum");
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      {result.map((data, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={'/detail/' + data._id} prefetch={false}><h4>{data.title}</h4></Link>
            <p>{data.content}</p>
            <DetailLink id={data._id}/>
          </div>
        )
      })}
    </div>
  )
}