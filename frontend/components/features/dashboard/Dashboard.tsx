import {
  LogoContainer,
  NavigationIcon,
  NavigationText,
  HeaderContainer,
  SearchBarContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  NavigationsContainer,
  NotificationContainer,
} from './Dashboard.style';
import React from 'react';
import HomeIcon from '@/assets/icons/jsx/HomeIcon';
import SiteIcon from '@/assets/icons/jsx/SiteIcon';
import BuzzIcon from '@/assets/icons/jsx/BuzzIcon';
import SkillIcon from '@/assets/icons/jsx/SkillIcon';
import CircleIcon from '@/assets/icons/jsx/CircleIcon';
import DemloverseIcon from '@/assets/icons/jsx/DemloverseIcon';
import GridContainer from '@/components/core-components/grid/GridContainer';

export const Dashboard = () => {
  return (
    <GridContainer spacing={2}>
      <HeaderContainer>
        <HeaderLeftContainer>
          <LogoContainer>
            <SiteIcon />
          </LogoContainer>
          <SearchBarContainer></SearchBarContainer>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <NavigationsContainer>
            <NavigationIcon>
              <HomeIcon />
              <NavigationText>Home</NavigationText>
            </NavigationIcon>
            <NavigationIcon>
              <CircleIcon />
              <NavigationText>Circle</NavigationText>
            </NavigationIcon>
            <NavigationIcon>
              <SkillIcon />
              <NavigationText>Skills</NavigationText>
            </NavigationIcon>
            <NavigationIcon>
              <BuzzIcon />
              <NavigationText>Buzz</NavigationText>
            </NavigationIcon>
            <NavigationIcon>
              <DemloverseIcon />
              <NavigationText>Demloverse</NavigationText>
            </NavigationIcon>
          </NavigationsContainer>
          <NotificationContainer></NotificationContainer>
        </HeaderRightContainer>
      </HeaderContainer>
    </GridContainer>
  );
};
