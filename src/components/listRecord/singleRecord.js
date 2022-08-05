import React, { useContext, useState, useEffect } from "react";
import { Typography, Box, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteExpenses } from "../../actions/expenses";
import ColorContext from "../../base/colorContext";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddRecord from "../addRecord/addRecord";

function SingleRecord(props) {
	const [face, setFace] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		switch (props.face) {
			case 1:
				setFace(
					<SentimentVeryDissatisfiedIcon
						fontSize="large"
						color="error"
					/>
				);
				break;
			case 2:
				setFace(
					<SentimentDissatisfiedIcon fontSize="large" color="error" />
				);
				break;
			case 3:
				setFace(
					<SentimentSatisfiedIcon fontSize="large" color="warning" />
				);
				break;
			case 4:
				setFace(
					<SentimentSatisfiedAltIcon
						fontSize="large"
						color="warning"
					/>
				);
				break;
			case 5:
				setFace(
					<SentimentVerySatisfiedIcon
						fontSize="large"
						color="success"
					/>
				);
				break;

			default:
				setFace(
					<SentimentSatisfiedIcon fontSize="large" color="warning" />
				);
				break;
		}
	}, [props.face]);

	const color = useContext(ColorContext);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box
			display="flex"
			flexDirection="row"
			justifyContent="space-evenly"
			alignItems="center"
			sx={{
				width: "90%",
				height: "10%",
				p: "2%",
				mb: { xs: "6%", sm: "5%", md: "5%", ld: "3%" },
			}}
		>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				width="20%"
			>
				{face}
			</Box>

			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-around"
				alignItems="flex-start"
				width="70%"
			>
				<Typography
					variant="body"
					fontSize={{
						xs: "12px",
						sm: "15px",
						md: "15px",
						lg: "15px",
					}}
				>
					Category : {props.title}
				</Typography>
				<Typography
					variant="body"
					fontSize={{
						xs: "12px",
						sm: "15px",
						md: "15px",
						lg: "15px",
					}}
				>
					Price : RM {props.price}
				</Typography>
				<Typography
					variant="body"
					fontSize={{
						xs: "12px",
						sm: "15px",
						md: "15px",
						lg: "15px",
					}}
				>
					Remarks : {props.remarks}
				</Typography>
				<Typography
					variant="body"
					fontSize={{
						xs: "12px",
						sm: "15px",
						md: "15px",
						lg: "15px",
					}}
				>
					Date : {props.date}
				</Typography>
			</Box>

			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				alignItems="flex-end"
				width={{ xs: "25%", sm: "20%", md: "15%", lg: "10%" }}
				sx={{ borderRadius: "20px" }}
			>
				<motion.div
					whileHover={{
						scale: 1.5,
						transition: { duration: 0.1 },
					}}
				>
					<EditIcon
						sx={{ color: color.mainColor }}
						onClick={handleOpen}
					/>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.5,
						transition: { duration: 0.1 },
					}}
				>
					<DeleteIcon
						sx={{ color: color.mainColor }}
						onClick={() => dispatch(deleteExpenses(props.id))}
					/>
				</motion.div>
			</Box>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{
						height: "70%",
						width: { xs: "80%", sm: "60%", md: "40", lg: "30%" },
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<AddRecord
						types="update"
						id={props.id}
						price={props.price}
						remarks={props.remarks}
						category={props.title}
						happiness={props.face}
						closeHandler={handleClose}
					/>
				</Box>
			</Modal>
		</Box>
	);
}

export default SingleRecord;
