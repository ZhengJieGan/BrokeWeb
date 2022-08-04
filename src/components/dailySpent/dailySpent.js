import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Grid, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import ColorContext from "../../base/colorContext";
import Background from "../../assets/tips.svg";

function DailySpent() {
	const color = useContext(ColorContext);
	const data = useSelector((state) => state.reducerToday);

	return (
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
				justifyContent="flex-start"
				alignItems="center"
				textAlign="center"
				sx={{
					p: "5%",
					backgroundColor: color.white,
					boxShadow: 2,
					borderRadius: "20px",
					width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
					height: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
				}}
			>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					sx={{ height: "100%" }}
				>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Typography variant="body">
							The amount you have spent today
						</Typography>
						<Typography
							variant="body"
							component={motion.div}
							whileHover={{
								scale: 1.2,
								transition: { duration: 0.1 },
							}}
							fontWeight="bold"
							color={color.mainColor}
							fontSize={{
								xs: "25px",
								sm: "35px",
								md: "35px",
								lg: "35px",
							}}
						>
							RM {parseFloat(data).toFixed(2)}
						</Typography>
					</Box>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="space-around"
						alignItems="center"
					>
						<img src={Background} height={250} alt="tips" />
					</Box>
				</Box>
			</Box>
		</Grid>
	);
}

export default DailySpent;
