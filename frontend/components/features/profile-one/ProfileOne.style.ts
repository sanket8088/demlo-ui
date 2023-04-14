import styled from '@emotion/styled';

const Main = styled.div`
  top: 50%;
  left: 50%;
  width: 60%;
  height: 80vh;
  padding: 1%;
  position: absolute;
  background: #1c232d;
  transform: translate(-50%, -50%);
`;

const MainOne = styled.div`
  width: 60%;
  margin: auto;
  color: white;
  margin-bottom: 3%;
`;

const MainTwo = styled.div`
  width: 40%;
  height: 10%;
  margin: auto;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #cdcdcd;
`;

export { Main, MainOne, MainTwo, Heading, Paragraph };
