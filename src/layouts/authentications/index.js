import React, { useContext, useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Login from "../../assets/login.svg";
import Signup from "../../assets/signup.svg";
import ColorContext from "../../base/colorContext";
import { motion } from "framer-motion";

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

function AuthenticationLayout(props) {
  const color = useContext(ColorContext);
  const { width } = useWindowDimensions();

  const svgVariants = {
    offscreen: {
      x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <Grid container width="100%" height="100vh">
      <Grid
        item
        lg={6}
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: { xs: "0%", sm: "0%", md: "0%", lg: "100%" },
          background: `linear-gradient(to right bottom, ${color.mainColor}, ${color.secondaryColor})`,
        }}
      >
        {width > 1200 ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
            p="15%"
          >
            {props.type === "login" ? (
              <Box
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={svgVariants}
              >
                <img src={Login} alt="Login" height={400} widt={400} />
              </Box>
            ) : (
              <Box
                component={motion.div}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={svgVariants}
              >
                <img src={Signup} alt="Login" height={400} widt={400} />
              </Box>
            )}
          </Box>
        ) : null}
      </Grid>
      <Grid
        item
        container
        lg={6}
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          width: "100%",
          background: {
            xs: `linear-gradient(to right bottom, ${color.mainColor}, ${color.secondaryColor})`,
            lg: "white",
          },
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  );
}

export default AuthenticationLayout;
