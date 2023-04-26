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
import Box from '@mui/material/Box';
import useAuth from '@/hooks/useAuth';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Auth, Hub } from 'aws-amplify';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@/assets/icons/jsx/SearchIcon';
import { useDispatch, useSelector } from 'react-redux';
import Tag from '@/components/core-components/tag/Tag';
import { fetchQueries } from '@/utility/queryController';
import Card from '@/components/core-components/card/Card';
import { getUserDetailsFromSession } from '@/utility/auth';
import CircularProgress from '@mui/material/CircularProgress';
import BadgeAvatars from '@/components/core-components/avatar/Avatar';
import SearchBar from '@/components/core-components/searchbar/Searchbar';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import HorizontalStepper from '@/components/core-components/stepper/Stepper';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';

interface Avatar {
  id: number;
  name: string;
  img_url: string;
}

interface InterestTag {
  id: number;
  title: string;
  img_url: string;
}

interface InterestCard {
  id: number;
  title: string;
  img_url: string;
  discription: string;
}

export const UserProfile = () => {
  const { user } = useAuth();
  const fetchAuthUser = async () => {
    try {
      console.log('fetchAuthUser');
      const fetchedUser = await Auth.currentAuthenticatedUser();
      // setIsAuthenticating(false);
      // setUser(fetchedUser);
      console.log(fetchedUser);
    } catch (err) {
      console.log('err');
    }
  };

  useEffect(() => {
    fetchAuthUser();

    const authListener = Hub.listen(
      'auth',
      async ({ payload: { event, data } }) => {
        console.log('Auth Status Changed Event: ', event);
        console.log('Auth Status Changed Data: ', data);
      }
    );

    return () => {
      authListener();
    };
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [avatarList, setAvatarList] = useState<Avatar[]>([]);
  const [userName, setUserName] = useState<string>('Michael');
  const [interestTagList, setInterestTagList] = useState<InterestTag[]>([]);
  const [interestCardList, setInterestCardList] = useState<InterestCard[]>([
    {
      id: 1,
      title: 'Science',
      img_url:
        'https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg?w=2000',
      discription:
        'Description two liners goes here. It will be atleast fifty characters...',
    },
    {
      id: 2,
      title: 'Language',
      img_url:
        'https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=1024x1024&w=is&k=20&c=nfoZ3Ps5MDN_6PZCQ5Y_4ti_YbBpvEIXcD_dtP0V7Kg=',
      discription:
        'Description two liners goes here. It will be atleast fifty characters...',
    },
    {
      id: 3,
      title: 'Math',
      img_url:
        'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/25135900/Maths-Short-Tricks.jpg',
      discription:
        'Description two liners goes here. It will be atleast fifty characters...',
    },
    {
      id: 4,
      title: 'Chemistry',
      img_url:
        'https://themedium.ca/wp-content/uploads/2023/03/2023-03-06-Features-Ivanna.jpg',
      discription:
        'Description two liners goes here. It will be atleast fifty characters...',
    },
  ]);
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

  const handleInterestTagClick = (id: number) => {
    const newList = interestTagList.filter((item) => item.id !== id);
    setInterestTagList(newList);
  };

  const handleInterestCardClick = (subject: {
    id: number;
    title: string;
    img_url: string;
  }) => {
    const exists = interestTagList.some((item) => item.id === subject.id);

    if (!exists) {
      setInterestTagList([...interestTagList, subject]);
    }
  };

  useEffect(() => {
    if (count === 2) {
      router.push({
        pathname: '/dashboard',
      });
    }
  }, [count]);

  useEffect(() => {
    setLoading(true);
    const userData = getUserDetailsFromSession();
    userData
      .then((data) => {
        if (data !== null) {
          const {
            attributes: { given_name },
          } = data;
          setUserName(given_name);
        }
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress size={100} />
      </Box>
    );
  return (
    <Main>
      <ProgressBar>
        <HorizontalStepper count={count} />
      </ProgressBar>
      <Instructions>
        <Heading>
          {count === 0 ? `Welcome ${userName}!` : 'Select your interests'}
        </Heading>
        <Paragraph>
          {count === 0
            ? ' Pick your style'
            : 'Select any 5 options to help us to  set and priorities your interests.'}
          Pick your style
        </Paragraph>
      </Instructions>
      <SearchContainer>
        {count > 0 ? (
          <SearchBar
            placeholder="Search your topics"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        ) : null}
      </SearchContainer>
      {count > 0 ? (
        <InterestTagContainer>
          {interestTagList &&
            interestTagList?.map((tag) => {
              return (
                <Tag
                  id={tag?.id}
                  key={tag?.id}
                  title={tag?.title}
                  img_url={tag?.img_url}
                  onClick={handleInterestTagClick}
                />
              );
            })}
        </InterestTagContainer>
      ) : null}
      {count === 0 ? (
        <AvatarSelectionContainer>
          {avatarList &&
            avatarList?.map((avatar) => {
              return (
                <BadgeAvatars
                  id={avatar?.id}
                  key={avatar?.id}
                  name={avatar?.name}
                  imageUrl={avatar?.img_url}
                  onClick={handleAvatarClick}
                  isSelected={selectedAvatarId === avatar.id}
                />
              );
            })}
        </AvatarSelectionContainer>
      ) : (
        <InterestSelectionContainer>
          {interestCardList &&
            interestCardList?.map((card) => {
              return (
                <Card
                  id={card?.id}
                  key={card?.id}
                  title={card?.title}
                  img_url={card?.img_url}
                  discription={card?.discription}
                  onClick={handleInterestCardClick}
                />
              );
            })}
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
        <Link onClick={handleClick}>I'll do it later</Link>
      </NextButtonContainer>
    </Main>
  );
};
