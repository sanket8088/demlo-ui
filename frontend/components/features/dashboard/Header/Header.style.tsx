import styled from '@emotion/styled';

// Header

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background: #1d2331;
  justify-content: space-between;
  margin-bottom: 1.375rem;
`;

const HeaderLeftContainer = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 15%;
  padding: 2%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  width: 60%;
`;

const HeaderRightContainer = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationsContainer = styled.div`
  width: 70%;
  display: flex;
`;

const NavigationIcon = styled.div`
  width: 20%;
  padding: 1.5%;
  display: flex;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const NavigationText = styled.span`
  color: #a5a5a5;
  text-align: center;
  line-height: 120%;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;

const NotificationContainer = styled.div`
  width: 25%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
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
