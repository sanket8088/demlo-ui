import styled from '@emotion/styled';

const Main = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  &:hover {
    cursor: pointer;
  }
`;

const MainTop = styled.div`
  width: 70%;
  margin: auto;
  height: 28%;
  margin-bottom: 2%;
  border: 1px solid red;
`;

const MainTopInput = styled.div`
  width: 70%;
  height: 68%;
  margin: auto;
  margin-bottom: 2%;
  border: 1px solid red;
`;

const MainBottom = styled.div`
  width: 100%;
  height: 70%;
  margin: auto;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 25%);
  border: 1px solid red;
`;

export { Main, MainTop, MainTopInput, MainBottom };
