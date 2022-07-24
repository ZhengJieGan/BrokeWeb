import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import ColorContext from "../../base/colorContext";
import PaginationList from "./paginationList";

function ListRecord() {
	const color = useContext(ColorContext);

	return (
		<Grid
			item
			container
			justifyContent="center"
			width="100%"
			sx={{ height: { xs: "80%", sm: "80%", md: "100%", lg: "100%" } }}
			lg={6}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				sx={{
					backgroundColor: color.white,
					boxShadow: 2,
					borderRadius: "20px",
					width: "90%",
					height: "100%",
				}}
			>
				<PaginationList />
			</Box>
		</Grid>
	);
}

export default ListRecord;
