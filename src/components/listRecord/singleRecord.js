import React, { useContext, useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import ColorContext from "../../base/colorContext";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function SingleRecord(props) {
  const [face, setFace] = useState(null);

  useEffect(() => {
    switch (props.face) {
      case 1:
        setFace(
          <SentimentVeryDissatisfiedIcon fontSize="large" color="error" />
        );
        break;
      case 2:
        setFace(<SentimentDissatisfiedIcon fontSize="large" color="error" />);
        break;
      case 3:
        setFace(<SentimentSatisfiedIcon fontSize="large" color="warning" />);
        break;
      case 4:
        setFace(<SentimentSatisfiedAltIcon fontSize="large" color="warning" />);
        break;
      case 5:
        setFace(
          <SentimentVerySatisfiedIcon fontSize="large" color="success" />
        );
        break;

      default:
        setFace(<SentimentSatisfiedIcon fontSize="large" color="warning" />);
        break;
    }
  }, [props.face]);

  const color = useContext(ColorContext);
  return (
    <Box
      display="flex"
      component={motion.div}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        backgroundColor: color.background,
        width: "90%",
        height: "10%",
        borderRadius: "20px",
        p: "2%",
        mb: "5%",
      }}
    >
      {face}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="flex-start"
        width="70%"
      >
        <Typography
          variant="body"
          fontSize={{
            xs: "12px",
            sm: "15px",
            md: "15px",
            lg: "15px",
          }}
        >
          Category : {props.title}
        </Typography>
        <Typography
          variant="body"
          fontSize={{
            xs: "12px",
            sm: "15px",
            md: "15px",
            lg: "15px",
          }}
        >
          Price : RM {props.price}
        </Typography>
        <Typography
          variant="body"
          fontSize={{
            xs: "12px",
            sm: "15px",
            md: "15px",
            lg: "15px",
          }}
        >
          Remarks : {props.remarks}
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        sx={{ borderRadius: "20px" }}
      >
        <EditIcon sx={{ color: color.mainColor }} />
        <DeleteIcon sx={{ color: color.mainColor }} />
      </Box>
    </Box>
  );
}

export default SingleRecord;
