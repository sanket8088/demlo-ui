import React from 'react';
import Header from './Header/Header';
import { CircleContainer } from './circle/circle';
import UserPost from '@/components/features/dashboard/userPost';
import ProfileAndReward from './ProfileAndReward/ProfileAndReward';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="grid">
        <CircleContainer />
        <ProfileAndReward />
        <UserPost />
      </div>
    </>
  );
};
