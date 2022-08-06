import React, { useContext } from "react";
import {
	Grid,
	Box,
	Avatar,
	Typography,
	Button,
	Modal,
	ButtonBase,
} from "@mui/material";
import ColorContext from "../base/colorContext";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../actions/auth";

function Profile() {
	const color = useContext(ColorContext);
	const dispatch = useDispatch();
	const history = useNavigate();

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const userData = JSON.parse(localStorage.getItem("profile"));
	// console.log(userData);

	const logout = () => {
		dispatch({ type: "LOGOUT" });
		history("../../log-in", { replace: true });
	};

	const deleteUser = () => {
		dispatch(deleteAccount(userData.result._id));
		dispatch({ type: "DELETE_USER" });
		handleClose();
		history("/", { replace: true });
	};

	return (
		<Grid container justifyContent="center" width="95%" height="85%">
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
					textAlign="flex-start"
					sx={{
						p: "5%",
						backgroundColor: color.white,
						boxShadow: 2,
						borderRadius: "20px",
						width: { xs: "80%", sm: "60%", md: "60%", lg: "50%" },
						height: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
					}}
				>
					{userData ? (
						<Avatar
							sx={{
								bgcolor: color.mainColor,
								width: 100,
								height: 100,
							}}
							src={userData["picture"]}
						/>
					) : (
						<Avatar
							sx={{
								bgcolor: color.mainColor,
								width: 100,
								height: 100,
							}}
						>
							<Box mt="10%">
								<Typography fontSize="50px">
									<PersonIcon fontSize="inherit" />
								</Typography>
							</Box>
						</Avatar>
					)}

					<Box
						width="80%"
						height="30%"
						display="flex"
						flexDirection="column"
						justifyContent="space-evenly"
					>
						<Typography variant="body">
							Name: {userData.result.name}
						</Typography>

						<Typography variant="body">
							Email: {userData.result.email}
						</Typography>

						<Typography variant="body">
							User Since:{" "}
							{userData.result.createdAt.split("T")[0]}
						</Typography>
					</Box>
					<Box
						width="80%"
						height="30%"
						display="flex"
						flexDirection="column"
						justifyContent="space-around"
					>
						<motion.div
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<Button
								variant="contained"
								fullWidth
								onClick={logout}
								size="large"
								sx={{
									borderRadius: "30px",
									backgroundColor: color.buttonColor,
									"&:hover": {
										backgroundColor: color.buttonColor,
									},
								}}
							>
								Log Out
							</Button>
						</motion.div>

						<motion.div
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.1 },
							}}
						>
							<Button
								variant="contained"
								onClick={handleOpen}
								fullWidth
								size="large"
								color="error"
								sx={{
									borderRadius: "30px",
								}}
							>
								Delete Account
							</Button>
						</motion.div>
					</Box>
				</Box>
			</Grid>
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
						width: { xs: "90%", sm: "80%", md: "40", lg: "30%" },
						height: { xs: "20%", sm: "20%", md: "20", lg: "20%" },
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						sx={{
							textAlign: "center",
							backgroundColor: "#ffffff",
							borderRadius: "10px",
							height: "80%",
							width: "90%",
						}}
					>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							height="100%"
						>
							<Typography variant="h6">
								Are you sure you want to delete your account?
								This action is not reversible!
							</Typography>
						</Box>
						<Box
							display="flex"
							flexDirection="row"
							justifyContent="center"
							width="100%"
							height="30%"
						>
							<ButtonBase
								onClick={deleteUser}
								sx={{
									width: "50%",
									height: "100%",
									borderBottomLeftRadius: "10px",
									backgroundColor: "#ffffff",
									"&:hover": {
										backgroundColor: "#EF7A7A",
									},
									border: 1,
									borderColor: "#EDEDEC",
								}}
							>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									sx={{
										width: "100%",
										height: "100%",
										borderBottomLeftRadius: "10px",
									}}
								>
									<Typography>Yes</Typography>
								</Box>
							</ButtonBase>
							<ButtonBase
								onClick={handleClose}
								sx={{
									width: "50%",
									height: "100%",
									borderBottomRightRadius: "10px",
									backgroundColor: "#ffffff",
									"&:hover": {
										backgroundColor: "#7AEF7E",
									},
									border: 1,
									borderColor: "#EDEDEC",
								}}
							>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									sx={{
										borderBottomRightRadius: "10px",
										width: "100%",
										height: "100%",
									}}
								>
									<Typography>No</Typography>
								</Box>
							</ButtonBase>
						</Box>
					</Box>
				</Box>
			</Modal>
		</Grid>
	);
}

export default Profile;
