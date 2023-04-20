import styled from '@emotion/styled';

const ProgressBar = styled.div`
  width: 50%;
  margin: auto;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #cdcdcd;
  font-size: 1rem;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
`;

const SearchContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InterestTagContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`;

const AvatarSelectionContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  padding-bottom: 1.25rem;
  grid-template-columns: repeat(5, 21%);

  &:hover {
    cursor: pointer;
  }
`;

const InterestSelectionContainer = styled.div`
  width: 100%;
  margin: auto;
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(4, 25%);
  border: 1px solid red;

  && {
    &::-webkit-scrollbar {
      width: 4px !important;
    }

    &::-webkit-scrollbar-track {
      background-color: #1c232d !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #a5a5a5 !important;
    }
  }
`;

const NextButtonContainer = styled.div`
  width: 55%;
  margin: auto;
`;

const Link = styled.p`
  color: #00b5d1;
  font-size: 13px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
`;

export {
  Link,
  Heading,
  Paragraph,
  ProgressBar,
  SearchContainer,
  NextButtonContainer,
  InterestTagContainer,
  AvatarSelectionContainer,
  InterestSelectionContainer,
};
