import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail(props) {

	const db = (await connectDB).db("forum");
	let result = await db.collection('post').findOne({_id: new ObjectId(props.params.postindex)});
	console.log(props.params.postindex);

	return (
		<div className="list-bg">
			<h4>상세페이지</h4>
			<div className="list-item">
				<h4>{result.title}</h4>
				<p>{result.content}</p>
			</div>
		</div>
	)
}