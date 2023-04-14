import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Main } from "@/components/features/test-page/TestComponent.style";
interface IInputTypes {
  label: string;
}

const Input = ({ label }: IInputTypes) => {
  return (
    <TextField
      placeholder={label}
      sx={{
        outline: "0",
        backdropFilter: "blur(21px)",
        input: {
          outline: "0",
          padding: "var(--spacing-3)",
          borderRadius: "22px",
          border: "1px solid grey",
          boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
          background:
            "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
          "&::placeholder": {
            textOverflow: "ellipsis !important",
            color: "#A5A5A5",
          },
        },
      }}
    />
  );
};

export default Input;
