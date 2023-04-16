import styled from '@emotion/styled';

const Main = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 21%);
  &:hover {
    cursor: pointer;
  }
`;

export { Main };
