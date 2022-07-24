import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Grid, Typography, Box, Button } from "@mui/material";
import { ReactComponent as Background } from "../assets/landing.svg";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import EditIcon from "@mui/icons-material/Edit";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LandingBubble from "../components/landingBubble/landingBubble";
import ColorContext from "../base/colorContext";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

function Landing() {
	const color = useContext(ColorContext);
	const { width } = useWindowDimensions();

	const titleVariants = {
		offscreen: {
			y: 300,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};

	const descVariants = {
		offscreen: {
			y: 250,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1.2,
			},
		},
	};

	const buttonVariants = {
		offscreen: {
			y: 180,
			opacity: 0,
		},
		onscreen: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1.6,
			},
		},
	};

	const svgVariants = {
		offscreen: {
			x: 300,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 1.2,
			},
		},
	};

	return (
		<Grid height="100vh" width="100%" container justifyContent="center">
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				height="100vh"
				width="100%"
				sx={{
					background: `linear-gradient(to right bottom, ${color.mainColor}, ${color.secondaryColor})`,
				}}
			>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					height="100%"
					xs={10}
					sm={10}
					md={10}
					lg={5}
				>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						textAlign="flex-start"
						alignItems="flex-start"
						height={{ xs: "55%", sm: "40%", md: "40%", lg: "30%" }}
					>
						<Typography
							component={motion.h1}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={titleVariants}
							variant="h2"
							fontWeight="bold"
							color="white"
							gutterBottom
						>
							Welcome to Broke!
						</Typography>

						<Box>
							<Typography
								component={motion.h1}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={descVariants}
								variant="h5"
								color="white"
								gutterBottom
							>
								A super user friendly platform to records all of
								your spendings.
							</Typography>
							<Typography
								component={motion.h1}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.8 }}
								variants={descVariants}
								variant="h5"
								color="white"
							>
								Helps you not to be so broke as well.
							</Typography>
						</Box>

						<motion.div
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
							component={motion.h1}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={buttonVariants}
						>
							<Button
								variant="contained"
								size="large"
								component={Link}
								to="/sign-up"
								sx={{
									borderRadius: "30px",
									backgroundColor: color.buttonColor,
									"&:hover": {
										backgroundColor: color.buttonColor,
									},
								}}
							>
								Get started with Broke
							</Button>
						</motion.div>
					</Box>
				</Grid>
				<Grid
					item
					container
					justifyContent="center"
					alignItems="center"
					xs={0}
					sm={0}
					md={0}
					lg={5}
				>
					{width > 1200 ? (
						<Box
							component={motion.div}
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.8 }}
							variants={svgVariants}
						>
							<Background />
						</Box>
					) : null}
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				height="100vh"
				width="90%"
			>
				<LandingBubble
					title="Safe"
					label="All data is stored securely in a cloud MongoDB database that is managed by people from MongoDB itself."
					icon={<LockIcon fontSize="inherit" />}
					timing={0.4}
				/>
				<LandingBubble
					title="User Friendly"
					label="Straight forward user interface where everyone is guaranteed to be an expert in tracking their expenses."
					icon={<EditIcon fontSize="inherit" />}
					timing={0.7}
				/>
				<LandingBubble
					title="Cross Platform"
					label="Allowing users to track their expenses using the web or mobile because it is available on Android and iOS as well."
					icon={<PhoneAndroidIcon fontSize="inherit" />}
					timing={1.0}
				/>
			</Grid>
		</Grid>
	);
}

export default Landing;
