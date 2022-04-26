import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutesObj } from "../../routes/AllRoutes";
import { validEmail } from "../../utils/Util_fuctions";
import HeaderBar from "../../components/headers_footers/HeaderBar";
import FooterBar from "../../components/headers_footers/FooterBar";

/*
 input for email button reset pass
 Form validation
*/
export default function ForgotPass() {
	const [email, setemail] = useState("");
	const [errorMsg, seterrorMsg] = useState("");

	function checkEmail(e) {
		setemail(e.target.value);
		let isVal = validEmail(e.target.value);
		console.log("????", isVal);

		if (isVal) {
			seterrorMsg("");
		} else {
			seterrorMsg("Email is incorrect format");
		}
	}

	function getRecover() {}
	return (
		<>
			{" "}
			<HeaderBar />
			<div className='reset'>
				<h1>Forgot password Page</h1>
				<h2>To recieve a recovery email please enter your email adress below</h2>
				<br />
				<br />
				<label>Email: </label>
				<input type='text' placeholder='janeDoe@gmail.com' value={email} onChange={(e) => checkEmail(e)} />
				<br />
				<p>
					Go back to <NavLink to={RoutesObj.visual.sign_in.path}>{RoutesObj.visual.sign_in.name}</NavLink>
				</p>
				<br />
				<button onClick={() => getRecover()}>Get recovery email now</button>
				{errorMsg.length > 0 ? <p style={{ fontSize: "20px", color: "red" }}>{errorMsg}</p> : <></>}
				<FooterBar />
			</div>
		</>
	);
}
