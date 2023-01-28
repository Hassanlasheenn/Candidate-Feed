import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import "./SignContainerLayout.scss";

import LogoContra from "../../../../assets/LogoContra";
import CloseIcon from "../../../../assets/CloseIcon";

const SignContainerLayout = ({
  title,
  subtitle,
  onPreviousClick,
  children,
}) => {
  const renderBackground = () => (
    <Box className="authContainer__bg-image">
      <Box
        component="img"
        src="https://contra.com/static/assets/Shape-01.40591a5b.webp"
        className="bg-image__images bg-image__images--bottom-left"
      />
      <Box
        component="img"
        src="https://contra.com/static/assets/Shape-01.40591a5b.webp"
        className="bg-image__images bg-image__images--top-right"
      />
    </Box>
  );

  const renderContentHeader = () => (
    <Grid
      className="authContainer__header"
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <LogoContra />
      </Grid>
      <Grid item>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Grid>
    </Grid>
  );

  return (
    <Box className="authContainer">
      {renderBackground()}
      <Box className="authContainer__content">
        <Container maxWidth="xl">
          {renderContentHeader()}
          <Box className="authContent_container">
            {onPreviousClick && (
              <Link
                component="button"
                underline="hover"
                tabIndex={0}
                color="rgb(155, 162, 176)"
                onClick={onPreviousClick}
                sx={{
                  "&:hover": {
                    color: "#000",
                  },
                  fontWeight: "600",
                  transition: "color .2s ease-in-out",
                }}
              >
                Previous Step
              </Link>
            )}
            <Grid container direction="column">
              <Grid item container xs={12} justifyContent="center">
                <Typography variant="h4">{title}</Typography>
              </Grid>
              <Grid item container xs={12} justifyContent="center">
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "16px",
                    color: "#555",
                    marginTop: "15px",
                  }}
                >
                  {subtitle}
                </Typography>
              </Grid>
              <Box className="children__container">{children}</Box>
            </Grid>
          </Box>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            sx={{
              margin: "0 auto",
              marginTop: "20px",
              width: "60%",
            }}
          >
            <Typography>
              By continuing, you agree to Contra's{" "}
              <Link color="#000" component="button">
                Terms of Use
              </Link>{" "}
              and confirm that you have read Contra's{" "}
              <Link color="#000" component="button">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SignContainerLayout;
