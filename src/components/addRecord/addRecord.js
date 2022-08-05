import React, { useContext, useState } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import DropDown from "../dropDown/dropDown";
import RadioGroupRating from "../rating/rating";
import ColorContext from "../../base/colorContext";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { createExpenses, updateExpenses } from "../../actions/expenses";

function AddRecord(props) {
	const color = useContext(ColorContext);
	const dispatch = useDispatch();

	const userData = JSON.parse(localStorage.getItem("profile"));

	const [expensesData, setExpensesData] = useState({
		price: "",
		remarks: "No comment",
		category: "Others",
		happiness: 3,
		createdBy: userData.result._id,
	});

	const categoryHandler = (feedback) => {
		setExpensesData({ ...expensesData, category: feedback });
	};

	const ratingHandler = (feedback) => {
		setExpensesData({ ...expensesData, happiness: feedback });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (props.types === "create") {
			dispatch(createExpenses(expensesData));
			event.target.reset();
			// setExpensesData({
			// 	...expensesData,
			// 	price: "",
			// 	remarks: "",
			// 	category: "",
			// 	happiness: 3,
			// });
		} else if (props.types === "update") {
			dispatch(updateExpenses(props.id, expensesData));
			props.closeHandler();
		}
	};

	const clear = () => {};

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
			lg={props.types === "create" ? 6 : 12}
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
					variant="body"
					fontWeight="bold"
					fontSize={{
						xs: "20px",
						sm: "25px",
						md: "25px",
						lg: "30px",
					}}
					gutterBottom
				>
					{props.types === "create"
						? "What did you spent on today?"
						: "Feel free to edit."}
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
					<RadioGroupRating
						ratingHandler={ratingHandler}
						data={props.happiness}
						types={props.types}
					/>
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
					<DropDown
						categoryHandler={categoryHandler}
						data={props.category}
						types={props.types}
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
						How much did you spent on that?
					</Typography>
					<TextField
						fullWidth
						label="Price (RM)"
						id="price"
						name="price"
						type="number"
						required
						onChange={(e) => {
							setExpensesData({
								...expensesData,
								price: parseFloat(e.target.value).toFixed(2),
							});
						}}
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
						// value={expensesData.remarks}
						onChange={(e) =>
							setExpensesData({
								...expensesData,
								remarks: e.target.value,
							})
						}
					/>
					<motion.div
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.1 },
						}}
					>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							onClick={clear}
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
							{props.types === "create"
								? "Add New Record"
								: "Save changes"}
						</Button>
					</motion.div>
				</Box>
			</Box>
		</Grid>
	);
}

export default AddRecord;
