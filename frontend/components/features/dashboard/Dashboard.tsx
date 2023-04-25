import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import { CircleContainer } from "./circle/circle";
import UserPost from "@/components/features/dashboard/userPost";
import ProfileAndReward from "./ProfileAndReward/ProfileAndReward";
import AuthProvider from "@/contexts/AuthContext";
import useAuth from "@/hooks/useAuth";

export const Dashboard = () => {
  const [userName, setUserName] = useState("username");
  const { user } = useAuth();

  useEffect(() => {
    setUserName(user?.attributes?.given_name);
  }, [user]);
  return (
    <>
      <Header />
      <div className="grid">
        <CircleContainer />
        <ProfileAndReward username={userName} />
        <UserPost />
      </div>
    </>
  );
};
