import * as React from 'react';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface InputTypes {
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
    font-family: 'poppins';
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
    }
  }
  & .MuiOutlinedInput-root:hover {
    &.Mui-disabled fieldset {
      border: 1px solid #a5a5a5;
    }
  }
`;

export default function SearchBar() {
  return (
    <CustomInput
      className="searchbar"
      placeholder="Search your topics"
      InputProps={{
        endAdornment: (
          <SearchIcon
            sx={{
              top: '50%',
              left: '10px',
              color: 'white',
              position: 'absolute',
              transform: 'translateY(-50%)',
            }}
          />
        ),
      }}
      sx={{
        border: '0',
        outline: '0',
        width: '450px',
        fontFamily: 'poppins',
        backdropFilter: 'blur(21px)',
        '&:hover': {
          border: 'none !important',
        },
        input: {
          outline: '0',
          height: '5px',
          color: '#A5A5A5',
          borderRadius: '14px',
          fontFamily: 'poppins',
          border: '0.1px solid rgba(255, 255, 255, 0.16)',
          padding: 'var(--spacing-3)',
          boxShadow: 'inset -5px -5px 250px rgba(255, 255, 255, 0.02)',
          background:
            'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
          backdropFilter: 'blur(21px)',
          '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#A5A5A5',
          },
          position: 'relative',
          paddingLeft: '40px',
          '&:focused': {
            background:
              'radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
          },
        },
      }}
    />
  );
}
