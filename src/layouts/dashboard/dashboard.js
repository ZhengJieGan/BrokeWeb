import React, { useContext, useEffect, useState } from "react";
import SideBar from "./sideBar";
import {
	Grid,
	Drawer,
	Box,
	Toolbar,
	Container,
	Typography,
	AppBar,
	IconButton,
	ButtonBase,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import ColorContext from "../../base/colorContext";
import { motion } from "framer-motion";

const drawerWidth = 250;

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

function Dashboard(props) {
	// const [title, setTitle] = useState("Broke");
	const location = useLocation();
	const { pathname: pathName } = location;
	const { width } = useWindowDimensions();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [firstColor, setFirstColor] = useState("black");
	const [secondColor, setSecondColor] = useState("black");
	const [thirdColor, setThirdColor] = useState("black");

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window() : undefined;
	const color = useContext(ColorContext);

	useEffect(() => {
		switch (pathName) {
			case "/user/dashboard":
				setFirstColor(color.mainColor);
				setSecondColor("black");
				setThirdColor("black");
				break;
			case "/user/statistics":
				setSecondColor(color.mainColor);
				setThirdColor("black");
				setFirstColor("black");
				break;
			case "/user/profile":
				setThirdColor(color.mainColor);
				setSecondColor("black");
				setFirstColor("black");
				break;

			default:
				break;
		}
	}, [pathName, color.mainColor]);

	return (
		<Box display="flex" flexDirection="column" width="100%" height="100vh">
			<AppBar
				position="absolute"
				sx={{
					zIndex: "modal",
					backgroundColor: "#ffffff",
					width: { sm: "100%" },
				}}
			>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ ml: 2, mr: 2, display: { md: "none" } }}
						>
							<MenuIcon style={{ color: "black" }} />
						</IconButton>

						<Box
							display="flex"
							justifyContent="space-between"
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "flex" },
							}}
						>
							<Typography
								variant="h5"
								color="black"
								fontWeight="bold"
							>
								BROKE
							</Typography>
							{width > 900 ? (
								<Box
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: { md: "50%", lg: "30%" } }}
								>
									<motion.div
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.1 },
										}}
									>
										<ButtonBase
											component={Link}
											to="/user/dashboard"
										>
											<Typography
												variant="body"
												color={firstColor}
											>
												Add Expenses
											</Typography>
										</ButtonBase>
									</motion.div>

									<motion.div
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.1 },
										}}
									>
										<ButtonBase
											component={Link}
											to="/user/statistics"
										>
											<Typography
												variant="body"
												color={secondColor}
											>
												Statistics
											</Typography>
										</ButtonBase>
									</motion.div>

									<motion.div
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.1 },
										}}
									>
										<ButtonBase
											component={Link}
											to="/user/profile"
										>
											<Typography
												variant="body"
												color={thirdColor}
											>
												Profile
											</Typography>
										</ButtonBase>
									</motion.div>
								</Box>
							) : null}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box display="flex" flexDirection="row">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "block", md: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					<SideBar />
				</Drawer>

				<Box
					width="100%"
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="100vh"
				>
					<Grid
						item
						display="flex"
						justifyContent="center"
						alignItems="center"
						width="100%"
						height="100vh"
						sx={{
							pt: { xs: "10%", sm: "3%", md: "3%", lg: "3%" },
						}}
					>
						<Outlet />
					</Grid>
				</Box>
			</Box>
		</Box>
	);
}

export default Dashboard;
