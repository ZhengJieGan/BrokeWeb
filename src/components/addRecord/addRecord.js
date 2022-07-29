import React, { useContext, useState } from "react";
import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import DropDown from "../dropDown/dropDown";
import RadioGroupRating from "../rating/rating";
import ColorContext from "../../base/colorContext";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { createExpenses } from "../../actions/expenses";

function AddRecord() {
  const color = useContext(ColorContext);
  const dispatch = useDispatch();

  const [expensesData, setExpensesData] = useState({
    price: 0,
    remarks: "No comment",
    category: "Others",
    happiness: 3,
  });

  const categoryHandler = (feedback) => {
    setExpensesData({ ...expensesData, category: feedback });
  };

  const ratingHandler = (feedback) => {
    const cleanOne = feedback.replace(/:/g, "");
    const cleanTwo = cleanOne.substr(1, cleanOne.length);
    setExpensesData({ ...expensesData, happiness: parseInt(cleanTwo) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createExpenses(expensesData));
    console.log(expensesData);
  };

  const clear = () => {};

  return (
    <Grid
      sx={{
        height: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
      }}
      item
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      xs={12}
      sm={12}
      md={12}
      lg={6}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        textAlign="center"
        sx={{
          p: "5%",
          backgroundColor: color.white,
          boxShadow: 2,
          borderRadius: "20px",
          width: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
          height: { xs: "90%", sm: "80%", md: "80%", lg: "80%" },
        }}
      >
        <Typography
          variant="body"
          fontWeight="bold"
          fontSize={{
            xs: "20px",
            sm: "25px",
            md: "25px",
            lg: "35px",
          }}
          gutterBottom
        >
          What did you spent on today?
        </Typography>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="body"
            fontSize={{
              xs: "15px",
              sm: "15px",
              md: "15px",
              lg: "15px",
            }}
          >
            How happy are you regarding the purchased you made?
          </Typography>
          <RadioGroupRating ratingHandler={ratingHandler} />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-around"
          sx={{ width: "80%", height: "60%" }}
        >
          <Typography
            variant="body"
            fontSize={{
              xs: "15px",
              sm: "15px",
              md: "15px",
              lg: "15px",
            }}
          >
            Select the category that you spent on.
          </Typography>
          <DropDown categoryHandler={categoryHandler} />

          <Typography
            variant="body"
            fontSize={{
              xs: "15px",
              sm: "15px",
              md: "15px",
              lg: "15px",
            }}
          >
            How much did you spent on that?
          </Typography>
          <TextField
            fullWidth
            label="Price (RM)"
            id="price"
            name="price"
            type="number"
            inputProps={{
              step: "0.01",
            }}
            required
            onChange={(e) => {
              setExpensesData({
                ...expensesData,
                price: parseFloat(e.target.value).toFixed(2),
              });
            }}
          />

          <Typography
            variant="body"
            fontSize={{
              xs: "15px",
              sm: "15px",
              md: "15px",
              lg: "15px",
            }}
          >
            Wanna add more details?
          </Typography>
          <TextField
            fullWidth
            label="Remark"
            id="remark"
            name="remark"
            onChange={(e) =>
              setExpensesData({ ...expensesData, remarks: e.target.value })
            }
          />
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={clear}
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: "30px",
                backgroundColor: color.buttonColor,
                "&:hover": {
                  backgroundColor: color.buttonColor,
                },
              }}
            >
              Add New Record
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Grid>
  );
}

export default AddRecord;
