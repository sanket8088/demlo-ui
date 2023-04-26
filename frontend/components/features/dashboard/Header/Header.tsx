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
} from './Header.style';
import React from 'react';
import Router from 'next/router';
import { Auth } from 'aws-amplify';
import { Avatar } from '@mui/material';
import { setAuthState } from '@/Store/slice';
import { InputAdornment } from '@mui/material';
import MikeIcon from '@/assets/icons/jsx/MikeIcon';
import HomeIcon from '@/assets/icons/jsx/HomeIcon';
import HelpIcon from '@/assets/icons/jsx/HelpIcon';
import SiteIcon from '@/assets/icons/jsx/SiteIcon';
import BuzzIcon from '@/assets/icons/jsx/BuzzIcon';
import SkillIcon from '@/assets/icons/jsx/SkillIcon';
import SearchIcon from '@/assets/icons/jsx/SearchIcon';
import { useDispatch, useSelector } from 'react-redux';
import CircleIcon from '@/assets/icons/jsx/CircleIcon';
import Menu from '@/components/core-components/menu/Menu';
import DemloverseIcon from '@/assets/icons/jsx/DemloverseIcon';
import NotificationIcon from '@/assets/icons/jsx/NotificationIcon';
import SearchBar from '@/components/core-components/searchbar/Searchbar';

const Header = () => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    Auth.signOut().then(() => {
      dispatch(setAuthState(false));
      Router.push('/login');
    });
  };

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
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <MikeIcon />
                </InputAdornment>
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
          <Avatar src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256" />
          <Menu onLogout={logoutUser} />
        </NotificationContainer>
      </HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;
