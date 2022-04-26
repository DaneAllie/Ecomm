import React, { useEffect, useState } from "react";
import CatagoryCard from "../components/displays/CatagoryCard";
import HeaderBar from "../components/headers_footers/HeaderBar";
import { useNavigate } from "react-router";
import { useData } from "../firebase/FirebaseDataHook";
import { RoutesObj } from "../routes/AllRoutes";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/FirebaseAuthHook";
import FooterBar from "../components/headers_footers/FooterBar";

export default function SingleProductview() {
	const nav = useNavigate();
	const { Products } = useData();
	const { AddProductToCart, CurrentUser } = useAuth();
	const [final, setfinal] = useState(null);

	useEffect(() => {
		SetUp();
	}, [Products]);

	function SetUp() {
		if (Products !== null) {
			let path = window.location.href;
			let pathSplit = path.split("/");
			let cat = pathSplit[pathSplit.length - 3].replace("%20", " ");
			let sub = pathSplit[pathSplit.length - 2].replace("%20", " ");
			let id = pathSplit[pathSplit.length - 1].replace("%20", " ");

			if (Products !== null) {
				let subCatObj = Products[cat];

				if (subCatObj !== null) {
					let prods = Products[cat][sub];

					if (prods !== null && prods !== undefined) {
						let temp = prods.products[id];
						if (temp !== null && temp !== undefined) {
							setfinal(temp);
							console.log("URL: ", path, pathSplit, cat, sub, subCatObj, prods, temp);
						}
					}
				}
			}
		}
	}

	function AddToCart() {
		//SIGNED IN
		if (CurrentUser !== null) {
			console.log("Adding to our Cart here");

			let old = CurrentUser.cart;
			console.log("OLD", old);

			let newOrder = {
				main: final.mainCat,
				sub: final.subCat,
				id: final.id,
				quantity: 1 //this is hardcode or get value from our user input, thibk about our counter in lesson 1
			};

			//user has an existing cart and it does possibly contain other products
			if (old !== null && old !== undefined) {
				old.push(newOrder);
				console.log("old added", old);

				//firebase function
				AddProductToCart(CurrentUser.uid, old)
					.then((res) => {
						console.log("YAY");
						window.alert("added to cart");
					})
					.catch((err) => {
						console.log("Error, ", err);
					});
			}
			//user has an enplty cart or cleared out and existing cart either
			else {
				let cart = [];
				cart.push(newOrder);
				console.log("new item added", cart);

				//firebase update call
				AddProductToCart(CurrentUser.uid, cart)
					.then((res) => {
						console.log("YAY");
						window.alert("added to cart");
					})
					.catch((err) => {
						console.log("Error, ", err);
					});
			}
		} else {
			let con = window.confirm("Please login to add to cart");
			if (con) {
				nav(RoutesObj.visual.sign_in.path);
			}
		}
	}

	return (
		<div className='content-area group'>
			<HeaderBar />

			<div className='container'>
				<h1> Selected Product Information</h1>
				<div className='about'>
					<br></br>
					
					{final && (
						<>
							<div className='spp'>
								<h4>View Image Below</h4>
								<img src={final.ImageUpload}></img>
							</div>


							<div className='sp' style={{ float: "centre" }}>
								<p>------------------------------------------------------------</p>

								<h4>Product Name : {final.ProductName}</h4>
								<h4>Product Description: {final.ProductDescription}</h4>

								<p>------------------------------------------------------------</p>

								<h4>Stock Amount : {final.Stocklevel}</h4>
								<h4>Price: {final.ProductPrice}</h4>
								<p>------------------------------------------------------------</p>

								<h4>Product Main Category: {final.mainCat}</h4>
								<h4>Product Sub Category: {final.subCat}</h4>

								<p>------------------------------------------------------------</p>

								<button
									className='btn'
									onClick={() => {
										AddToCart();
									}}>
									Add To Cart
								</button>

								<Link to='../pages/basic/Cart'>
									<button className='btnn'>View Cart</button>
								</Link>
							</div>
							<br></br>
						</>
					)}
				</div>
				<br></br>
			</div>
			<FooterBar />
		</div>
	);
}
