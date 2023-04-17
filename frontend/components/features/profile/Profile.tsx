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
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Tag from "@/components/core-components/tag/Tag";
import Card from "@/components/core-components/card/Card";
import BadgeAvatars from "@/components/core-components/avatar/Avatar";
import SearchBar from "@/components/core-components/searchbar/Searchbar";
import HorizontalStepper from "@/components/core-components/stepper/Stepper";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import { fetchQueries } from "@/utility/queryController";
import { useQuery, useQueries } from "react-query";
import { getAuthFromStorage } from "@/utility/auth";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { UserContext } from "@/utility/Store";

interface ChildProps {
  count: number;
}

interface Avatars {
  id: number;
  name: string;
  img_url: string;
}

export const UserProfile = () => {
  const { token } = getAuthFromStorage();

  const [count, setCount] = useState<number>(0);
  const [avatarList, setAvatarList] = useState<Avatars[]>([]);
  const value = useContext(UserContext);
  type HandleClick = () => void;
  console.log("value", value);

  const handleClick: HandleClick = () => {
    setCount(count + 1);
  };

  // const fetchAvatarData = () => {
  //   axios
  //     .get("http://66.94.102.196:9001/v1/api/user/avatar", {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((response) => {
  //       setAvatarList(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  const { isLoading, error, data } = useQuery({
    queryFn: () => fetchQueries("user/avatar"),
  });

  useEffect(() => {
    if (data) {
      setAvatarList(data?.data);
    }
  });

  console.log(avatarList);
  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Main>
      <ProgressBar>
        <HorizontalStepper count={count} />
      </ProgressBar>
      <Instructions>
        <Heading>
          {count === 0 ? " Welcome Michael!" : "Select your interests"}
        </Heading>
        <Paragraph>
          {count === 0
            ? " Pick your style"
            : "Select any 5 options to help us to  set and priorities your interests."}
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
            avatarList?.map((avatr) => {
              return (
                <BadgeAvatars
                  key={avatr.name}
                  alt={avatr.name}
                  src={avatr.img_url}
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
