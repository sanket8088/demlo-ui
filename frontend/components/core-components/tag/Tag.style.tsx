import styled from '@emotion/styled';

const TagMain = styled.div`
  width: 15%;
  height: 100%;
  padding: 1%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-around;
  background: rgba(132, 132, 133, 0.1);
  box-shadow: 0px 8px 24px rgba(10, 102, 194, 0.06);
`;

const TagImg = styled.img`
  width: 17px;
  height: 17px;
  border-radius: 50%;
`;

const TagTitle = styled.span`
  width: 50%;
  height: 100%;
  color: #fff;
  font-size: 11px;
  text-align: center;
`;

const TagClose = styled.span`
  width: 10%;
  height: 100%;
  color: #fff;
  font-size: 11px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export { TagMain, TagImg, TagTitle, TagClose };
