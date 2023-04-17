import styled from "@emotion/styled";
const PolicyWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;

p{
    font-size: 14px;
    font-weight: 500;
    color: #CDCDCD;

    span{
        color:#0A66C2;
    }
}
 
`;

const HR = styled.p`
position: relative;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 11px;
color: rgba(255, 255, 255, 0.6);
display: block;
text-align: center;
::before{
    content:" ";
  display: block;
  height: 1px;
  width: 16rem;
  position: absolute;
  top: 50%;
  left: 0;
  background: rgba(255, 255, 255, 0.2);
}
::after{
    content:" ";
  height: 1px;
  width: 16rem;
  background: rgba(255, 255, 255, 0.2);
  display: block;
  position: absolute;
  top: 50%;
  right: 0;

}
`
const SwitchTab = styled.p`
font-weight: 400;
font-size: 16px;
color: #A5A5A5;
display: block;
text-align: center;
a{
    text-decoration: none;
    color: #0A6AC3
;
}
`

const ForgotLink= styled.p`
display: block;
text-align: end;
a{
    text-decoration: none;
   color: #0A6AC3;
}

`

export {
    PolicyWrap,
    HR,
    SwitchTab,ForgotLink
  };