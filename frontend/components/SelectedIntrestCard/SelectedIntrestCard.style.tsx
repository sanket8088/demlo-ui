import styled from '@emotion/styled';

const IntrestCard = styled.div`
  width: 18%;
  height: 100%;
  padding: 1%;
  display: flex;
  align-items: center;
  border-radius: 4px;
  justify-content: space-around;
  background: rgba(132, 132, 133, 0.1);
  box-shadow: 0px 8px 24px rgba(10, 102, 194, 0.06);
`;

const CardImg = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

const CardTitle = styled.span`
  width: 50%;
  height: 100%;
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

const CardClose = styled.span`
  width: 10%;
  height: 100%;
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export { IntrestCard, CardImg, CardTitle, CardClose };
