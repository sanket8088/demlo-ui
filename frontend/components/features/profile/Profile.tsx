import React from 'react';
import HorizontalStepper from '../../stepper';
import BadgeAvatars from '@/components/core-components/avatar/Avatar';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';
import {
  Main,
  Link,
  MainOne,
  MainTwo,
  Heading,
  MainFour,
  Paragraph,
  MainThree,
} from './Profile.style';

export const ProfileOne = () => {
  return (
    <Main>
      <MainOne>
        <HorizontalStepper />
      </MainOne>
      <MainTwo>
        <Heading>Welcome Michael!</Heading>
        <Paragraph>Pick your style</Paragraph>
      </MainTwo>
      <MainThree>
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
        <BadgeAvatars />
      </MainThree>
      <MainFour>
        <ButtonComponent
          size="medium"
          label="Next"
          variant="contained"
          fullWidth
        />
        <Link>I'll do it later</Link>
      </MainFour>
    </Main>
  );
};
