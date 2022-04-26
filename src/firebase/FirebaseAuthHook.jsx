import React, { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from "./FirebaseConfig";
import { doc, collection, query, where, getDocs, setDoc, updateDoc } from "@firebase/firestore";
const PathString = "USERS";

const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export default function FireBaseAuthHookProvider({ children, ...props }) {
	const [CurrentUser, setCurrentUser] = useState({});
	
	useEffect(() => {
		onAuthStateChanged(FIREBASE_AUTH, async function (user) {
			let UserToUse = {};
			const Ref = collection(FIREBASE_FIRESTORE, PathString);

			if (user !== null) {
				const q = query(Ref, where("uid", "==", `${user.uid}`));
				const querySnapshot = await getDocs(q);

				if (querySnapshot.docs[0]) {
					const data = querySnapshot.docs[0].data();

					UserToUse = {
						cell: data.cell,
						displayName: data.displayName,
						email: data.email,
						profileurl: data.profileurl,
						uid: data.uid,
						role: data.role,
						cart: data.cart
					};
				}
			}
			setCurrentUser(user? UserToUse: null);
		});
	}, []);

	useEffect(() => {
		console.log("???", CurrentUser);
	  }, [CurrentUser]);

	function RegisterEmailPass(email, password) {
		return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
	}

	function LoginEmailPassword(email, password) {
		return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
	}

	function Logout() {
		signOut(FIREBASE_AUTH);
		window.location.replace("/");
	}

	function SignInWithGoogle() {
		//is the way we coms with firebase to know how to log in
		const provider = new GoogleAuthProvider();
		//firebase function allows us to log in
		//it will reutrn us s promise of type firebaseUser
		return signInWithPopup(FIREBASE_AUTH, provider);
	}

	function SignInAnon() {
		return signInAnonymously(FIREBASE_AUTH);
	}

	async function CreateNewUser(uid, user) {
		//   Checks that user does exist
		const isUser = user !== undefined && user !== null ? true : false;
		//   Checks if the user has a display name (only Google auth does)
		const dn = isUser && user.displayName !== null ? user.displayName : "";
	
		//   The new user object we want to create
		const payload = {
		  displayName: dn.length > 0 ? dn : "",
		  email: isUser ? user.email : "",
		  profileUrl: isUser && user.profileUrl ? user.profileUrl : "", //(Google)
		  uid: uid,
		  role: "user",
		  cart: []
		};

		const Ref = collection(FIREBASE_FIRESTORE, PathString);
		const docRef = doc(FIREBASE_FIRESTORE, PathString, uid);

		//same structure as sql query
		const q = query(Ref, where("uid", "==", `${uid}`));

		//

		const querySnapshot = await getDocs(q);
		console.log("qs", querySnapshot.docs.length);

		//checks if user exists within the database to avoid duplication

		if (querySnapshot.docs.length == 0) {
			//create db entry
			await setDoc(docRef, payload)
				.then((res) => {
					console.log("created user in db :", res);
				})

				.catch((err) => {
					console.log("err", err);
				});
		}
	}

	async function AddProductToCart(uid, order) {
		const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);

		await updateDoc(docRef, { cart: order })
			.then((res) => {
				console.log("Added product to user Cart", res);
			})
			.catch((err) => {
				console.log("ERROR, Cannot add product to Cart");
			});
	}

	//DELETE CRUD

	async function RemoveProductFromCart(uid, prodId) {
		console.log("???", uid, prodId);
		const docRef = doc(FIREBASE_FIRESTORE, `${PathString}/${uid}`);
		const tempArr = CurrentUser !== null ? CurrentUser.cart : [];

		//remove object from array

		let arr = tempArr.filter((e) => e.id != prodId);
		console.log("ARR ", arr);

		await updateDoc(docRef, { cart: arr })
			.then(() => {
				console.log("files array updated successfully");
				window.location.reload();
			})
			.catch((err) => {
				console.log("ERROR, files array updated unsuccessfully");
			});
	}

	const value = {
		CurrentUser,
		LoginEmailPassword,
		RegisterEmailPass,
		Logout,
		//forgotPassword,
		//resetPassword,
		SignInWithGoogle,
		SignInAnon,
		CreateNewUser,
		AddProductToCart,
		RemoveProductFromCart
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
