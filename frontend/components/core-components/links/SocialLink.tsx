import React from "react";
import Button from "@mui/material/Button";

interface ISocialLinkTypes {
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}
const SocialLink = ({ onClick, label, icon }: ISocialLinkTypes) => {
  return (
    <Button
      size="large"
      onClick={onClick}
      variant="contained"
      fullWidth
      startIcon={icon}
      type="button"
      sx={{
        fontWeight: "500",
        fontFamily: "Poppins",
        lineHeight: "120%",
        fontSize: "14px",
        background:
          "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)",
        borderRadius: "14px",
        paddingBlock: "10px",
        paddingInline: "52px",
        boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
        "&:hover": {
          background:
            "linear-gradient(0deg, rgba(5, 56, 107, 0.4), rgba(5, 56, 107, 0.4)), linear-gradient(111.76deg, #0A66C2 27.13%, #00B5D1 90.6%)",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default SocialLink;
