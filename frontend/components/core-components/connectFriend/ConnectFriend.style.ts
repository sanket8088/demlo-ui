import styled from "@emotion/styled";


const MainDiv = styled.div`
margin-bottom: 1.2rem;
display: flex;
justify-content: space-between;

`

const SquadList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const StudentDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 120%;
color: #FFFFFF;
 
`;

const GradeUniversityName = styled.span`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 120%;
color: #A5A5A5;

`;

export { StudentDetails, Name, GradeUniversityName, SquadList, MainDiv}