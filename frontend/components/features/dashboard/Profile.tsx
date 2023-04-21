import React from 'react';
import { Avatar } from '@mui/material';
import {
  UserName,
  AvatarContainer,
  ProfileContainer,
  StyleChnageButton,
} from './Dashboard.style';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';

const Profile = () => {
  return (
    <ProfileContainer>
      <AvatarContainer>
        <Avatar
          sx={{
            width: '55px',
            height: '55px',
          }}
          src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256"
        />
        <UserName>Oliver</UserName>
      </AvatarContainer>
      <StyleChnageButton>
        <ButtonComponent
          fullWidth
          variant="contained"
          label="Change style"
        ></ButtonComponent>
      </StyleChnageButton>
    </ProfileContainer>
  );
};

export default Profile;
