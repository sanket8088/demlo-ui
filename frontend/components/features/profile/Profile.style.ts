import styled from '@emotion/styled';

const Main = styled.div`
  top: 50%;
  left: 50%;
  width: 70%;
  height: 86vh;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const ProgressBar = styled.div`
  width: 50%;
  margin: auto;
  color: white;
  margin-bottom: 1%;
`;

const Instructions = styled.div`
  width: 70%;
  height: 12%;
  margin: auto;
  margin-bottom: 1%;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #cdcdcd;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
`;

const SearchContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  margin-bottom: 2%;
  align-items: center;
  justify-content: center;
`;

const InterestTagContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  margin-bottom: 2%;
  justify-content: space-evenly;
`;

const AvatarSelectionContainer = styled.div`
  width: 80%;
  height: 52%;
  margin: auto;
  display: grid;
  margin-bottom: 2%;
  grid-template-columns: repeat(5, 21%);
  &:hover {
    cursor: pointer;
  }
`;

const InterestSelectionContainer = styled.div`
  width: 100%;
  max-height: 40%;
  margin: auto;
  display: grid;
  overflow: auto;
  margin-bottom: 2%;
  grid-template-columns: repeat(4, 25%);
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
  width: 45%;
  height: 14%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.p`
  color: #00b5d1;
  font-size: 13px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  cursor: pointer
`;

export {
  Main,
  Link,
  Heading,
  Paragraph,
  ProgressBar,
  Instructions,
  SearchContainer,
  InterestTagContainer,
  NextButtonContainer,
  AvatarSelectionContainer,
  InterestSelectionContainer,
};
