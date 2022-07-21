import React from "react";
import { motion } from "framer-motion";
import { Grid, Typography, Box, Button } from "@mui/material";
import { ReactComponent as Background } from "../assets/money.svg";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import EditIcon from "@mui/icons-material/Edit";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LandingBubble from "../components/landingBubble/landingBubble";

function Landing() {
	return (
		<Grid height="100vh" width="100%">
			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				height="100vh"
				width="100%"
				sx={{
					background:
						"linear-gradient(to right bottom, #11998e, #38ef7d)",
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
						height={{ xs: "40%", sm: "40%", md: "40%", lg: "30%" }}
					>
						<Typography
							variant="h2"
							fontWeight="medium"
							color="white"
							gutterBottom
						>
							Welcome to Broke!
						</Typography>

						<Box>
							<Typography variant="h5" color="white" gutterBottom>
								A super user friendly platform to records all of
								your spendings.
							</Typography>
							<Typography variant="h5" color="white">
								Helps you not to be so broke as well.
							</Typography>
						</Box>

						<motion.div
							whileHover={{
								scale: 1.1,
								transition: { duration: 0.1 },
							}}
						>
							<Button
								variant="contained"
								size="large"
								color="success"
								component={Link}
								to="/sign-up"
								sx={{ borderRadius: "30px" }}
							>
								Get started with Broke
							</Button>
						</motion.div>
					</Box>
				</Grid>
				<Grid
					container
					justifyContent="center"
					alignItems="center"
					xs={10}
					sm={10}
					md={10}
					lg={5}
				>
					<Box
						height={{ xs: "0%", sm: "0%", md: "0%", lg: "60%" }}
						width={{ xs: "0%", sm: "0%", md: "0%", lg: "60%" }}
					>
						<Background />
					</Box>
				</Grid>
			</Grid>

			<Grid
				container
				direction="row"
				justifyContent="center"
				alignItems="center"
				height="100vh"
				width="100%"
			>
				<LandingBubble
					title="Safe"
					label="All data is stored securely in a cloud MongoDB database that is managed by people from MongoDB itself."
					icon={<LockIcon fontSize="inherit" />}
				/>
				<LandingBubble
					title="User Friendly"
					label="Straight forward user interface where everyone is guaranteed to be an expert in tracking their expenses."
					icon={<EditIcon fontSize="inherit" />}
				/>
				<LandingBubble
					title="Cross Platform"
					label="Allowing users to track their expenses using the web or mobile because it is available on Android and iOS as well."
					icon={<PhoneAndroidIcon fontSize="inherit" />}
				/>
			</Grid>
		</Grid>
	);
}

export default Landing;
