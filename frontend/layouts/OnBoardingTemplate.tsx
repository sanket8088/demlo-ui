import React from "react";
import Image from "next/image";
import TopRightPlanet from "../assets/icons/top-right-planet.svg";
import BottomRightPlanet from "../assets/icons/bottom-right-planet.svg";
import BottomLeftPlanet from "../assets/icons/bottom-left-planet.svg";

import TopLeftPlanet from "../assets/icons/top-left-planet.svg";
import Stars from "../assets/icons/Stars.svg";
interface Props {
  children: React.ReactNode;
  span?: string;
  theme?: string;
}

const OnBoardingTemplate = ({ children, span, theme }: Props) => {
  const customSpan = span ? span : "medium";
  return (
    <main className="main-auth" data-theme={theme}>
      <Image src={Stars} alt="stars" layout="fill" className="stars" />
      <Image
        src={TopRightPlanet}
        alt={"Earth side"}
        width={179}
        height={183}
        className="top-right-planet"
      />
      <Image
        src={BottomRightPlanet}
        alt={"Earth side"}
        width={51}
        height={51}
        className="bottom-right-planet"
      />
      <Image
        src={TopLeftPlanet}
        alt={"Earth side"}
        width={67}
        height={67}
        className="top-left-planet"
      />
      <Image
        src={BottomLeftPlanet}
        alt={"Earth side"}
        width={84}
        height={82}
        className="bottom-left-planet"
      />
      <div className="grid">
        <div className={`grid-span-${customSpan}`}>{children}</div>
      </div>
    </main>
  );
};

export default OnBoardingTemplate;
