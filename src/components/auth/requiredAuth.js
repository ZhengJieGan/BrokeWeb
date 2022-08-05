import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequiredAuth(props) {
	const userData = JSON.parse(localStorage.getItem("profile"));
	const location = useLocation();

	if (!userData) {
		// Redirect them to the /login page, but save the current location they were
		// trying to go to when they were redirected. This allows us to send them
		// along to that page after they login, which is a nicer user experience
		// than dropping them off on the home page.
		return (
			<Navigate to="/log-in" state={location.pathname} replace={true} />
		);
	}

	return props.children;
}

export default RequiredAuth;
