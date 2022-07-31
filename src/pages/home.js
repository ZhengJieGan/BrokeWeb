import React from "react";
import { Grid } from "@mui/material";
import AddRecord from "../components/addRecord/addRecord";
import DailySpent from "../components/dailySpent/dailySpent";

function Home() {
	return (
		<Grid container width="95%" height="85%">
			<AddRecord types="create"/>
			<DailySpent />
		</Grid>
	);
}

export default Home;
