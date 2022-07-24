import React, { useContext } from "react";
import { Grid, Box, Avatar, Typography, Button } from "@mui/material";
import ColorContext from "../base/colorContext";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

function Profile() {
	const color = useContext(ColorContext);
	return (
		<Grid container justifyContent="center" width="95%" height="85%">
			<Grid
				sx={{
					height: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
				}}
				item
				container
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				xs={12}
				sm={12}
				md={12}
				lg={6}
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					alignItems="center"
					textAlign="flex-start"
					sx={{
						p: "5%",
						backgroundColor: color.white,
						boxShadow: 2,
						borderRadius: "20px",
						width: { xs: "80%", sm: "60%", md: "60%", lg: "50%" },
						height: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
					}}
				>
					<Avatar
						sx={{
							bgcolor: color.mainColor,
							width: 100,
							height: 100,
						}}
					>
						<Box mt="10%">
							<Typography fontSize="50px">
								<PersonIcon fontSize="inherit" />
							</Typography>
						</Box>
					</Avatar>

					<Box
						width="80%"
						height="30%"
						display="flex"
						flexDirection="column"
						justifyContent="space-evenly"
					>
						<Typography variant="body">Name: user</Typography>

						<Typography variant="body">
							Email: user@gmail.com
						</Typography>

						<Typography variant="body">
							User Since: xx - xx - xxxx
						</Typography>
					</Box>
					<Box
						width="80%"
						height="30%"
						display="flex"
						flexDirection="column"
						justifyContent="space-around"
					>
						<motion.div
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<Button
								variant="contained"
								fullWidth
								size="large"
								sx={{
									borderRadius: "30px",
									backgroundColor: color.buttonColor,
									"&:hover": {
										backgroundColor: color.buttonColor,
									},
								}}
							>
								Log Out
							</Button>
						</motion.div>

						<motion.div
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<Button
								variant="contained"
								fullWidth
								size="large"
								color="error"
								sx={{
									borderRadius: "30px",
								}}
							>
								Delete Account
							</Button>
						</motion.div>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}

export default Profile;
