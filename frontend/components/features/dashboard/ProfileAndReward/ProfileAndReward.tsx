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
} from "./ProfileAndReward.style";
import React from "react";
import Image from "next/image";
import Gift from "../../../../assets/icons/gift.svg";
import Advertisement from "../../../../assets/icons/advertisement.svg";
import CustomAvatar from "@/components/core-components/avatar/CustomAvatar";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";

interface ITypesProfileAndReward {
  username?: any;
}

const ProfileAndReward = ({ username }: ITypesProfileAndReward) => {
  return (
    <DashboardLeftContainer>
      <ProfileContainer>
        <AvatarContainer>
          <CustomAvatar
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256"
            width={80}
            height={80}
          />
          <UserName>{username}</UserName>
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
            <Image src={Gift} alt={"Surprize Gift"} width={60} height={60} />
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
          alt={"Surprize Gift"}
          width={220}
          height={160}
        />
      </AdvertisementContainer>
    </DashboardLeftContainer>
  );
};

export default ProfileAndReward;
