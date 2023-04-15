import React from "react";
import styled from "@emotion/styled";
import {
  ModalContainer,
  TitleSpan,
  SubTitleSpan,
  TopRightImageContainer,
  OuterContainer,
  BottomLeftImageContainer,
  BottomRightImageContainer
} from "./ModalComponent.style";
import Image from "next/image";
import TopRightPlanet from "../../../public/top-right-planet.svg";
import BottomRightPlanet from "../../../public/bottom-right-planet.svg";
import BottomLeftPlanet from "../../../public/bottom-left-planet.svg";

interface IModalTypes {
  title: string;
  subTitle: string;
}

const ModalComponent = ({ title, subTitle }: IModalTypes) => {
  return (
    <OuterContainer>
      <TopRightImageContainer>
        <Image src={TopRightPlanet} alt={"Earth side"} width={183} height={179} />
      </TopRightImageContainer>

      <BottomRightImageContainer>
        <Image src={BottomRightPlanet} alt={"Earth side"} width={46} height={48} />
      </BottomRightImageContainer>

      <BottomLeftImageContainer>
        <Image src={BottomLeftPlanet} alt={"Earth side"} width={84} height={82} />
      </BottomLeftImageContainer>

      <ModalContainer>
      <TitleSpan>{title} </TitleSpan>
      <SubTitleSpan>{subTitle}</SubTitleSpan>
    </ModalContainer>

    </OuterContainer>
    
  );
};

export default ModalComponent;
