const cardStyle = {
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: "15em",
  right: "24em",
  background: "white",
  borderRadius: "2rem",
  boxShadow: "none",
  width: "70%",
  height: "70vh",
  paddingLeft: "6em",
};

const buttonName = {
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
    backgroundColor: "black",
  },
};

export { cardStyle, buttonName };
