import styled from "@emotion/styled";


const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

`


const CircleNextContainer = styled.div`
position: absolute;
right: -1.5rem;
top: 50%;
bottom: 50%
`

export {Main, NextContainer, CircleNextContainer}