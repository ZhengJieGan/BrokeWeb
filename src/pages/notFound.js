import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Typography, Grid, Button, Box } from "@mui/material";
import { ReactComponent as Background } from "../assets/error.svg";
import { Link } from "react-router-dom";
import ColorContext from "../base/colorContext";

function NotFound() {
  const color = useContext(ColorContext);

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      width="100%"
      height="100vh"
      sx={{
        background: `linear-gradient(to right bottom, ${color.mainColor}, ${color.secondaryColor})`,
      }}
    >
      <Typography variant="h2" color="white" fontWeight="bold">
        Page not found.
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="55%"
        justifyContent="space-between"
      >
        <Background />
        <motion.div
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
        >
          <Button
            component={Link}
            to="/home"
            variant="contained"
            sx={{
              borderRadius: "30px",
              backgroundColor: color.buttonColor,
              "&:hover": {
                backgroundColor: color.buttonColor,
              },
            }}
          >
            Return to Home Page
          </Button>
        </motion.div>
      </Box>
    </Grid>
  );
}

export default NotFound;
