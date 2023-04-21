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
import { Avatar } from '@mui/material';
import HomeIcon from '@/assets/icons/jsx/HomeIcon';
import HelpIcon from '@/assets/icons/jsx/HelpIcon';
import SiteIcon from '@/assets/icons/jsx/SiteIcon';
import BuzzIcon from '@/assets/icons/jsx/BuzzIcon';
import SearchIcon from '@mui/icons-material/Search';
import SkillIcon from '@/assets/icons/jsx/SkillIcon';
import CircleIcon from '@/assets/icons/jsx/CircleIcon';
import DownArrowIcon from '@/assets/icons/jsx/DownArrowIcon';
import DemloverseIcon from '@/assets/icons/jsx/DemloverseIcon';
import NotificationIcon from '@/assets/icons/jsx/NotificationIcon';
import SearchBar from '@/components/core-components/searchbar/Searchbar';
import { Auth } from 'aws-amplify';
import Router from "next/router";

const Header = () => {

  const logoutUser =() =>{
    Auth.signOut().then(() =>{
      Router.push("/login")
    })

    

  }


  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <LogoContainer>
          <SiteIcon />
        </LogoContainer>
        <SearchBarContainer>
          <SearchBar
            fullWidth
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <SearchIcon
                  sx={{
                    left: '10px',
                    color: 'white',
                    position: 'absolute',
                  }}
                />
              ),
            }}
          />
        </SearchBarContainer>
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
        <NotificationContainer>
          <NotificationIcon />
          <HelpIcon />
          <div onClick={logoutUser}>
           <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256" />
         
          </div>
          <DownArrowIcon />
         
        </NotificationContainer>
      </HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;
