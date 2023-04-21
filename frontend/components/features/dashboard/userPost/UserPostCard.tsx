import GridContainer from "@/components/core-components/grid/GridContainer";
import GridItem from "@/components/core-components/grid/GridItem";
import React from "react";

import {
  UserPostCardWrapper,
  AlignRight,
  AlignRow,
  TextPost,
  AvatarInfo,
  ButtonAligner,
  PaddingRight,
} from "./UserPost.style";
import GlobeIcon from "@/assets/icons/jsx/GlobeIcon";
import ThreeDotBtn from "@/assets/icons/jsx/ThreeDotBtn";
import ImageCarousel from "@/components/core-components/imageCarousel/ImageCasourel";
import Interactions from "../Interactions";
import ButtonComponent from "@/components/core-components/button/ButtonComponent";
import CustomAvatar from "@/components/core-components/avatar/CustomAvatar";
import VideoComponent from "@/components/core-components/video/video";
interface ITypesUserPostCard {
  creatorName: string;
  postTime: string;
  textContent?: string;
  avatarImage?: string;
  postType?: "video" | "image" | "article";
}

const UserPostCard = ({
  creatorName,
  postTime,
  textContent,
  avatarImage,
  postType,
}: ITypesUserPostCard) => {
  const postComponent =
    postType === "image" ? (
      <ImageCarousel />
    ) : postType === "video" ? (
      <VideoComponent />
    ) : null;
  return (
    <UserPostCardWrapper>
      <header>
        <GridContainer spacing={2}>
          <GridItem xs={8}>
            <AlignRow>
              <CustomAvatar src={avatarImage} width={42} height={42} />
              <AvatarInfo>
                <p>{creatorName}</p>
                <p>
                  {postTime}
                  <GlobeIcon />
                </p>
              </AvatarInfo>
            </AlignRow>
          </GridItem>
          <GridItem xs={4}>
            <AlignRight>
              <ThreeDotBtn />
            </AlignRight>
          </GridItem>
          <GridItem xs={12}>
            <TextPost>{textContent}</TextPost>
          </GridItem>
          <GridItem xs={12}>
            <PaddingRight>{postComponent}</PaddingRight>
          </GridItem>
          <GridItem xs={6}>
            <Interactions />
          </GridItem>
          <GridItem xs={12}>
            <ButtonAligner>
              <ButtonComponent
                label="React"
                fullWidth
                size="medium"
                variant="outlined"
              />
              <ButtonComponent
                label="Scribble"
                fullWidth
                size="medium"
                variant="outlined"
              />
              <ButtonComponent
                label="Share"
                fullWidth
                size="medium"
                variant="outlined"
              />
            </ButtonAligner>
          </GridItem>
        </GridContainer>
      </header>
    </UserPostCardWrapper>
  );
};

export default UserPostCard;
