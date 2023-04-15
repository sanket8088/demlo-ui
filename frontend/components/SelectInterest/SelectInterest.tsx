import {
  Main,
  MainTop,
  MainTopInput,
  MainBottom,
} from './SelectInterest.style';
import React from 'react';
import SearchBar from '../core-components/searchbar/Searchbar';
import InterestAreaCard from '../core-components/interest-card/InterestCard';

const SelectInterest = () => {
  return (
    <Main>
      <MainTop>
        <MainTopInput>
          <SearchBar />
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
