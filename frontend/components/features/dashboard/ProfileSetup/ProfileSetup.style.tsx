import styled from '@emotion/styled';

const ProfileSetupContainer = styled.div`
  width: 100%;
  padding: 2%;
  margin-bottom: 2%;
  border-radius: 16px;
  backdrop-filter: blur(21px);
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
`;

const SetupInstruction = styled.p`
  width: 98%;
  font-size: 0.95rem;
  margin: auto;
  margin-bottom: 3%;
  color: #ffffff;
`;

const SetupSteps = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileComplete = styled.div`
  width: 48%;
  padding: 4%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(21px);
  border-radius: 14px;
`;

const CompleteAvatar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8%;
`;

const CompleteHeading = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 120%;
`;

const CompleteDescription = styled.p`
  margin: 0;
  margin-top: 4%;
  color: #a5a5a5;
  font-weight: 400;
  line-height: 120%;
  text-align: center;
  font-size: 0.7rem;
`;

export {
  SetupSteps,
  CompleteAvatar,
  ProfileComplete,
  CompleteHeading,
  SetupInstruction,
  CompleteDescription,
  ProfileSetupContainer,
};
