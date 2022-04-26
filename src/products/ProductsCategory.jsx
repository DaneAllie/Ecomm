import React, { useEffect, useState } from "react";
import CatagoryCard from "../components/displays/CatagoryCard";
import HeaderBar from "../components/headers_footers/HeaderBar";
import { useNavigate } from "react-router";
import { useData } from "../firebase/FirebaseDataHook";
import { RoutesObj } from "../routes/AllRoutes";
import FooterBar from "../components/headers_footers/FooterBar";

export default function ProductsCatagoryView() {
	const { Products } = useData();
	const [ProdsArr, setProdsArr] = useState([]);
	const [main, setmain] = useState("");
	const [sub, setsub] = useState("");

	useEffect(() => {
		SetUp();
	}, [Products]);

	function SetUp() {
		if (Products !== null) {
			let path = window.location.href;
			let pathSplit = path.split("/");
			let cat = pathSplit[pathSplit.length - 2].replace("%20", " ");
			let sub = pathSplit[pathSplit.length - 1].replace("%20", " ");
			setmain(cat);
			setsub(sub);

			if (Products !== null) {
				let subCatObj = Products[cat];

				if (subCatObj !== null) {
					let prods = Products[cat][sub];

					if (prods !== null) {
						let arr = Object.values(prods.products);
						setProdsArr(arr);
						console.log("URL: ", path, pathSplit, cat, sub, subCatObj, prods, arr);
					}
				}
			}
		}
	}

	return (
		<div className='content-area group'>
			<HeaderBar />

			<div className='container'>
				<h1>Products View</h1>
				<div className='about'><br></br>
				<div className='div'>
					{ProdsArr &&
						ProdsArr.map((prod, index) => {
							let path = RoutesObj.non_visual.productsLanding.path; // /prod/:cat/:subcat/:index_id
							let pathCleaned = path.replace(":cat", main).replace(":subcat", sub).replace(":index_id", prod.id); //using hardcoded value
							console.log("PATHS: ", prod, path, pathCleaned);

							return <CatagoryCard key={index} catString={prod.ProductName} pathVar={pathCleaned} price={prod.ProductPrice} desc={prod.ProductDescription} />;
						})}
				</div><br></br>
				</div><br></br>
			</div>
			<FooterBar />
		</div>
	);
}
