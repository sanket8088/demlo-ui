import * as React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';

interface ISearchTypes {
  InputProps: any;
  fullWidth?: boolean;
  placeholder?: string;
}

const CustomInput = styled(TextField)`
  .MuiFormHelperText-root {
    color: #a5a5a5;
    font-size: 12px;
    font-family: 'poppins';
  }
  .MuiInputBase-root {
    border-radius: 14px;
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
    }
  }
  & .MuiOutlinedInput-root:hover {
    &.Mui-disabled fieldset {
      border: 1px solid #a5a5a5;
    }
  }
`;

export default function SearchBar({
  fullWidth,
  InputProps,
  placeholder,
}: ISearchTypes) {
  return (
    <CustomInput
      fullWidth={fullWidth}
      InputProps={InputProps}
      placeholder={placeholder}
      sx={{
        outline: '0',
        height: '35px',
        fontFamily: 'poppins',
        backdropFilter: 'blur(21px)',

        borderRadius: '14px',
        border: '0.1px solid rgba(255, 255, 255, 0.16)',
        boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
        background:
          'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',

        padding: '0px',
        input: {
          padding: '0px',
          paddingLeft: '5px',
          color: '#A5A5A5',
          borderRadius: '14px !important',
          height: '35px',
          '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#A5A5A5',
          },
        },
      }}
    />
  );
}
