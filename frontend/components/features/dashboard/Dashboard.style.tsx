import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #1d2331;
  justify-content: space-between;
  border: 0.1px solid white;
`;

const HeaderLeftContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.1px solid white;
`;

const LogoContainer = styled.div`
  width: 15%;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1px solid white;
`;

const SearchBarContainer = styled.div`
  width: 60%;
  border: 0.1px solid white;
`;

const HeaderRightContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavigationsContainer = styled.div`
  width: 70%;
  display: flex;
`;

const NavigationIcon = styled.div`
  width: 20%;
  padding: 1.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 0.1px solid white;
`;

const NavigationText = styled.span`
  color: #a5a5a5;
  text-align: center;
  line-height: 120%;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const NotificationContainer = styled.div`
  width: 20%;
  border: 0.1px solid white;
`;

export {
  LogoContainer,
  NavigationIcon,
  NavigationText,
  HeaderContainer,
  SearchBarContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  NavigationsContainer,
  NotificationContainer,
};
