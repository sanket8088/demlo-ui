import styled from '@emotion/styled';


const CircleList = styled.div`
      height: 100%;
      display:flex;
      justify-content: space-between;
      `


const SingleSquadContainer = styled.div`
  width: 48%;
  height: 100%;
  border-radius: 14px;
  background: rgba(132, 132, 133, 0.1);
  box-shadow: 0px 8px 24px rgba(10, 102, 194, 0.06);
  padding: 1%;
`;

const ImageContainer = styled.div`
  width: 100%;
  border-radius: 14px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
`;

const SquadTitle = styled.span`
    color: #FFFFFF;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.03em;
    margin-bottom: 1em;

`

const SquadJoinInfoContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 0.5em;

`;

const SquadCategory = styled.div`
padding-top: 2px;
display: flex;
justify-content: center;
align-items: center;
color: #CDCDCD;
font-size: 12px;
line-height: 11px;
font-weight: 400;


`

const MembersContainer = styled.div`
display: flex;
align-items: center
`


const MembersIcon = styled.div`
width: 24px;
height: 24px;
border-radius: 50%;
border: 1px solid #FFFFFF;
`
const MembersCount = styled.span`
    color: #A5A5A5;
    font-size: 10px;
    line-height: 15px;
    padding-left: 10px;

`


export {SingleSquadContainer, ImageContainer, SquadTitle, SquadJoinInfoContainer, SquadCategory, MembersContainer, MembersIcon, MembersCount, CircleList}
