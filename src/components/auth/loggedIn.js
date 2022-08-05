import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function LoggedIn(props) {
	const userData = JSON.parse(localStorage.getItem("profile"));
	const location = useLocation();

	if (userData)
		return (
			<Navigate
				to={location.state ? location.state : "/user/dashboard"}
				replace={true}
			/>
		);

	return props.children;
}

export default LoggedIn;
