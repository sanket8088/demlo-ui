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
} from "./Profile.style";
import Box from "@mui/material/Box";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { InputAdornment } from "@mui/material";

import SearchIcon from "@/assets/icons/jsx/SearchIcon";
import { useDispatch, useSelector } from "react-redux";

import Tag from "@/components/core-components/tag/Tag";
import { fetchQueries } from "@/utility/queryController";
import Card from "@/components/core-components/card/Card";
import { getUserDetailsFromSession } from "@/utility/auth";
import CircularProgress from "@mui/material/CircularProgress";
import BadgeAvatars from "@/components/core-components/avatar/Avatar";
import SearchBar from "@/components/core-components/searchbar/Searchbar";
import React, { useEffect, useState, useContext, useCallback } from "react";
import HorizontalStepper from "@/components/core-components/stepper/Stepper";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import { Auth, Hub } from "aws-amplify";
import useAuth from "@/hooks/useAuth";
interface Avatars {
  id: number;
  name: string;
  img_url: string;
}

export const UserProfile = () => {
  const { user } = useAuth();
  const fetchAuthUser = async () => {
    try {
      console.log("fetchAuthUser");
      const fetchedUser = await Auth.currentAuthenticatedUser();
      // setIsAuthenticating(false);
      // setUser(fetchedUser);
      console.log(fetchedUser);
    } catch (err) {
      console.log("err");
    }
  };
  console.log("user from my conetx", user);
  useEffect(() => {
    fetchAuthUser();

    const authListener = Hub.listen(
      "auth",
      async ({ payload: { event, data } }) => {
        console.log("Auth Status Changed Event: ", event);
        console.log("Auth Status Changed Data: ", data);
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
  const [avatarList, setAvatarList] = useState<Avatars[]>([]);
  const [userName, setUserName] = useState<string>("Michael");
  const [selectedAvatarId, setSelectedAvatarId] = useState<number | null>(null);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const { isLoading, error, data } = useQuery({
    queryFn: () => fetchQueries("user/avatar"),
    onSuccess(data) {
      setAvatarList(data?.data);
    },
  });

  const handleAvatarClick = (id: number) => {
    setSelectedAvatarId(id);
  };

  useEffect(() => {
    if (count === 2) {
      router.push({
        pathname: "/dashboard",
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
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
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
          {count === 0 ? `Welcome ${userName}!` : "Select your interests"}
        </Heading>
        <Paragraph>
          {count === 0
            ? " Pick your style"
            : "Select any 5 options to help us to  set and priorities your interests."}
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
      <InterestTagContainer>{count > 0 ? <Tag /> : null}</InterestTagContainer>
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
