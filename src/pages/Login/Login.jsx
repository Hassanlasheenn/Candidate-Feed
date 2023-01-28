// MaterialUi components
import { Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
// images
import blur from "../../assets/blur_bg_3.jpg";
import LogoContra from "../../assets/LogoContra";
// reusable components
import Buttons from "../../components/Buttons";
import CardContainer from "../../components/CardContainer";
// styles
import {
  emailAddressText,
  backgroundBlurImage,
  welcomeStyleText,
  newToContraText,
  loginImage,
} from "./LoginStyles";

const Login = ({ title }) => {
  // the useeffect is for the display of the title when changing routes from one page to another
  useEffect(() => {
    document.title = title;
  });

  return (
    <Box className="login">
      <Box className="login__bg">
        <Box
          component="img"
          sx={backgroundBlurImage}
          className="login__back-bg"
          src={blur}
          alt="Background Image"
        />
      </Box>
      <Box className="login__banner">
        <LogoContra />
      </Box>

      <Box className="login__page">
        <CardContainer>
          <Box className="login__container-left">
            <Typography variant="h2" sx={welcomeStyleText}>
              Welcome back to Contra 👋
            </Typography>
            <Box className="login__container-left--input-cont">
              <Typography sx={emailAddressText}>Email address</Typography>
              <input type="text" placeholder="name@email.com" required />
            </Box>
            <Buttons buttonTitle={"Log In"} />
          </Box>
          <Box className="login__container-right">
            <Box
              component="img"
              sx={loginImage}
              src="https://contra.com/static/assets/login@2x.b44e5924.webp"
              alt="Contra star house"
            />
          </Box>
        </CardContainer>

        <Box className="signup__container">
          <Typography variant="h5" sx={newToContraText}>
            New to Contra? Join our commision-free platform
          </Typography>
          <Buttons buttonTitle={"Sign Up"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
