import { onValue, push, ref, set } from "@firebase/database";
import { onSnapshot } from "@firebase/firestore";
import React, { createContext, useContext, useEffect, useState } from "react";
import { FIREBASE_REALTIME_DB } from "./FirebaseConfig";

const PathString = "PRODUCTS/";

const DataContext = createContext({});
export const useData = () => useContext(DataContext);

export default function FirebaseDataHookProvider({ children, ...props }) {
	const [Products, setProducts] = useState(null);

	/*prodcuts has; name, desc, price, stocklevel, images[]
    
    inventory.main.subcat.products[]
    e.g inventory.dairy.milk.products[]

    const maincat= ["male", "female", "kids"] //select.option
    const subcat =["shoes","shirts","pants"] //select.option
    3x input fields === name,desc,price,stockLevel
    1x image upload === button, input

    safety check only access to this page if role=== admin

    use useData hook to acces all of the crud func

    const inventory = {
        main:{
            subcat:{
                products:[]
            }
        }
    }
    */

	//----------READ---------//

	useEffect(() => {
		const Ref = ref(FIREBASE_REALTIME_DB, PathString);
		//
		onValue(Ref, (snapshot) => {
			const data = snapshot.val();
			console.log("DATA", data);
			if (data !== null) {
				setProducts(data);
			}
		});
	}, []);

	function CreateProduct(newProduct) {

		let path = `${PathString}${newProduct.mainCat}/${newProduct.subCat}/products`;
		let REF = ref(FIREBASE_REALTIME_DB, `${path}`);
		//get key for new product
		const Key = push(REF).key;
		const finalREF = ref(FIREBASE_REALTIME_DB, `${path}/${Key}`);

		newProduct.id = Key;

		return set(finalREF, newProduct);
	}

	function UpdateProduct(ProductId, newProduct, oldProduct) {}
	function DeleteProduct(ProductId) {}

	const value = {
		CreateProduct, //create
		Products, //read
		UpdateProduct, //update
		DeleteProduct //delete
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
