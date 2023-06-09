import styled from "@emotion/styled";

const Main = styled.div`
  display: flex;

  flex-direction: column;
  grid-column: 8/-1;
  grid-row: 1;
`;

const NextContainer = styled.div`
  display: flex;
  justify-content: end;
  color: #fff;
  margin-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  span {
    margin-top: 0.5rem;
  }
`;

const CircleNextContainer = styled.div`
  position: absolute;
  right: -1.5rem;
  top: 50%;
  bottom: 50%;
`;

const CircleContentMargin = styled.div`
  margin-top: 1rem;
`;

export { Main, NextContainer, CircleNextContainer, CircleContentMargin };
