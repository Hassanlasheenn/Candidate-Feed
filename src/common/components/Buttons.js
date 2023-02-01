import { Button } from "@mui/material";
import React from "react";
import { buttonName } from "./ComponentStyles";

const Buttons = ({ buttonTitle }) => {
  return (
    <Button disableRipple disableElevation variant="contained" sx={buttonName}>
      {buttonTitle}
    </Button>
  );
};

export default Buttons;
