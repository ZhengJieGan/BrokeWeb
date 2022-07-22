import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import { ReactComponent as Login } from "../../assets/login.svg";
import { ReactComponent as Signup } from "../../assets/signup.svg";
import ColorContext from "../../base/colorContext";

function AuthenticationLayout(props) {
  const color = useContext(ColorContext);

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
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          p="15%"
        >
          {props.type === "login" ? <Login /> : <Signup />}
        </Box>
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
