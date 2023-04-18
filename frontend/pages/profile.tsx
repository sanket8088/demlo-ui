import React from "react";
import UserProfile from "@/components/features/profile";
import OnBoardingTemplate from "@/layouts/OnBoardingTemplate";

const profile = () => {
  return (
    <OnBoardingTemplate>
      <UserProfile />
    </OnBoardingTemplate>
  );
};

export default profile;
