import styled from '@emotion/styled';

const Main = styled.div`
  top: 50%;
  left: 50%;
  width: 70%;
  height: 90vh;
  padding: 1%;
  position: absolute;
  transform: translate(-50%, -50%);
  border: 1px solid red;
`;

const MainOne = styled.div`
  width: 50%;
  margin: auto;
  color: white;
  margin-bottom: 3%;
  border: 1px solid red;
`;

const MainTwo = styled.div`
  width: 40%;
  height: 15%;
  margin: auto;
  margin-bottom: 3%;
  border: 1px solid red;
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
  margin-bottom: 3%;
`;

const MainFour = styled.div`
  width: 45%;
  height: 15%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
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
