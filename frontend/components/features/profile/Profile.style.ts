import styled from '@emotion/styled';

const Main = styled.div`
  top: 50%;
  left: 50%;
  width: 60%;
  height: 85vh;
  padding: 1%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const MainOne = styled.div`
  width: 60%;
  margin: auto;
  color: white;
  margin-bottom: 3%;
`;

const MainTwo = styled.div`
  width: 50%;
  height: 16%;
  margin: auto;
  margin-bottom: 3%;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: #cdcdcd;
`;

const MainThree = styled.div`
  width: 100%;
  height: 45%;
  display: grid;
  margin-bottom: 3%;
  grid-template-columns: repeat(5, 22%);
  border: 1px solid red;
  &:hover {
    cursor: pointer;
  }
`;

const MainFour = styled.div`
  width: 55%;
  height: 16%;
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
`;

export {
  Main,
  Link,
  MainOne,
  MainTwo,
  Heading,
  MainFour,
  Paragraph,
  MainThree,
};
