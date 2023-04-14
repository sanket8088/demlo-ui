import styled from "@emotion/styled";
const Paragraph = styled.p`
  font-size: 16px;
  text-align: center;
  color: white;
`;

const Main = styled.div`
  background: red;
  border: var(--spacing-7) blue;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  background: green;
  width: var(--spacing-7);
`;

export { Paragraph, Main, Flex };
