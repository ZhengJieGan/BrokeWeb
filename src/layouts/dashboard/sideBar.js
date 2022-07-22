import React from "react";
import SideBarData from "./sideBarData";
import { ButtonBase, Toolbar, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function SideBar() {
  return (
    <Box height="100%" width="100%" sx={{ backgroundColor: "white", pt: "5%" }}>
      <Toolbar />
      {SideBarData.map((data) => (
        <ButtonBase
          onClick={() => {
            window.location.pathname = data.link;
          }}
          component={motion.div}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          key={data.key}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "7vh",
            width: "90%",
            borderRadius: "30px",
            backgroundColor: "white",
            m: "5%",
            pl: "10%",
          }}
        >
          <Box sx={{ ml: "4%" }}>
            <Typography variant="h6" color="black">
              {data.title}
            </Typography>
          </Box>
        </ButtonBase>
      ))}
    </Box>
  );
}

export default SideBar;
