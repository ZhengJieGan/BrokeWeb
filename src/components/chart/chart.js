import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ColorContext from "../../base/colorContext";
import { PieChart } from "react-minimal-pie-chart";
import { motion } from "framer-motion";
import ChartViz from "../../assets/chart.svg";
import { useSelector } from "react-redux";

const defaultLabelStyle = {
	fontSize: "5px",
	fontFamily: "Inter",
};

function Chart() {
	const color = useContext(ColorContext);
	const data = useSelector((state) => state.reducerCategory);

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-around"
			alignItems="center"
			textAlign="center"
			sx={{
				backgroundColor: color.white,
				boxShadow: 2,
				borderRadius: "20px",
				width: "90%",
				height: "58%",
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
					textAlign="center"
				>
					<Box width="80%">
						<Typography
							variant="body"
							fontSize={{
								xs: "20px",
								sm: "20px",
								md: "20px",
								lg: "20px",
							}}
						>
							This shows what category of items you spent the
							most.
						</Typography>
					</Box>

					<Box
						width="70%"
						height="70%"
						component={motion.div}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.1 },
						}}
					>
						<PieChart
							data={data}
							label={({ dataEntry }) =>
								Math.round(dataEntry.value) > 10
									? `${dataEntry.title} = ${Math.round(
											dataEntry.value
									  )}%`
									: null
							}
							labelStyle={{
								...defaultLabelStyle,
							}}
						/>
					</Box>
				</Box>
			) : (
				<Box
					width="90%"
					height="90%"
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					alignItems="center"
					textAlign="center"
				>
					<img src={ChartViz} alt="Viz" height={250} width={250} />
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
						Start recording your spendings to visualize your
						expenses!
					</Typography>
				</Box>
			)}
		</Box>
	);
}

export default Chart;
