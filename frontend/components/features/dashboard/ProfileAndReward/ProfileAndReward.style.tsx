import styled from "@emotion/styled";

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
  max-width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
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
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 120%;
`;

const RewardADescription = styled.p`
  margin: 0;
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
  margin-top: 2%;
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
`;

export {
  UserName,
  RewardAHeading,
  AvatarContainer,
  ProfileContainer,
  RewardClaimTiming,
  StyleChnageButton,
  RewardADescription,
  RewardTimeHighlight,
  PrizeImageContainer,
  RewardClaimContainer,
  DashboardLeftContainer,
  AdvertisementContainer,
  RewardAnnouncementConatiner,
};
