import { Main, MainBottom } from './SelectInterest.style';
import React from 'react';
import InterestAreaCard from '../core-components/interest-card/InterestCard';

const SelectInterest = () => {
  return (
    <Main>
      <MainBottom>
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
        <InterestAreaCard />
      </MainBottom>
    </Main>
  );
};

export default SelectInterest;
