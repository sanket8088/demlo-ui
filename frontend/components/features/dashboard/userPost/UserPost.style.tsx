import styled from "@emotion/styled";
const SocialPostContainer = styled.section`
  height: 89vh;
  grid-row: 1;
  grid-column: 3/-4;
  overflow-y: auto;
`;
const UserPostCardWrapper = styled.div`
  padding-inline: var(--spacing-3);
  padding-bottom: var(--spacing-3);
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.024) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(21px);

  border-radius: 14px;
`;
const AlignRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    cursor: pointer;
    margin-right: var(--spacing-3);
  }
`;
const AlignRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-2);
`;
const TextPost = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: var(--spacing-4);
  color: var(--color-font-dark);
`;

const AvatarInfo = styled.div`
  p {
    margin: 0;
  }
  p:first-child {
    font-size: var(--spacing-3);
    font-weight: 500;
    color: var(--color-white);
    line-height: 120%;
    margin-bottom: 2px;
  }
  p:nth-child(2) {
    display: flex;
    text-align: center;
    align-items: center;
    color: #a5a5a5;
    font-size: var(--spacing-2);
    font-weight: 400;
    line-height: 120%;

    svg {
      padding-left: var(--spacing-3);
    }
  }
`;

const AlignInteractions = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2);
  align-items: center;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    color: var(--color-font-dark);
    font-size: 0.875rem;
    line-height: 1.313rem;
    div {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--color-font-dark);
    }
  }
`;
const ButtonAligner = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--spacing-2);
  align-items: center;
`;

export {
  SocialPostContainer,
  UserPostCardWrapper,
  AlignRight,
  AlignRow,
  TextPost,
  AvatarInfo,
  AlignInteractions,
  ButtonAligner,
};
