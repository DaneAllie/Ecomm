import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthForm from "../../components/reusables/AuthForm";
//import { LoginEmailPassword, SignInAnon, SignInWithGoogle, CreateNewUser, GetAuthState } from "../../firebase/FireBaseAuth";
import { RoutesObj } from "../../routes/AllRoutes";
import { useAuth } from "../../firebase/FirebaseAuthHook";

import HeaderBar from "../../components/headers_footers/HeaderBar";
import FooterBar from "../../components/headers_footers/FooterBar";

export default function SignIn() {
	const { LoginEmailPassword, CreateNewUser, SignInAnon, SignInWithGoogle } = useAuth();
	//const { history } = useNavigate();
	let navigation = useNavigate();
	// Sign up with email and password
	function submitSignIn(email, passw) {
		console.log("email and pass: ", email, passw);
		// do firebase auth call here for signup with email and pass

		LoginEmailPassword(email, passw)
			.then((userCredentail) => {
				const user = userCredentail.user;
				console.log("signed in succesful", user);
				CreateNewUser(user.uid, user).then(() => {
					navigation(RoutesObj.visual.home.path, { replace: true });
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("erorr logging in, please try again: ", errorCode, errorMessage);
			});
	}

	function googleBTN() {
		SignInWithGoogle()
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const user = result.user;
				console.log("signed in succesful", user);
				//check if user is saved in
				CreateNewUser(user.uid, user).then(() => {
					navigation(RoutesObj.visual.home.path, { replace: true });
				});
			})

			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("erorr logging in, please try again: ", errorCode, errorMessage);
			});
	}

	function anonBTN() {
		SignInAnon()
			.then((result) => {
				const user = result.user;
				//firebase function allows us to log in
				//it will reutrn us s promise of type firebaseUser
				console.log("success", user);
				CreateNewUser(user.uid, user).then(() => {
					navigation(RoutesObj.visual.home.path, { replace: true });
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log("erorr logging in, please try again: ", errorCode, errorMessage);
			});
	}

	return (
		<>
			<HeaderBar />
			<h1>Sign In Page</h1>
			<br />
			<h2>Sign in with email and password </h2>
			<br />
			<AuthForm type='Sign In' onFinalize={(email, pass) => submitSignIn(email, pass)} />
			<br />
			<button onClick={() => googleBTN()}>Sign in with Google</button>
			<br />
			<button onClick={() => anonBTN()}>Sign in Anonomously</button>
			<br />
			<br />
			<p>
				Don't have an account <NavLink to={RoutesObj.visual.sign_up.path}>{RoutesObj.visual.sign_up.name}</NavLink>
			</p>
			<FooterBar />
		</>
	);
}
