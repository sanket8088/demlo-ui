import React from "react";
import Button from "@mui/material/Button";

import styled from "@emotion/styled";
interface IButtonTypes {
  size?: "medium" | "small" | "large" | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
  label: string;
  disabled?: boolean;
}
const Main = styled.div`
  background: linear-gradient(111.76deg, #0a66c2 27.13%, #00b5d1 90.6%);
  border-radius: 14px;
`;
const ButtonComponent = ({
  size = "medium",
  variant,
  label,
  disabled,
}: IButtonTypes) => {
  const background =
    variant === "contained"
      ? "linear-gradient(111.76deg, #0A66C2 27.13%, #00B5D1 90.6%)"
      : "rgba(81, 205, 222, 0.1)";
  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      sx={{
        background: background,
        paddingInline: "34px",
        paddingBlock: "16px",
        fontSize: "16px",
        lineHeight: "120%",
        fontWeight: "500",
        borderRadius: "14px",
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

export default ButtonComponent;
