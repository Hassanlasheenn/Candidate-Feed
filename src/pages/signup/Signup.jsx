import React, { useEffect } from "react";

// MaterialUI imports
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";
// import Grid from '@mui/material/Grid';
import SignContainerLayout from "../common/layouts/SignContainerLayout/SignContainerLayout";
import SignUpCard from "../../components/SignUpCard/SignUpCard";
// css imports
import "./Signup.css";
import independentImg from "../../assets/independent.webp";
import hiringImg from "../../assets/hiring.webp";

const Signup = ({ title }) => {
  useEffect(() => (document.title = title), [title]);
  return (
    <SignContainerLayout
      title="Let's personalize your experience!"
      subtitle={"What brings you to Contra?"}
    >
      <Grid container display="flex" justifyContent="center">
        <Grid item xs={4}>
          <SignUpCard
            imageSource={independentImg}
            title="I'm an Independent"
            subtitle="Find work and manage your freelance business"
          />
        </Grid>
        <Grid
          container
          item
          xs={2}
          justifyContent="center"
          alignItems={"center"}
        >
          <Typography>OR</Typography>
        </Grid>
        <Grid item xs={4}>
          <SignUpCard
            imageSource={hiringImg}
            title="I'm Hiring"
            subtitle="Post opportunities and manage hiring"
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "15px",
        }}
      >
        <Link component="button" underline="hover" color="#000">
          Already have an account? Sign in here.
        </Link>
      </Grid>
    </SignContainerLayout>
  );
};

export default Signup;
