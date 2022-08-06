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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import AuthenticationLayout from "../layouts/authentications";
import ColorContext from "../base/colorContext";
import { signUp } from "../actions/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

function SignUp() {
	const dispatch = useDispatch();
	const history = useNavigate();

	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(userData);

		dispatch(signUp(userData, history));
	};

	const color = useContext(ColorContext);

	return (
		<AuthenticationLayout type="signup">
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
							Get started with Broke Now!
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
							One step closer to become not so broke.
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
							Sign Up
						</Typography>
						<Box
							component="form"
							onSubmit={handleSubmit}
							noValidate
							sx={{ mt: 1 }}
						>
							<TextField
								margin="normal"
								fullWidth
								required
								id="name"
								label="Name"
								name="name"
								autoComplete="name"
								onChange={(e) => {
									setUserData({
										...userData,
										name: e.target.value,
									});
								}}
							/>
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
									Sign Up
								</Button>
							</motion.div>
						</Box>
					</Box>
					<ButtonBase component={Link} to="/log-in">
						<Typography
							color={{
								xs: "white",
								sm: "white",
								md: "white",
								lg: "black",
							}}
						>
							Already have an account? Log In Here!
						</Typography>
					</ButtonBase>
				</Container>
			</ThemeProvider>
		</AuthenticationLayout>
	);
}

export default SignUp;
