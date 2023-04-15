import React from 'react';
import Input from '../core-components/input/Input';
import InterestAreaCard from '../core-components/interest-card/InterestCard';
import {
  Main,
  MainTop,
  MainTopInput,
  MainBottom,
} from './SelectInterest.style';

const SelectInterest = () => {
  return (
    <Main>
      <MainTop>
        <MainTopInput>
          <Input label="Search your topics" />
        </MainTopInput>
      </MainTop>
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
