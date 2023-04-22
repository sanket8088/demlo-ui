import React from 'react';
import { InputAdornment } from '@mui/material';
import { NewPostContainer } from './NewPost.style';
import SearchIcon from '@/assets/icons/jsx/SearchIcon';
import SearchBar from '@/components/core-components/searchbar/Searchbar';

const NewPost = () => {
  return (
    <NewPostContainer>
      <SearchBar
        fullWidth
        placeholder="What’s on your mind paul?"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </NewPostContainer>
  );
};

export default NewPost;
