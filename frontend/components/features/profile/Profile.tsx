import {
  Main,
  Link,
  Heading,
  MainFour,
  Paragraph,
  MainThree,
  ProgressBar,
  Instructions,
  SearchContainer,
  IntrestTagContainer,
} from './Profile.style';
import React, { useState } from 'react';
import Tag from '@/components/core-components/tag/Tag';
import SelectAvatar from '@/components/SelectAvatar/SelectAvatar';
import SelectInterest from '@/components/SelectInterest/SelectInterest';
import SearchBar from '@/components/core-components/searchbar/Searchbar';
import HorizontalStepper from '@/components/core-components/stepper/Stepper';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';

interface ChildProps {
  count: number;
}

export const ProfileOne = () => {
  const [count, setCount] = useState<number>(0);

  type HandleClick = () => void;

  const handleClick: HandleClick = () => {
    setCount(count + 1);
  };

  return (
    <Main>
      <ProgressBar>
        <HorizontalStepper count={count} />
      </ProgressBar>
      <Instructions>
        <Heading>
          {count === 0 ? ' Welcome Michael!' : 'Select your interests'}
        </Heading>
        <Paragraph>
          {count === 0
            ? ' Pick your style'
            : 'Select any 5 options to help us to  set and priorities your interests.'}
          Pick your style
        </Paragraph>
      </Instructions>
      <SearchContainer>{count === 1 ? <SearchBar /> : null}</SearchContainer>
      <IntrestTagContainer>{count === 1 ? <Tag /> : null}</IntrestTagContainer>
      <MainThree>
        {count === 0 ? <SelectAvatar /> : <SelectInterest />}
      </MainThree>
      <MainFour>
        <ButtonComponent
          size="medium"
          label="Next"
          variant="contained"
          fullWidth
          onClick={handleClick}
        />
        <Link>I'll do it later</Link>
      </MainFour>
    </Main>
  );
};
