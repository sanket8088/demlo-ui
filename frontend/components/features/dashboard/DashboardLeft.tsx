import {
  UserName,
  RewardAHeading,
  AvatarContainer,
  ProfileContainer,
  StyleChnageButton,
  RewardClaimTiming,
  RewardADescription,
  RewardTimeHighlight,
  PrizeImageContainer,
  RewardClaimContainer,
  DashboardLeftContainer,
  AdvertisementContainer,
  RewardAnnouncementConatiner,
} from './Dashboard.style';
import React from 'react';
import Image from 'next/image';
import { Avatar } from '@mui/material';
import Gift from '../../../assets/icons/gift.svg';
import Advertisement from '../../../assets/icons/advertisement.svg';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';

const DashboardLeft = () => {
  return (
    <DashboardLeftContainer>
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
        <RewardAnnouncementConatiner>
          <RewardAHeading>Hop to the Top</RewardAHeading>
          <RewardADescription>
            Start getting rewards by completing your goal activities
          </RewardADescription>
        </RewardAnnouncementConatiner>
        <RewardClaimContainer>
          <PrizeImageContainer>
            <Image src={Gift} alt={'Surprize Gift'} width={60} height={60} />
          </PrizeImageContainer>
          <RewardClaimTiming>
            <RewardAHeading>Rewards</RewardAHeading>
            <RewardADescription>Next Claim in :</RewardADescription>
            <RewardTimeHighlight>23hrs 15 mins</RewardTimeHighlight>
          </RewardClaimTiming>
        </RewardClaimContainer>
      </ProfileContainer>
      <AdvertisementContainer>
        <Image
          src={Advertisement}
          alt={'Surprize Gift'}
          width={224}
          height={163}
        />
      </AdvertisementContainer>
    </DashboardLeftContainer>
  );
};

export default DashboardLeft;
