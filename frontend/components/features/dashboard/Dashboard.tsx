import React from 'react';
import Header from './Header';
import Profile from './Profile';
import GridItem from '@/components/core-components/grid/GridItem';
import GridContainer from '@/components/core-components/grid/GridContainer';

export const Dashboard = () => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Header />
      </GridItem>
      <GridItem xs={12}>
        <Profile />
      </GridItem>
    </GridContainer>
  );
};
