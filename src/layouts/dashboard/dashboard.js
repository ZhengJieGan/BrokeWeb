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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import ColorContext from "../../base/colorContext";

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
	// const location = useLocation();
	// const { pathname: pathName } = location;
	const { width } = useWindowDimensions();
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const color = useContext(ColorContext);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container = window !== undefined ? () => window() : undefined;

	// useEffect(() => {
	// 	switch (pathName) {
	// 		case "/user/dashboard":
	// 			setTitle("Add Expenses");
	// 			break;
	// 		case "/user/statistics":
	// 			setTitle("Statistics");
	// 			break;
	// 		case "/user/profile":
	// 			setTitle("Profile");
	// 			break;

	// 		default:
	// 			setTitle("Dashboard");
	// 			break;
	// 	}
	// }, [pathName]);

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
									width="30%"
								>
									<ButtonBase
										component={Link}
										to="/user/dashboard"
									>
										<Typography variant="h6" color="black">
											Add Expenses
										</Typography>
									</ButtonBase>

									<ButtonBase
										component={Link}
										to="/user/statistics"
									>
										<Typography variant="h6" color="black">
											Statistics
										</Typography>
									</ButtonBase>

									<ButtonBase
										component={Link}
										to="/user/profile"
									>
										<Typography variant="h6" color="black">
											Profile
										</Typography>
									</ButtonBase>
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
					height="100%"
				>
					<Grid
						container
						display="flex"
						flexDirection="row"
						justifyContent="center"
						alignItems="center"
						width="100%"
						height="100vh"
						backgroundColor={color.background}
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
