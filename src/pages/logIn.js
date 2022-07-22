import React, { useContext } from "react";
import {
  Typography,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  ButtonBase,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthenticationLayout from "../layouts/authentications";
import ColorContext from "../base/colorContext";

const theme = createTheme();

function LogIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const color = useContext(ColorContext);

  return (
    <AuthenticationLayout type="login">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color={{ xs: "white", sm: "white", md: "white", lg: "black" }}
              gutterBottom
            >
              Welcome back to Broke!
            </Typography>
            <Typography
              variant="h6"
              color={{ xs: "white", sm: "white", md: "white", lg: "black" }}
            >
              Keep tracking your expenses to find out that you are always broke.
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color={{ xs: "white", sm: "white", md: "white", lg: "black" }}
            >
              Log In
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.1 },
                }}
              >
                <Button
                  type="submit"
                  component={Link}
                  to="/user/dashboard"
                  fullWidth
                  variant="contained"
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
                  Log In
                </Button>
              </motion.div>
            </Box>
          </Box>
          <ButtonBase component={Link} to="/sign-up">
            <Typography
              color={{ xs: "white", sm: "white", md: "white", lg: "black" }}
            >
              Dont have an account? Sign Up Here!
            </Typography>
          </ButtonBase>
        </Container>
      </ThemeProvider>
    </AuthenticationLayout>
  );
}

export default LogIn;
