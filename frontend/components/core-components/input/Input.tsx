import React from "react";
import {
  InputLabel,
  TextField,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Box from "@mui/material/Box";
import { Main } from "@/components/features/test-page/TestComponent.style";
import styled from "@emotion/styled";

interface IInputTypes {
  label?: string;
  placeholder?: string;
  type?: string;
  inputProps?: any;
  formControlProps?: any;
  error?: boolean;
  onChange: () => void;
  value: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
}

const CustomInput = styled(TextField)`
  .MuiFormHelperText-root {
    color: #a5a5a5;
    font-size: 12px;
    font-family: "poppins";
  }
  .MuiInputBase-root {
    border-radius: 22px;
  }

  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #ffffff;
      border-width: 1px;
    }
  }
  & .MuiOutlinedInput-root:hover {
    & > fieldset {
      border-color: #ffffff;
      border-width: 1px;
    }
  }

  & .MuiOutlinedInput-root {
    &.Mui-disabled fieldset {
      background: radial-gradient(
        100% 100% at 0% 0%,
        rgba(255, 255, 255, 0.04) 0%,
        rgba(255, 255, 255, 0) 100%
      );

      /* backdrop-filter: blur(21px); */
    }
  }
  & .MuiOutlinedInput-root:hover {
    &.Mui-disabled fieldset {
      border: 1px solid #a5a5a5;
    }
  }
`;

const Input = ({
  label,
  type,
  inputProps,
  formControlProps,
  error,
  onChange,
  value,
  helperText,
  required,
  placeholder,
  disabled,
}: IInputTypes) => {
  console.log("error", error);
  return (
    <FormControl>
      {label !== undefined ? (
        <InputLabel
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#ffffff",
            fontFamily: "poppins",
            marginBottom: "var(--spacing-1)",
          }}
          shrink={true}
          htmlFor={inputProps?.name}
        >
          {label}
          {required && <span className="label_astrik">*</span>}
        </InputLabel>
      ) : null}
      <CustomInput
        placeholder={placeholder}
        type={type}
        id={inputProps?.name}
        error={error}
        onChange={onChange}
        value={value}
        helperText={helperText}
        required={required}
        fullWidth
        disabled={disabled}
        // focused={true}
        sx={{
          outline: "0",
          width: "350px",
          fontFamily: "poppins",
          backdropFilter: "blur(21px)",
          marginTop: "10px",
          border: "0",
          input: {
            outline: "0",
            padding: "var(--spacing-3)",
            color: "#A5A5A5",
            borderRadius: "22px",
            fontFamily: "poppins",
            border: "1px solid #a5a5a5",
            boxShadow: "inset -5px -5px 250px rgba(255, 255, 255, 0.02)",
            background:
              "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
            backdropFilter: "blur(21px)",
            "&::placeholder": {
              textOverflow: "ellipsis !important",
              color: "#A5A5A5",
            },
            "&:focused": {
              background:
                "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)",
            },
          },
        }}
      />
    </FormControl>
  );
};

export default Input;
