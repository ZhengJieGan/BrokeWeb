import React, { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import ColorContext from "../../base/colorContext";

function DailySpent() {
	const color = useContext(ColorContext);

	return (
		<Grid
			sx={{
				height: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
			}}
			item
			container
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			xs={12}
			sm={12}
			md={12}
			lg={6}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-around"
				alignItems="center"
				textAlign="center"
				sx={{
					p: "5%",
					backgroundColor: color.white,
					boxShadow: 2,
					borderRadius: "20px",
					width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
					height: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
				}}
			>
				<Typography>test</Typography>
			</Box>
		</Grid>
	);
}

export default DailySpent;
