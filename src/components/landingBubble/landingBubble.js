import React, { useContext } from "react";
import { Grid, Typography, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import ColorContext from "../../base/colorContext";

function LandingBubble(props) {
	const color = useContext(ColorContext);

	const variants = {
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
				duration: props.timing,
			},
		},
	};

	return (
		<Grid
			container
			component={motion.div}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.1 },
			}}
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
			variants={variants}
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
					variant="body"
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
					variant="body"
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
