import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SignUp from "./pages/signUp";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />}/>
			</Routes>
		</div>
	);
}

export default App;
