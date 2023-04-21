import React from "react";
import Image from "next/legacy/image";
import {
  SingleSquadContainer,
  ImageContainer,
  SquadTitle,
  SquadJoinInfoContainer,
  SquadCategory,
  MembersContainer,
  MembersIcon,
  MembersCount
} from "./Squad.style";
import PublicIcon from "@/assets/icons/jsx/Public";
import ButtonComponent from "../button/ButtonComponent";
import { Avatar } from "@mui/material";

interface ITypesSquad {
  name: string;
}
const SquadContainer = ({ name }: ITypesSquad) => {
  const myLoader = () => {
    return `https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=2000`;
  };
  return (
    <SingleSquadContainer>
      <ImageContainer>
        <img
          src = "https://img.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg?w=2000"
          alt="Picture of the author"
        />
      </ImageContainer>

      <SquadTitle>{name}</SquadTitle>

      <SquadJoinInfoContainer>
        <SquadCategory>
          <PublicIcon /> &nbsp;Public
        </SquadCategory>
        <ButtonComponent label={"Join"} variant="contained" size="xs" />
      </SquadJoinInfoContainer>

      <MembersContainer>
      <MembersIcon>
      <Avatar sx={{ width: 24, height: 24 }} src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256"/>
      </MembersIcon>
      <MembersIcon>
      <Avatar sx={{ width: 24, height: 24 }} src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256"/>
        
      </MembersIcon>
      <MembersCount>
      250 Members
      </MembersCount>

     
      </MembersContainer>
    </SingleSquadContainer>
  );
};

export default SquadContainer;
