import React from "react";
import Header from "./Header";
import GridItem from "@/components/core-components/grid/GridItem";
import GridContainer from "@/components/core-components/grid/GridContainer";
import { CircleContainer } from "./circle/circle";
import DashboardLeft from "./DashboardLeft";
import UserPost from "@/components/features/dashboard/userPost";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="grid">
        <CircleContainer />
        <DashboardLeft />
        <UserPost />
      </div>
    </>
  );
};
