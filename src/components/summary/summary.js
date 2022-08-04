import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ColorContext from "../../base/colorContext";
import { useSelector } from "react-redux";

function Summary() {
	const color = useContext(ColorContext);
	const data = useSelector((state) => state.reducer);
	const total = useSelector((state) => state.reducerTotal);
	const category = useSelector((state) => state.reducerCategory);

	let text = "";
	let highest = 0;

	for (let i = 0; i < category.length; i++) {
		if (category[i].value > highest) {
			highest = category[i].value;
			text = category[i].title;
		}
	}

	// console.log(text);
	// console.log(highest);

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-around"
			alignItems="center"
			sx={{
				backgroundColor: color.white,
				boxShadow: 2,
				borderRadius: "20px",
				width: "90%",
				height: "38%",
			}}
		>
			{data.length > 0 ? (
				<Box
					width="100%"
					height="100%"
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					alignItems="center"
				>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Typography variant="body">
							Your total spending
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
							RM {parseFloat(total).toFixed(2)}
						</Typography>
					</Box>

					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<Typography variant="body">
							Most of your spendings are in{" "}
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
							{text}
						</Typography>
					</Box>
				</Box>
			) : (
				<Box>
					<Typography
						variant="body"
						fontWeight="bold"
						fontSize={{
							xs: "20px",
							sm: "25px",
							md: "25px",
							lg: "25px",
						}}
					>
						You have no data!
					</Typography>
				</Box>
			)}
		</Box>
	);
}

export default Summary;
