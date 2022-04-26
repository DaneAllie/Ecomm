import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoutesObj } from "../../routes/AllRoutes";
import { validEmail } from "../../utils/Util_fuctions";

export default function AuthForm({ type, onFinalize }) {
	const [email, setemail] = useState("");
	const [passw, setpassw] = useState("");
	const [passw2, setpassw2] = useState("");
	const [isDis, setisDis] = useState(true);
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

	function cPass(e) {
		setpassw(e);
		if (e.length < 5) {
			console.log("password must be minimum of 6 chacters long");
			seterrorMsg("password must be minimum of 6 chacters long");
			setisDis(true);
		} else {
			console.log("password is 6 chacters long");
			seterrorMsg("");
			setisDis(false);
		}
	}

	function checkPassw(e) {
		setpassw2(e);

		if (e === passw) {
			console.log("passwords match");
			seterrorMsg("");
			setisDis(false);
		} else {
			console.log("passwords do not match");
			seterrorMsg("passwords do not match");
			setisDis(true);
		}
	}
	return (
		<>
			<label>Email: </label>
			<input type='text' placeholder='janeDoe@gmail.com' value={email} onChange={(e) => checkEmail(e)} />

			<br />

			<label>Password: </label>
			<input
				type='password'
				value={passw}
				onChange={(e) => {
					cPass(e.target.value);
				}}
			/>

			<br />

			<label>Confirm password: </label>
			<input type='password' value={passw2} onChange={(e) => checkPassw(e.target.value)} />

			<br />
			<p>
				Forgot password? <NavLink to={RoutesObj.visual.forgot_pass.path}>{RoutesObj.visual.forgot_pass.name}</NavLink>
			</p>
			<br />

			<button disabled={isDis} onClick={() => onFinalize(email, passw)}>
				{type}
			</button>

			<br />
			<br />
			{errorMsg.length > 0 ? <p style={{ fontSize: "20px", color: "red" }}>{errorMsg}</p> : <></>}
		</>
	);
}
