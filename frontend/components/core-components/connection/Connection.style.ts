
import styled from "@emotion/styled";
const Title = styled.span`
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  line-height: 120%;
  font-style: normal; 
  padding-inline: var(--spacing-2);
  /* margin-bottom : var(--spacing-2); */
`;

const Modal = styled.div`
 
  width: 100%;
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
  padding-top:var(--spacing-3);
  padding-bottom:var(--spacing-3);
padding-inline: var(--spacing-3);
z-index: 100; 
margin-bottom: 1.8em;
`

export {Title, Modal}