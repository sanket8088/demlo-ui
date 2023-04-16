import React, { useState } from 'react';
import HorizontalStepper from '../../stepper';
import SelectAvatar from '@/components/SelectAvatar/SelectAvatar';
import SelectInterest from '@/components/SelectInterest/SelectInterest';
import ButtonComponent from '@/components/core-components/button/ButtonComponent';
import {
  Main,
  Link,
  MainOne,
  MainTwo,
  Heading,
  MainFour,
  Paragraph,
  MainThree,
} from './Profile.style';

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
      <MainOne>
        <HorizontalStepper count={count} />
      </MainOne>
      <MainTwo>
        <Heading>Welcome Michael!</Heading>
        <Paragraph>Pick your style</Paragraph>
      </MainTwo>
      <MainThree>
        {/* <SelectAvatar /> */}
        <SelectInterest />
      </MainThree>
      <MainFour>
        <ButtonComponent
          size="medium"
          label="Next"
          variant="contained"
          fullWidth
          // onClick={handleClick}
        />
        <Link>I'll do it later</Link>
      </MainFour>
    </Main>
  );
};
