import React, { useContext } from "react";
import { Grid, Typography, Box, TextField } from "@mui/material";
import DropDown from "../components/dropDown/dropDown";
import RadioGroupRating from "../components/rating/rating";
import ColorContext from "../base/colorContext";

function Home() {
  const color = useContext(ColorContext);
  return (
    <Grid container width="95%" height="85%">
      <Grid
        item
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          alignItems={{
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
          }}
          sx={{
            backgroundColor: color.white,
            boxShadow: 2,
            borderRadius: "20px",
            width: "80%",
            height: "80%",
          }}
        >
          <Typography variant="h5">What did you spent on today?</Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            sx={{ width: "80%", height: "50%" }}
          >
            <DropDown />
            <TextField fullWidth label="Price" id="price" />
            <TextField fullWidth label="Remark" id="remark" />
            <RadioGroupRating />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        sx={{ backgroundColor: "yellow" }}
      >
        <Typography variant="h5">Here are your records</Typography>
      </Grid>
    </Grid>
  );
}

export default Home;
