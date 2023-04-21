import React from "react";
import ConnectionContainer from "@/components/core-components/connection/Connection";
import { CircleList } from "@/components/core-components/squad/Squad.style";
import SquadContainer from "@/components/core-components/squad/Squad";
import ConnectFriend from "@/components/core-components/connectFriend/Connectfriend";
import { SquadList } from "@/components/core-components/connectFriend/ConnectFriend.style";
import { Main, NextContainer, CircleNextContainer } from "./circle.style";
import NextIcon from "@/assets/icons/jsx/Next";

export const CircleContainer = () => {
  return (
    <Main>
      <ConnectionContainer
        title="Circles to join"
        children={
          <>
            <CircleNextContainer>
              <NextIcon />
            </CircleNextContainer>
            <CircleList>
              <SquadContainer name={"Math Squad"} />
              <SquadContainer name={"Math Squad"} />
            </CircleList>
          </>
        }
      />
      <ConnectionContainer
        title="Top Squads to connect"
        children={
          <SquadList>
            <ConnectFriend
              name={"Liam"}
              grade={"6"}
              university={"Christian Middle"}
            />
            <ConnectFriend
              name={"Stuart"}
              grade={"6"}
              university={"Christian Middle"}
            />
            <ConnectFriend
              name={"Liam"}
              grade={"6"}
              university={"Christian Middle"}
            />
            <NextContainer>
              See More
              <NextIcon />
            </NextContainer>
          </SquadList>
        }
      />
    </Main>
  );
};