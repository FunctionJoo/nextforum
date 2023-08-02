'use client'

import { usePathname, useRouter } from "next/navigation"

export default function DetailLink(props) {
	let router = useRouter();
	console.log(props);
	return (
		<button onClick={()=>{router.push('/detail/' + path)}}>바똥</button>
	)
}