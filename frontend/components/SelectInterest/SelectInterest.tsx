import {
  Main,
  MainTop,
  MainBottom,
  MainTopInput,
  SelectedIntrests,
} from './SelectInterest.style';
import React from 'react';
import SearchBar from '../core-components/searchbar/Searchbar';
import SelectedIntrestCard from '../SelectedIntrestCard/SelectedIntrestCard';
import InterestAreaCard from '../core-components/interest-card/InterestCard';

const SelectInterest = () => {
  return (
    <Main>
      <MainTop>
        <MainTopInput>
          <SearchBar />
        </MainTopInput>
        <SelectedIntrests>
          <SelectedIntrestCard />
          <SelectedIntrestCard />
          <SelectedIntrestCard />
          <SelectedIntrestCard />
          <SelectedIntrestCard />
        </SelectedIntrests>
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
