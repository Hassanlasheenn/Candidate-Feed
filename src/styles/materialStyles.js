 const sxCardStyle = {
        boxShadow: "none",
        border: "1px solid rgb(229, 231, 235)",
        borderRadius: "1em",
        transition: "all 200ms ease-out",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0 0 10px #AABBCC",
        },
      };

      const sxButtonStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        gap: "1em",
        padding: "1.2em",
        whiteSpace: "nowrap",
        boxShadow: "none",
        border: "none",
        backgroundColor: "white",
        textTransform: "none",
        transition: "all 200ms ease-out",
        "&:hover": {
          backgroundColor: "white",
        },
        // "&::selection": {
        //   backgroundColor: "rgb(254, 223, 137)",
        // },
      }

      const sxNameStyle = {
        fontSize: "1.1875rem",
        fontWeight: 600,
        outline: "none",
        textAlign: "center",
        color: "black",
      };



export { sxButtonStyle, sxCardStyle, sxNameStyle } ;