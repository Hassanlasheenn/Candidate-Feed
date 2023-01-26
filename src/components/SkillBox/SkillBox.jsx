import { Button, Card, Typography } from "@mui/material";

import { sxButtonStyle, sxCardStyle, sxNameStyle } from "../../styles/materialStyles";

import React from "react";

const SkillBox = ({ skillName, logo }) => {

  return (
    <Card
      sx={sxCardStyle}
    >
      <Button
        component={"button"}
        sx={sxButtonStyle}
        disableRipple
      >
        {logo}
        <Typography
          sx={sxNameStyle}
        >
          {skillName}
        </Typography>
      </Button>
    </Card>
  );
};

export default SkillBox;
