import {
  Link,
  Heading,
  Paragraph,
  ProgressBar,
  SearchContainer,
  NextButtonContainer,
  InterestTagContainer,
  AvatarSelectionContainer,
  InterestSelectionContainer,
} from './Profile.style';
import Box from '@mui/material/Box';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useCallback } from 'react';
import Tag from '@/components/core-components/tag/Tag';
import { fetchQueries } from '@/utility/queryController';
import Card from '@/components/core-components/card/Card';
import CircularProgress from '@mui/material/CircularProgress';
import GridItem from '@/components/core-components/grid/GridItem';
import BadgeAvatars from '@/components/core-components/avatar/Avatar';
import SearchBar from '@/components/core-components/searchbar/Searchbar';
import GridContainer from '@/components/core-components/grid/GridContainer';
import HorizontalStepper from '@/components/core-components/stepper/Stepper';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';

interface Avatars {
  id: number;
  name: string;
  img_url: string;
}

export const UserProfile = () => {
  const [count, setCount] = useState<number>(0);
  const [avatarList, setAvatarList] = useState<Avatars[]>([]);
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const { isLoading, error, data } = useQuery({
    queryFn: () => fetchQueries('user/avatar'),
    onSuccess(data) {
      setAvatarList(data?.data);
    },
  });

  const handleAvatarClick = (id: number) => {
    setSelectedAvatarId(id);
  };

  if (isLoading)
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <GridContainer spacing={2}>
      <GridItem xs={12}>
        <ProgressBar>
          <HorizontalStepper count={count} />
        </ProgressBar>
      </GridItem>
      <GridItem xs={12}>
        <Heading>
          {count === 0 ? ' Welcome Michael!' : 'Select your interests'}
        </Heading>
        <Paragraph>
          {count === 0
            ? ' Pick your style'
            : 'Select any 5 options to help us to  set and priorities your interests.'}
        </Paragraph>
      </GridItem>
      <GridItem xs={12}>
        {count === 1 ? (
          <SearchContainer>
            <SearchBar
              placeholder="Search your topics"
              fullWidth
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
          </SearchContainer>
        ) : null}
      </GridItem>
      <GridItem xs={12}>
        {count === 1 ? (
          <InterestTagContainer>
            <Tag />
          </InterestTagContainer>
        ) : null}
      </GridItem>
      {count === 0 ? (
        <AvatarSelectionContainer>
          {avatarList &&
            avatarList?.map((avatar) => {
              return (
                <BadgeAvatars
                  key={avatar?.id}
                  name={avatar?.name}
                  imageUrl={avatar?.img_url}
                  onClick={handleAvatarClick}
                  isSelected={selectedAvatarId === avatar.id}
                  id={avatar?.id}
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
      <GridItem xs={12}>
        <NextButtonContainer>
          <ButtonComponent
            size="medium"
            label="Next"
            variant="contained"
            fullWidth
            onClick={handleClick}
          />
        </NextButtonContainer>
      </GridItem>
      <GridItem xs={12}>
        <Link>I'll do it later</Link>
      </GridItem>
    </GridContainer>
  );
};
