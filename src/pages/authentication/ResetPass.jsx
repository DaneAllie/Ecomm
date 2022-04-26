import React from "react";
import AuthForm from "../../components/reusables/AuthForm";
import HeaderBar from "../../components/headers_footers/HeaderBar";
import FooterBar from "../../components/headers_footers/FooterBar";

/*
 email, pass, confirm pass input fields
 button reset pass
 Form validation
*/

export default function ResetPass() {
	function submitReset(email, pass) {
		console.log("email and pass: ", email, pass);
		// do firebase auth call here for signup with email and pass
	}

	return (
		<>
			{" "}
			<HeaderBar />
			<div className='reset'>
				<h1>Reset password Page</h1>
				<br />
				<AuthForm type='Reset Password' onFinalize={(email, pass) => submitReset(email, pass)} />
			</div>
			<FooterBar />
		</>
	);
}
