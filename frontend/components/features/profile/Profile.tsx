import {
  Main,
  Link,
  Heading,
  Paragraph,
  ProgressBar,
  Instructions,
  SearchContainer,
  NextButtonContainer,
  InterestTagContainer,
  AvatarSelectionContainer,
  InterestSelectionContainer,
} from './Profile.style';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tag from '@/components/core-components/tag/Tag';
import Card from '@/components/core-components/card/Card';
import BadgeAvatars from '@/components/core-components/avatar/Avatar';
import SearchBar from '@/components/core-components/searchbar/Searchbar';
import HorizontalStepper from '@/components/core-components/stepper/Stepper';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';

interface ChildProps {
  count: number;
}

interface Avatars {
  id: number;
  name: string;
  img_url: string;
  onClick: (id: number) => void;
}

export const UserProfile = () => {
  let token: string | null = null;
  const [count, setCount] = useState<number>(0);
  const [selected, setSelected] = useState<boolean>(false);
  const [avatarList, setAvatarList] = useState<Avatars[]>([]);
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

  if (typeof localStorage !== 'undefined') {
    token = localStorage.getItem('token');
  }

  type HandleClick = () => void;

  const handleClick: HandleClick = () => {
    setCount(count + 1);
  };

  const fetchAvatarData = () => {
    axios
      .get('http://66.94.102.196:9001/v1/api/user/avatar', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setAvatarList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAvatarData();
  }, []);

  const handleAvatarClick = (id: number) => {
    setSelectedAvatarId(id);
  };

  return (
    <Main>
      <ProgressBar>
        <HorizontalStepper count={count} />
      </ProgressBar>
      <Instructions>
        <Heading>
          {count === 0 ? ' Welcome Michael!' : 'Select your interests'}
        </Heading>
        <Paragraph>
          {count === 0
            ? ' Pick your style'
            : 'Select any 5 options to help us to  set and priorities your interests.'}
          Pick your style
        </Paragraph>
      </Instructions>
      <SearchContainer>{count === 1 ? <SearchBar /> : null}</SearchContainer>
      <InterestTagContainer>
        {count === 1 ? <Tag /> : null}
      </InterestTagContainer>
      {count === 0 ? (
        <AvatarSelectionContainer>
          {avatarList &&
            avatarList.map((avatar) => {
              return (
                <BadgeAvatars
                  key={avatar.id}
                  id={avatar.id}
                  name={avatar.name}
                  imageUrl={avatar.img_url}
                  onClick={handleAvatarClick}
                  isSelected={selectedAvatarId === avatar.id}
                />
              );
            })}
        </AvatarSelectionContainer>
      ) : (
        <InterestSelectionContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </InterestSelectionContainer>
      )}
      <NextButtonContainer>
        <ButtonComponent
          size="medium"
          label="Next"
          variant="contained"
          fullWidth
          onClick={handleClick}
        />
        <Link>I'll do it later</Link>
      </NextButtonContainer>
    </Main>
  );
};
