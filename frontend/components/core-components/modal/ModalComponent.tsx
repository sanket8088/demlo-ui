import React from "react";

import {
  ModalContainer,
  SubTitleSpan,
  TopRightImageContainer,
  BottomLeftImageContainer,
  BottomRightImageContainer,
  Modal,
  Title,
} from "./ModalComponent.style";
import Image from "next/image";
import TopRightPlanet from "../../../public/top-right-planet.svg";
import BottomRightPlanet from "../../../public/bottom-right-planet.svg";
import BottomLeftPlanet from "../../../public/bottom-left-planet.svg";

interface IModalTypes {
  title: string;
  subTitle: string;
  children?: React.ReactNode;
}

const ModalComponent = ({ title, subTitle, children }: IModalTypes) => {
  return (
    <ModalContainer>
      <TopRightImageContainer>
        <Image
          src={TopRightPlanet}
          alt={"Earth side"}
          width={183}
          height={179}
        />
      </TopRightImageContainer>
      <BottomRightImageContainer>
        <Image
          src={BottomRightPlanet}
          alt={"Earth side"}
          width={46}
          height={48}
        />
      </BottomRightImageContainer>

      <BottomLeftImageContainer>
        <Image
          src={BottomLeftPlanet}
          alt={"Earth side"}
          width={84}
          height={82}
        />
      </BottomLeftImageContainer>
      <Modal>
        <Title>{title}</Title>
        <SubTitleSpan>{subTitle}</SubTitleSpan>
        {children ? children : null}
      </Modal>
    </ModalContainer>
  );
};

export default ModalComponent;
