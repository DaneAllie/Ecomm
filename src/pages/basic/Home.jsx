import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CatagoryCard from "../../components/displays/CatagoryCard";
import FooterBar from "../../components/headers_footers/FooterBar";
import HeaderBar from "../../components/headers_footers/HeaderBar";
import Slide from "../../components/reusables/Slideshow";
import { useData } from "../../firebase/FirebaseDataHook";
import ProductsDisplayMain from "../../products/MainCategory";
import { RoutesObj } from "../../routes/AllRoutes";

// MAIN CATAGORY DSIPLAY PAGE AND CONSUMING OF DATA
export default function Home() {
	const { Products } = useData();
	const [allInventory, setallInventory] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		SetUp();
	}, []);

	useEffect(() => {
		SetUp();
	}, [Products]);

	function SetUp() {
		if (Products) {
			let main = Object.keys(Products);
			console.log("Main Categories", main);
			setallInventory(main);
		}
	}

	return (
		
		<div className='content-area group'>
			<HeaderBar />
			
			<div className='container'>
				<br></br>
				<div class='image-banner'>
					<img
						style={{ width: "1320px", height: "325px", borderRadius: "10px" }}
						src='					https://th.bing.com/th/id/R.a86e3a1dcad8b643d58934793eb64326?rik=cx2Sr54XX6nc3A&riu=http%3a%2f%2fi1.adis.ws%2fi%2fhanoverdirect%2fhome-decor-main-cat-F2018&ehk=v6iK%2btQZxVrCsDDWkXXELKwOe1KYX0fMkzfPrHMp0UI%3d&risl=&pid=ImgRaw&r=0
'
					/>

					<div class='banner-description'>
						<p>Hey There, Welcome to Home Decor. Here you can view all our amazing products and Subscriptions! </p>
					</div>
				</div>
				<h1>Welcome to Home Decor's online shop!</h1>

				<div className='about'>
					<br></br>
					{allInventory &&
						allInventory.map((cat, index) => {
							let path = RoutesObj.non_visual.catsLanding.path;
							let pathCleaned = path.replace(":type", cat);
							console.log("PATHS ", cat, path, pathCleaned);

							return <CatagoryCard key={index} catString={cat} pathVar={pathCleaned} />;
						})}
					<br></br>
					<br></br>
				</div>
				<br></br>
			</div>

			<br></br>
			{/* <Slide /> */}
			<FooterBar />
			
		</div>
	);
}
