import styled from "@emotion/styled";

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
  width: 23%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-around;
`;

// Dashboard Left

const DashboardLeftContainer = styled.div`
  grid-column: 1/-9;
  grid-row: 1;
`;

const ProfileContainer = styled.div`
  width: 100%;
  padding: 5%;
  position: relative;
  border-radius: 14px;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(21px);
`;

const AvatarContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const UserName = styled.p`
  margin-top: 5%;
  font-size: 0.9rem;
  color: #ffffff;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
`;

const StyleChnageButton = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 4%;
`;

const RewardAnnouncementConatiner = styled.div`
  width: 100%;
  padding: 10%;
  margin: auto;
  display: flex;
  margin-top: 6%;
  align-items: start;
  border-radius: 14px;
  flex-direction: column;
  justify-content: space-between;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(21px);
`;

const RewardAHeading = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 120%;
`;

const RewardADescription = styled.p`
  width: 90%;
  margin-top: 4%;
  font-size: 0.75rem;
  color: #a5a5a5;
  font-weight: 400;
  line-height: 120%;
`;

const RewardClaimContainer = styled.div`
  width: 100%;
  padding: 7%;
  margin: auto;
  display: flex;
  margin-top: 6%;
  align-items: center;
  border-radius: 14px;
  justify-content: space-between;
  background: radial-gradient(
    100% 100% at 0% 0%,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(21px);
`;

const PrizeImageContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RewardClaimTiming = styled.div`
  width: 70%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
`;

const RewardTimeHighlight = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.783);
`;

const AdvertisementContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
`;

export {
  UserName,
  LogoContainer,
  RewardAHeading,
  NavigationIcon,
  NavigationText,
  AvatarContainer,
  HeaderContainer,
  ProfileContainer,
  RewardClaimTiming,
  StyleChnageButton,
  RewardADescription,
  SearchBarContainer,
  RewardTimeHighlight,
  PrizeImageContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  NavigationsContainer,
  RewardClaimContainer,
  NotificationContainer,
  DashboardLeftContainer,
  AdvertisementContainer,
  RewardAnnouncementConatiner,
};
