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
      <Modal>
        <Title>{title}</Title>
        <SubTitleSpan>{subTitle}</SubTitleSpan>
        {children ? children : null}
      </Modal>
    </ModalContainer>
  );
};

export default ModalComponent;
