import React, { useContext } from "react";
import { Grid, Typography, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import ColorContext from "../../base/colorContext";

function LandingBubble(props) {
	const color = useContext(ColorContext);

	return (
		<Grid
			container
			component={motion.div}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.1 },
			}}
			height="60%"
			direction="column"
			xs={12}
			lg={4}
			justifyContent="center"
			alignItems="center"
		>
			<Avatar
				sx={{
					bgcolor: color.mainColor,
					width: 180,
					height: 180,
					mb: "5%",
				}}
			>
				<Grid
					container
					direction="row"
					alignItems="center"
					justifyContent="center"
					mt="10%"
				>
					<Typography fontSize="80px">{props.icon}</Typography>
				</Grid>
			</Avatar>
			<Box
				width="50%"
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<Typography
					variant="h5"
					fontWeight="bold"
					gutterBottom
					fontSize={{
						xs: "20px",
						sm: "30px",
						md: "30px",
						lg: "30px",
					}}
				>
					{props.title}
				</Typography>
				<Typography
					variant="h6"
					textAlign="justify"
					fontSize={{
						xs: "15px",
						sm: "15px",
						md: "15px",
						lg: "15px",
					}}
				>
					{props.label}
				</Typography>
			</Box>
		</Grid>
	);
}

export default LandingBubble;
