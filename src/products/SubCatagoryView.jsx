import React, { useEffect, useState } from "react";
import CatagoryCard from "../components/displays/CatagoryCard";
import HeaderBar from "../components/headers_footers/HeaderBar";
import { useNavigate } from "react-router";
import { useData } from "../firebase/FirebaseDataHook";
import { RoutesObj } from "../routes/AllRoutes";
import FooterBar from "../components/headers_footers/FooterBar";

export default function SubCatagoryView() {
	const { Products } = useData();
	const [SubCatArr, setSubCatArr] = useState([]);
	const [main, setmain] = useState("");

	useEffect(() => {
		SetUp();
	}, [Products]);
	function SetUp() {
		if (Products !== null) {
			let path = window.location.href;
			let pathSplit = path.split("/");
			let cat = pathSplit[pathSplit.length - 1].replace("%20", " ");
			setmain(cat);

			let subCatObj = Products[cat];

			if (subCatObj !== null && subCatObj !== undefined) {
				let subCatStrings = Object.keys(subCatObj);
				setSubCatArr(subCatStrings);
			}
			console.log("URL: ", path, pathSplit, cat, subCatObj); // , subCatStrings
		}
	}

	return (
		<div className='content-area group'>
			<HeaderBar />

			<div className='container'>
				<h1>Sub Catagory View</h1>
				<div className='about'><br></br>

					<div className='div'>
						{SubCatArr &&
							SubCatArr.map((sub, index) => {
								let path = RoutesObj.non_visual.subCatsLanding.path; // subcat/:cat/:subcat
								let pathCleaned = path.replace(":cat", main).replace(":subcat", sub); //using hardcoded value
								console.log("PATHS: ", sub, path, pathCleaned);

								return <CatagoryCard key={index} catString={sub} pathVar={pathCleaned} />;
							})}{" "}
					</div><br></br>
				</div>
			</div>
			<br></br>
			< FooterBar />
			
		</div>
	);
}
