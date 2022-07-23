import React, { useContext } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import DropDown from "../dropDown/dropDown";
import RadioGroupRating from "../rating/rating";
import ColorContext from "../../base/colorContext";
import { motion } from "framer-motion";

function AddRecord() {
	const color = useContext(ColorContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			price: data.get("price"),
			remarks: data.get("remark"),
		});
	};
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
				<Typography
					variant="h3"
					fontSize={{
						xs: "20px",
						sm: "20px",
						md: "20px",
						lg: "20px",
					}}
					gutterBottom
				>
					What did you spent on today?
				</Typography>

				<Box
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
				>
					<Typography
						variant="body"
						fontSize={{
							xs: "15px",
							sm: "15px",
							md: "15px",
							lg: "15px",
						}}
					>
						How happy are you regarding the purchased you made?
					</Typography>
					<RadioGroupRating />
				</Box>
				<Box
					component="form"
					onSubmit={handleSubmit}
					display="flex"
					flexDirection="column"
					alignItems="flex-start"
					justifyContent="space-around"
					sx={{ width: "80%", height: "60%" }}
				>
					<Typography
						variant="body"
						fontSize={{
							xs: "15px",
							sm: "15px",
							md: "15px",
							lg: "15px",
						}}
					>
						Select the category that you spent on.
					</Typography>
					<DropDown />

					<Typography
						variant="body"
						fontSize={{
							xs: "15px",
							sm: "15px",
							md: "15px",
							lg: "15px",
						}}
					>
						How much did you spent on that?
					</Typography>
					<TextField
						fullWidth
						label="Price (RM)"
						id="price"
						name="price"
						type="number"
					/>

					<Typography
						variant="body"
						fontSize={{
							xs: "15px",
							sm: "15px",
							md: "15px",
							lg: "15px",
						}}
					>
						Wanna add more details?
					</Typography>
					<TextField
						fullWidth
						label="Remark"
						id="remark"
						name="remark"
					/>

					<Button
						type="submit"
						fullWidth
						component={motion.div}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.1 },
						}}
						variant="contained"
						sx={{
							mt: 3,
							mb: 2,
							borderRadius: "30px",
							backgroundColor: color.buttonColor,
							"&:hover": {
								backgroundColor: color.buttonColor,
							},
						}}
					>
						Add New Record
					</Button>
				</Box>
			</Box>
		</Grid>
	);
}

export default AddRecord;
