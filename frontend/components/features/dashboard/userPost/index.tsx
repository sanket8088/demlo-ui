import NewPost from '../NewPost/NewPost';
import UserPostCard from './UserPostCard';
import { SocialPostContainer } from './UserPost.style';
import ProfileSetup from '../ProfileSetup/ProfileSetup';

const index = () => {
  return (
    <SocialPostContainer>
      <ProfileSetup />
      <NewPost />
      <UserPostCard
        creatorName="Nancy"
        postTime="23 minutes ago"
        textContent="Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6 Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6"
        avatarImage="https://picsum.photos/id/64/200/300"
        postType="image"
      />
      <UserPostCard
        creatorName="Andrew"
        postTime="23 minutes ago"
        textContent="Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6 Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6"
        avatarImage="https://picsum.photos/id/177/200/300"
        postType="article"
      />
      <UserPostCard
        creatorName="Dadi Zhao"
        postTime="23 minutes ago"
        textContent="Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6 Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6"
        avatarImage="https://picsum.photos/id/85/200/300"
        postType="video"
      />
    </SocialPostContainer>
  );
};

export default index;
