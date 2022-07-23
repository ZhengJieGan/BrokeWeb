import React from "react";
import { Typography, Box } from "@mui/material";

function SingleRecord() {
	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="space-around"
			sx={{
				backgroundColor: "pink",
				width: "90%",
				height: "20%",
				borderRadius: "20px",
				pl: "5%",
				mt: "2%",
				mb: "2%",
			}}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-around"
				alignItems="flex-start"
				width="75%"
			>
				<Typography variant="body">Category : </Typography>
				<Typography variant="body">Price : </Typography>
				<Typography variant="body">Remarks : </Typography>
			</Box>

			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				width="25%"
				sx={{ backgroundColor: "yellow", borderRadius: "20px" }}
			>
				Face
			</Box>
		</Box>
	);
}

export default SingleRecord;
