import React from "react";
import Button from "@mui/material/Button";

import styled from "@emotion/styled";
import GoogleIcon from "../../../assets/icons/jsx/GoogleIcon";
interface IButtonTypes {
  size?: "medium" | "small" | "large" | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  customPaddingBlock?: string;
}

const ButtonComponent = ({
  label,
  variant,
  disabled,
  fullWidth,
  size = "medium",
  icon,
  onClick,
  customPaddingBlock,
}: IButtonTypes) => {
  const background =
    variant === "contained"
      ? "linear-gradient(111.76deg, #0A66C2 27.13%, #00B5D1 90.6%)"
      : "rgba(81, 205, 222, 0.1)";
  const paddingInline =
    size === "large" ? "34px" : size === "small" ? "24px" : "36px";
  const paddingBlock =
    size === "large" ? "16px" : size === "small" ? "var(--spacing-1)" : "10px";
  const fontSize =
    size === "large" ? "16px" : size === "small" ? "12px" : "14px";
  const borderRadius = size === "small" ? "8px" : "14px";
  const customPaddingBlockSelection = customPaddingBlock
    ? customPaddingBlock
    : paddingBlock;
  return (
    <Button
      size={size}
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={icon}
      type="button"
      sx={{
        fontWeight: "500",
        lineHeight: "120%",
        fontSize: fontSize,
        background: background,
        borderRadius: borderRadius,
        paddingBlock: customPaddingBlockSelection,
        paddingInline: paddingInline,

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

// border: 1px solid;

// border-image-source: linear-gradient(92.29deg, #51CDDE 0%, rgba(81, 205, 222, 0.6) 100%);
