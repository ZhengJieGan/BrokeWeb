import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import ColorContext from "../../base/colorContext";

function Summary() {
	const color = useContext(ColorContext);
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
			<Typography>test</Typography>
		</Box>
	);
}

export default Summary;
