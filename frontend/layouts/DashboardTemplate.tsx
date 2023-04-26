import React from "react";
import Image from "next/image";
import Stars from "../assets/icons/Stars.svg";
import RedPlanet from "../assets/icons/red-planet.svg";
import UFO from "../assets/icons/UFO.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectThemeState } from "@/Store/themeSlice";
interface Props {
  children: React.ReactNode;

  theme?: string;
}
const DashboardTemplate = ({ children, theme = "dark" }: Props) => {
  const themeState = useSelector(selectThemeState);
  const themeSelection = themeState ? "dark" : "light";
  return (
    <main
      className="main-dashboard"
      data-theme={themeSelection ? themeSelection : theme}
    >
      <Image src={Stars} alt="stars" layout="fill" className="stars" />
      <Image
        src={UFO}
        alt={"Earth side"}
        width={161}
        height={165}
        className="ufo"
      />
      <Image
        src={RedPlanet}
        alt={"Earth side"}
        width={73}
        height={75}
        className="red-planet"
      />
      <div className="grid">
        <div className="grid-span-full">{children}</div>
      </div>
    </main>
  );
};

export default DashboardTemplate;
