import React, { useContext } from "react";
import { Grid, Typography, Avatar, Box } from "@mui/material";
import { motion } from "framer-motion";
import ColorContext from "../../base/colorContext";

function LandingBubble(props) {
  const color = useContext(ColorContext);

  return (
    <Grid
      container
      component={motion.div}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      height="60%"
      direction="column"
      xs={12}
      lg={4}
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          bgcolor: color.mainColor,
          width: 200,
          height: 200,
          mb: "5%",
        }}
      >
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          mt="10%"
        >
          <Typography fontSize="80px">{props.icon}</Typography>
        </Grid>
      </Avatar>
      <Box
        width="50%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h6" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body" textAlign="center">
          {props.label}
        </Typography>
      </Box>
    </Grid>
  );
}

export default LandingBubble;
