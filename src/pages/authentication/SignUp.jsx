import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthForm from "../../components/reusables/AuthForm";
// import { CreateNewUser, RegisterEmailPass } from "../../firebase/FireBaseAuth";
import { RoutesObj } from "../../routes/AllRoutes";
import HeaderBar from "../../components/headers_footers/HeaderBar";
import FooterBar from "../../components/headers_footers/FooterBar";
import { useAuth } from "../../firebase/FirebaseAuthHook";

export default function SignUp() {
	const { RegisterEmailPass, CreateNewUser } = useAuth();

	let navigation = useNavigate();

	//container function
	function submitSignUp(email, pass) {
		console.log("email and pass: ", email, pass);
		//do firebase auth call here for signup with email and password

		RegisterEmailPass(email, pass)
			.then((userCredentail) => {
				//signed in
				const user = userCredentail.user;
				console.log("user signed in", user);
				//save user to firebase firestore db to access user info
				CreateNewUser(user.uid, user).then(() => {
					navigation(RoutesObj.visual.home.path);
				});
			})

			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.Message;
				console.log("error occured", errorCode, errorMessage);
			});
		// do firebase auth call here for signup with email and pass
	}

	return (
		<>
			<HeaderBar />
			<h1>Sign Up Page</h1>
			<AuthForm type='Sign Up' onFinalize={(email, pass) => submitSignUp(email, pass)} />
			<FooterBar />
		</>
	);
}
