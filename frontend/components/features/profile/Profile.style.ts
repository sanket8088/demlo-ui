import styled from '@emotion/styled';

const Main = styled.div`
  top: 50%;
  left: 50%;
  width: 70%;
  height: 88vh;
  padding: 1%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const MainOne = styled.div`
  width: 50%;
  margin: auto;
  color: white;
  margin-bottom: 1%;
`;

const MainTwo = styled.div`
  width: 40%;
  height: 14%;
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
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: #cdcdcd;
`;

const MainThree = styled.div`
  width: 100%;
  height: 52%;
  margin-bottom: 5%;
`;

const MainFour = styled.div`
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
