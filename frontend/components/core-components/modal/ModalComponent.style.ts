
import styled from "@emotion/styled";
const Title = styled.span`
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  line-height: 120%;
  font-style: normal;
 display: block;
 margin-bottom: 1em;
 
`;

const SubTitleSpan = styled.span`
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  line-height: 21px;
  color: #cdcdcd;
  margin-top: 6px;
  display: block;
`;



const ModalContainer = styled.div`
  position: relative;
    width: 100%;
    min-height: 250px;
    height: 100%;
`;

const TopRightImageContainer = styled.div`
  position: absolute;
  right: -13%;
  top: -6%;
  z-index: -99;
`;


const BottomRightImageContainer = styled.div`
  position: absolute;
  right: -4%;
  bottom: 10%;
  z-index: 1;
`;

const BottomLeftImageContainer = styled.div`
  position: absolute;
  left: -10%;
  bottom: 10%;
  z-index: 1;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  background: green;
  width: var(--spacing-7);
`;

const Modal = styled.div`
 
  width: 100%;
  height: 100%;
 
  border-radius: 20px;
  background: radial-gradient(
      20.04% 35.63% at 20.04% 38.89%,
      rgba(0, 103, 255, 0.2) 0%,
      rgba(0, 103, 255, 0) 100%
    ),
    radial-gradient(
      30.97% 15.76% at 93.79% 86.18%,
      rgba(0, 231, 190, 0.1) 0%,
      rgba(0, 231, 190, 0) 100%
    ),
    rgba(28, 35, 45, 0.2)
;
  box-shadow: 0px 4px 26px rgba(28, 35, 45, 0.25),
    inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(31px);
  padding-top:var(--spacing-9);
padding-inline: var(--spacing-9);
z-index: 100; 
`


export {
  Title,
  ModalContainer,
  Flex,
  SubTitleSpan,
  TopRightImageContainer,
 
  BottomLeftImageContainer,
  BottomRightImageContainer,
  Modal
};
