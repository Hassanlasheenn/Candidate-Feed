import { Box, Button, Grid, Link } from "@mui/material";
import React from "react";
import SkillBox from "../../components/SkillBox";
import DesignLogo from "../../assets/LogoSkills/DesignLogo";
import EngineeringLogo from "../../assets/LogoSkills/EngineeringLogo";
import MarketingLogo from "../../assets/LogoSkills/MarketingLogo";
import MusicAudioLogo from "../../assets/LogoSkills/MusicAudioLogo";
import SocialMediaLogo from "../../assets/LogoSkills/SocialMediaLogo";
import VideoAnimation from "../../assets/LogoSkills/VideoAnimation";
import WritingLogo from "../../assets/LogoSkills/WritingLogo";
import { useNavigate } from "react-router-dom";
import SignContainerLayout from "../common/layouts/SignContainerLayout/SignContainerLayout";

const Hiring = () => {
  const navigate = useNavigate();
  return (
    <SignContainerLayout
      title="What type of skills are you looking to hire?"
      subtitle="Select as many as you’d like."
      onPreviousClick={() => navigate("/hiring/p1")}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2em",
        }}
      >
        <Box sx={{ display: "flex", gap: "2em" }}>
          <SkillBox skillName={"Design"} logo={<DesignLogo />} />
          <SkillBox skillName={"Engineering"} logo={<EngineeringLogo />} />
          <SkillBox skillName={"Marketing"} logo={<MarketingLogo />} />
          <SkillBox skillName={"Music & Audio"} logo={<MusicAudioLogo />} />
        </Box>
        <Box sx={{ display: "flex", gap: "2em" }}>
          <SkillBox skillName={"Social Media"} logo={<SocialMediaLogo />} />
          <SkillBox skillName={"Video & Animation"} logo={<VideoAnimation />} />
          <SkillBox skillName={"Writing"} logo={<WritingLogo />} />
        </Box>
        <Button
          variant="contained"
          sx={{
            padding: ".6rem 1.7rem",
            backgroundColor: "black",
            border: "none",
            color: "white",
            borderRadius: "2.5rem",
            fontWeight: "600",
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Continue
        </Button>
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
      </Box>
    </SignContainerLayout>
  );
};

export default Hiring;
