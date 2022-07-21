import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ReactComponent as Background } from "./assets/money.svg";

function App() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      sx={{
        background: "linear-gradient(to right bottom, #11998e, #38ef7d)",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        xs={10}
        sm={10}
        md={10}
        lg={6}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          textAlign="flex-start"
          alignItems="flex-start"
        >
          <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
            Welcome to Broke!
          </Typography>
          <Typography
            variant="h5"
            fontWeight="medium"
            color="white"
            gutterBottom
          >
            A super user friendly platform to records all of your spendings.
          </Typography>
          <Typography variant="h5" color="white">
            Helps you not to be so broke
          </Typography>
        </Box>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        xs={10}
        sm={10}
        md={10}
        lg={6}
      >
        <Box height={{"0%"}} width={{"0%"}}>
          <Background />
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
