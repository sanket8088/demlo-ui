import React from 'react';
import HorizontalStepper from '../stepper';
import { Main, MainOne, MainTwo, Heading, Paragraph } from './ProfileOne.style';

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
    </Main>
  );
};
