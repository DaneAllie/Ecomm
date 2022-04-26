import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutesObj } from "../../routes/AllRoutes";

export default function CatagoryCard({ catString, pathVar, price, desc, pic, stock }) {
	const navigate = useNavigate();

	//remove placeholder

	// let path = RoutesObj.non_visual.catsLanding.path; //"/cat/:type"
	// let pathCleaned = path.replace(":type", catString); //hardcord val
	// let newUrl = "";

	// console.log("paths:", catString, path);
	return (
		<button onClick={() => navigate(`${pathVar}`)}>
			<br></br>
			<br></br>
			<img style={{ width: "225px", height: "225px" }} src='https://images.genius.com/de0bebaf2ae5cd253dbcde0733348549.1000x1000x1.jpg' alt='My Picture' />
			<br></br>
			<h2>{catString}</h2>
			{price && <h3>Price: R {price}</h3>}
			{desc && <h3> Description: {desc}</h3>}
			{pic && <h3> Picture: {pic}</h3>}
			{stock && <h3> Stock: {stock}</h3>}

			<br></br>
		</button>
	);
}
