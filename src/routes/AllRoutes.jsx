import ProductUploads from "../pages/admin/ProductUploads";
import ForgotPass from "../pages/authentication/ForgotPass";
import ResetPass from "../pages/authentication/ResetPass";
import SignIn from "../pages/authentication/SignIn";
import SignUp from "../pages/authentication/SignUp";
import Home from "../pages/basic/Home";
import About from "../pages/basic/About";
import FAQ from "../pages/basic/FAQ";
import DashBoard from "../pages/basic/DashBoard";

import SubCatagoryView from "../products/SubCatagoryView";
import ProductsCatagoryView from "../products/ProductsCategory";
import SingleProductview from "../products/SingleProductview";

// acess to all child props : RoutesObj.home.path
//OBJECT STRUCTURE:: {KEY: VALUE}
// RoutesObj contains elem with structure = {name: string, path:string, ex: boolean, comp: JSX.Element}
export const RoutesObj = {
	visual: {
		/*Basic*/
		home: { name: "Home", path: "/", comp: <Home />, ex: true },
		DashBoard: { name: "DashBoard", path: "/DashBoard", comp: <DashBoard />, ex: true },

		/*Admin  */
		admin: { name: "Admin ", path: "/admin", comp: <ProductUploads />, ex: true },

		/*Basic*/
		about: { name: "About", path: "/about", comp: <About />, ex: true },

		FAQ: { name: "FAQ", path: "/FAQ", comp: <FAQ />, ex: true },

		/*Auth*/
		sign_in: { name: "Sign In", path: "/signin", comp: <SignIn />, ex: true },
		sign_up: { name: "Sign Up", path: "/signup", comp: <SignUp />, ex: true },
		forgot_pass: { name: "Forgot Password", path: "/forgot", comp: <ForgotPass />, ex: true }
	},
	non_visual: {
		/*Auth*/
		reset_pass: { name: "Reset Password", path: "/reset", comp: <ResetPass />, ex: true },
		catsLanding: { name: "Cats Landing", path: "/cat/:type", pathClean: "/cat/", comp: <SubCatagoryView />, ex: false },
		subCatsLanding: { name: "Sub Cats Landing", path: "/subCat/:cat/:subcat", comp: <ProductsCatagoryView />, ex: false },
		productsLanding: { name: "Product Landing", path: "/prod/:cat/:subcat/:index_id", comp: <SingleProductview />, ex: false }
	}
};

// Convert Object to an Array using built in js function
/* takes obj iterates over it and pushes each value into an array and returns the array back to us to use */
export const AllRoutes = Object.values(RoutesObj.visual);
