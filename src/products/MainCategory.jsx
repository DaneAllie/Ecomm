import React, { useEffect } from "react";
// import CatagoryCard from "../components/displays/CatagoryCard";

export default function MainCatagoryView({ CatStrings }) {
	// useEffect(() => {
	// 	console.log("main cat CatString ", CatStrings);
	// }, [CatStrings]);

	return (
		<div className='MainContainer'>
			{/* <br></br>
			{CatStrings.map((cat, index) => (
				<CatagoryCard key={index} catString={cat} index={index} />
			))}
			<br></br> */}
		</div>
	);
}
