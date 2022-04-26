import React, { useState } from "react";
import FooterBar from "../../components/headers_footers/FooterBar";
import HeaderBar from "../../components/headers_footers/HeaderBar";
import { useData } from "../../firebase/FirebaseDataHook";

export default function ProductUploads() {
	const { CreateProduct } = useData();

	let CategoryV = {
		mainCat: "",
		subCat: "",
		ProductName: "",
		ProductDescription: "",
		ProductPrice: "",
		Stocklevel: "",
		ImageUpload: [""]
	};

	const [categoryData, setCategoryData] = useState(CategoryV);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCategoryData({ ...categoryData, [name]: value });
		console.log("???", { ...categoryData, [name]: value });
	};

	const submitChange = (e) => {
		e.preventDefault();
		setCategoryData("");
		console.log("values", categoryData);
	};

	const MCategory = ["--Select main Category--", "Chairs", "Couches", "Tables", "Cupboards"];

	const SCategory = ["--Select SCategory  --", , "Bar Chair", "Flat Chair", "Long Couch", "Thin Couch", "Dinner Table", "BedSide Table", "BuiltIn CupBoard", "Box Cupboard"];

	return (
		<div className='content-area group'>
			<HeaderBar />

			<div className='container'>
				<h1>Product Upload</h1>
				<div className='about'><br></br>
					<form className='forms' onSubmit={submitChange}>
						<div>
							<hr></hr>
							<br></br>
							{/* NAME */}
							<label htmlFor='name'>Product Name</label>
							<br></br>
							<input value={categoryData.ProductName} onChange={handleChange} name='ProductName' type='text' required placeholder='Enter Product Name' />

							<br></br>
							<br></br>

							{/* DESCRIPTON */}
							<label htmlFor='Description'>Description</label>
							<br></br>
							<input value={categoryData.ProductDescription} onChange={handleChange} name='ProductDescription' type='text' required placeholder='Enter Product Description' />
							<br></br>
							<br></br>
							<hr></hr>
							{/*MAINCAT*/}
							<br></br>
							<label htmlFor='Main Category'>Main Category</label>
							<select name='mainCat' id='' value={categoryData.prod} onChange={handleChange}>
								{MCategory.map((prod, index) => {
									return (
										<option key={index} value={prod}>
											{prod}
										</option>
									);
								})} 
							</select>

							{/* SUBCAT */}
							<label htmlFor='Stock level'>Sub Category</label>

							<select name='subCat' id='' value={categoryData.subProd} onChange={handleChange}>
								{SCategory.map((subProd, index) => {
									return (
										<option key={index} value={subProd}>
											{subProd}
										</option>
									);
								})}
							</select>

							<div>
								<input type='hidden' name='remember' defaultValue='true' />
								<div>
									<br></br>
									<hr></hr>
									<br></br>
									{/* IMAGE */}
									<label htmlFor='ImageUpload'>Image Upload: </label>
									<input onChange={handleChange} name='ImageUpload' type='file' accept='image/*' required placeholder='Image Upload' />

									<br></br>
									<br></br>
									<hr></hr>
									<br></br>
									{/*  PRICE */}
									<label htmlFor='Product Price'>Product Price</label>
									<br></br>

									<input value={categoryData.ProductPrice} onChange={handleChange} name='ProductPrice' type='text' required placeholder='Enter Price' />
									<br></br>
									<br></br>
									{/* STOCKLEVEL */}
									<label htmlFor='Stock level'>Stock level</label>
									<br></br>
									<input value={categoryData.Stocklevel} onChange={handleChange} name='Stocklevel' type='text' required placeholder='Enter Stock level' />
								</div>
								<br></br>
								<hr></hr>
							</div>

							<button className='btn2'
								type='submit'
								onClick={() => {
									CreateProduct(categoryData);
								}}>
								{" "}
								Add This Product
							</button>
						</div>

					</form>
					<br></br>
				</div>
				<br></br>
			</div>
			<FooterBar />
		</div>
	);
}
