import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ColorContext from "../../base/colorContext";
import { PieChart } from "react-minimal-pie-chart";

const defaultLabelStyle = {
	fontSize: "5px",
	fontFamily: "Montserrat",
};

function Chart() {
	const color = useContext(ColorContext);

	const dataMock = [
		{ title: "Travel", value: 10, color: color.mainColor },
		{ title: "Work", value: 15, color: color.secondaryColor },
		{ title: "Food", value: 20, color: color.buttonColor },
	];

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
			<Box width="80%">
				<Typography variant="h5">
					This shows what category of items you spent the most.
				</Typography>
			</Box>

			<Box width="70%" height="70%">
				<PieChart
					data={dataMock}
					label={({ dataEntry }) =>
						`${dataEntry.title} = ${Math.round((dataEntry.value/45)*100)}%`
					}
					labelStyle={{
						...defaultLabelStyle,
					}}
				/>
			</Box>
		</Box>
	);
}

export default Chart;
