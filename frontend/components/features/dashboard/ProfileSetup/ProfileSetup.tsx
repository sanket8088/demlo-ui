import {
  SetupSteps,
  CompleteAvatar,
  ProfileComplete,
  CompleteHeading,
  SetupInstruction,
  CompleteDescription,
  ProfileSetupContainer,
} from './ProfileSetup.style';
import React from 'react';
import Image from 'next/image';
import Connection from '../../../../assets/icons/build-connection.svg';
import CustomAvatar from '@/components/core-components/avatar/CustomAvatar';

const ProfileSetup = () => {
  return (
    <ProfileSetupContainer>
      <SetupInstruction>Oliver, Get started with 2 easy steps</SetupInstruction>
      <SetupSteps>
        <ProfileComplete>
          <CompleteAvatar>
            <CustomAvatar
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256"
              width={50}
              height={50}
            />
          </CompleteAvatar>
          <CompleteHeading>Complete your profile</CompleteHeading>
          <CompleteDescription>
            Tell more complete story about to get noticed by your peers
          </CompleteDescription>
        </ProfileComplete>
        <ProfileComplete>
          <Image
            src={Connection}
            alt={'Surprize Gift'}
            width={64}
            height={64}
          />

          <CompleteHeading>Build your connections</CompleteHeading>
          <CompleteDescription>
            More connections mean you’re more likely to hear about new stuffs
          </CompleteDescription>
        </ProfileComplete>
      </SetupSteps>
    </ProfileSetupContainer>
  );
};

export default ProfileSetup;
