import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import ColorContext from "../../base/colorContext";
import SingleRecord from "./singleRecord";

function ListRecord() {
	const color = useContext(ColorContext);

	return (
		<Grid item container justifyContent="center" lg={6}>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="flex-start"
				alignItems="center"
				sx={{
					backgroundColor: color.white,
					boxShadow: 2,
					borderRadius: "20px",
					width: "90%",
					height: "100%",
				}}
			>
				{<SingleRecord />}
			</Box>
		</Grid>
	);
}

export default ListRecord;
