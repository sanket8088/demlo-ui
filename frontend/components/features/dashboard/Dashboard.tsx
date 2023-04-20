import React from 'react';
import Header from './Header';
import GridItem from '@/components/core-components/grid/GridItem';
import GridContainer from '@/components/core-components/grid/GridContainer';
import OnBoardingTemplate from '@/layouts/OnBoardingTemplate';

export const Dashboard = () => {
  return (
      <GridContainer>
      <GridItem xs={12}>
        <Header />
      </GridItem>
    </GridContainer>
    
  );
};
