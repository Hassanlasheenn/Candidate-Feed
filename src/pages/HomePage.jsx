import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import blur from "../assets/blur_bg_3.jpg";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: "relative" }}>
      <Box className="login__bg">
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100vh",
            filter: "blur(2rem)",
          }}
          className="login__back-bg"
          src={blur}
          alt=""
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: "3.125rem",
          fontWeight: 700,
          letterSpacing: "0.5px",
          lineHeight: "40px",
          marginBottom: "1em",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        Welcome to Contra 👋
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "42%",
          display: "flex",
          flexDirection: "column",
          width: "15%",
          gap: "2rem",
        }}
      >
        <Button
          onClick={() => navigate("/log-in")}
          variant="contained"
          disableRipple
          sx={{
            padding: ".8rem 1.4rem",
            backgroundColor: "black",
            border: "none",
            color: "white",
            borderRadius: "2.5rem",
            fontWeight: "600",
            fontSize: "1.2rem",
            cursor: "pointer",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
            },
          }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          disableRipple
          sx={{
            padding: ".8rem 1.4rem",
            backgroundColor: "black",
            border: "none",
            color: "white",
            borderRadius: "2.5rem",
            fontWeight: "600",
            fontSize: "1.2rem",
            cursor: "pointer",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "transparent",
              color: "black",
            },
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
