import styled from '@emotion/styled';

const Main = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const MainTop = styled.div`
  width: 70%;
  margin: auto;
  max-height: 26%;
  margin-bottom: 2%;
`;

const MainTopInput = styled.div`
  width: 70%;
  height: 65%;
  margin: auto;
  margin-bottom: 2%;
`;

const MainBottom = styled.div`
  width: 100%;
  max-height: 80%;
  margin: auto;
  display: grid;
  overflow: auto;
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

export { Main, MainTop, MainTopInput, MainBottom };
