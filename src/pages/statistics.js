import React from "react";
import { Grid } from "@mui/material";
import ListRecord from "../components/listRecord/listRecord";
import Chart from "../components/chart/chart";
import Summary from "../components/summary/summary";

function Statistics() {
	return (
		<Grid container justifyContent="center" width="95%" height="85%">
			<ListRecord />
			<Grid
				container
				direction="column"
				justifyContent="space-between"
				alignItems="center"
				lg={6}
				sx={{ mt: { xs: "4%", sm: "4%", md: "2%", lg: "0%" } }}
			>
				<Chart />
				<Summary />
			</Grid>
		</Grid>
	);
}

export default Statistics;
