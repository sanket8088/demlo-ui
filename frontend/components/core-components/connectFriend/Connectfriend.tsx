import React from "react";
import { MainDiv, StudentDetails, Name, GradeUniversityName } from "./ConnectFriend.style";
import { Avatar } from "@mui/material";
import ButtonComponent from "../button/ButtonComponent";

interface ITypesConnectList {
  name: string;
  grade: string;
  university: string;
  avatar?: string

}

// learn more on grid here : https://mui.com/material-ui/react-grid/
const ConnectFriend = ({ name, grade, university, avatar }: ITypesConnectList) => {
  return (
    <MainDiv>
      <Avatar sx={{ width: 38, height: 38 }} src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png?f=webp&w=256"/>
      <StudentDetails>
        <Name>{name}</Name>
        <GradeUniversityName>{grade} | {university}</GradeUniversityName>
      </StudentDetails>
      <ButtonComponent label={"Connect"} variant="contained" size = "small"/>
    </MainDiv>

    
  );
};

export default ConnectFriend;
