import React from 'react';
import { Avatar } from '@mui/material';
import {
  UserName,
  RewardAHeading,
  AvatarContainer,
  ProfileContainer,
  StyleChnageButton,
  RewardADescription,
  RewardAnnouncement,
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
      <RewardAnnouncement>
        <RewardAHeading>Hop to the Top</RewardAHeading>
        <RewardADescription>
          Start getting rewards by completing your goal activities
        </RewardADescription>
      </RewardAnnouncement>
    </ProfileContainer>
  );
};

export default Profile;
