import React from 'react';
import Header from './Header';
import DashboardLeft from './DashboardLeft';
import GridItem from '@/components/core-components/grid/GridItem';
import GridContainer from '@/components/core-components/grid/GridContainer';

export const Dashboard = () => {
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Header />
      </GridItem>
      <GridItem xs={12}>
        <DashboardLeft />
      </GridItem>
    </GridContainer>
  );
};
