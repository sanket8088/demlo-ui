import React from 'react';
import { InputAdornment } from '@mui/material';
import { NewPostContainer } from './NewPost.style';
import GalleryIcon from '@/assets/icons/jsx/GalleryIcon';
import VideoRecorderIcon from '@/assets/icons/jsx/VideoRecorderIcon';
import SearchBar from '@/components/core-components/searchbar/Searchbar';

const NewPost = () => {
  return (
    <NewPostContainer>
      <SearchBar
        fullWidth
        placeholder="What’s on your mind paul?"
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                width: '12%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <GalleryIcon />
              <VideoRecorderIcon />
            </InputAdornment>
          ),
        }}
      />
    </NewPostContainer>
  );
};

export default NewPost;
