import React, { useContext, useState } from "react";
import {
	Typography,
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	ButtonBase,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthenticationLayout from "../layouts/authentications";
import ColorContext from "../base/colorContext";
import { signIn } from "../actions/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

function LogIn() {
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem("profile"))
	);

	const dispatch = useDispatch();
	const history = useNavigate();

	// const handleCallbackResponse = (response) => {
	// 	try {
	// 		const data = jwtDecode(response.credential);

	// 		const googleData = {
	// 			name: data.name,
	// 			email: data.email,
	// 			password: "xxxxxxxxxx",
	// 		};

	// 		dispatch(signUp(googleData, history));
	// 		//dispatch({type: "AUTH", data: {result:{name}}})
	// 		history("../user/dashboard", { replace: true });
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	/* global google */
	// 	google.accounts.id.initialize({
	// 		client_id:
	// 			"832058170156-ejf8kbgqdja9ml6ft0jr4jlq26f5be19.apps.googleusercontent.com",
	// 		callback: handleCallbackResponse,
	// 	});
	// 	google.accounts.id.renderButton(document.getElementById("signinDiv"), {
	// 		theme: "outline",
	// 		size: "large",
	// 		width: "1000px",
	// 	});
	// });

	// useEffect(() => {
	// 	const token = userData["jti"];
	// 	setUserData(JSON.parse(localStorage.getItem("profile")));
	// }, []);

	const handleSubmit = (event) => {
		// notify();
		event.preventDefault();
		// console.log(userData);
		dispatch(signIn(userData, history));
	};

	const color = useContext(ColorContext);

	return (
		<AuthenticationLayout type="login">
			<ThemeProvider theme={theme}>
				<Container component="main" maxWidth="xs">
					
					<ToastContainer />
					<CssBaseline />
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="flex-start"
					>
						<Typography
							variant="h3"
							fontWeight="bold"
							color={{
								xs: "white",
								sm: "white",
								md: "white",
								lg: "black",
							}}
							gutterBottom
						>
							Welcome back to Broke!
						</Typography>
						<Typography
							variant="h6"
							color={{
								xs: "white",
								sm: "white",
								md: "white",
								lg: "black",
							}}
						>
							Keep tracking your expenses to find out why you are
							always broke.
						</Typography>
					</Box>
					<Box
						sx={{
							marginTop: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}
					>
						<Typography
							component="h1"
							variant="h5"
							color={{
								xs: "white",
								sm: "white",
								md: "white",
								lg: "black",
							}}
						>
							Log In
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={(e) => {
									setUserData({
										...userData,
										email: e.target.value,
									});
								}}
							/>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={(e) => {
									setUserData({
										...userData,
										password: e.target.value,
									});
								}}
							/>

							<motion.div
								whileHover={{
									scale: 1.05,
									transition: { duration: 0.1 },
								}}
							>
								<Button
									type="submit"
									// component={Link}
									// to="/user/dashboard"
									fullWidth
									variant="contained"
									sx={{
										mt: 3,
										mb: 2,
										borderRadius: "30px",
										backgroundColor: color.buttonColor,
										"&:hover": {
											backgroundColor: color.buttonColor,
										},
									}}
								>
									Log In
								</Button>
							</motion.div>
							{/* <Button
								component="div"
								id="signinDiv"
								sx={{
									width: "100%",
									borderRadius: "10px",
									p: "0%",
									mb: "5%",
								}}
							/> */}
						</Box>
					</Box>
					<ButtonBase component={Link} to="/sign-up">
						<Typography
							color={{
								xs: "white",
								sm: "white",
								md: "white",
								lg: "black",
							}}
						>
							Dont have an account? Sign Up Here!
						</Typography>
					</ButtonBase>
				</Container>
			</ThemeProvider>
		</AuthenticationLayout>
	);
}

export default LogIn;
