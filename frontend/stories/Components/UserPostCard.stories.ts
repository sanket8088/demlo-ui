import type { Meta, StoryObj } from '@storybook/react';
import { sampleData } from '@/components/core-components/imageCarousel/sampleData';

import UserPostCard from '@/components/features/dashboard/userPost/UserPostCard';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserPostCard> = {
  title: 'Components/UserPostCard',
  component: UserPostCard,
  tags: ['autodocs'],

  
};

export default meta;
type Story = StoryObj<typeof UserPostCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
 args:{
  creatorName:"Nancy",
        postTime:"23 minutes ago",
        textContent:"Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6 Hello peers, i’m here to share my achievements. i made during this academic year :). I was the top performing kid of the grade 6",
        avatarImage:"https://picsum.photos/id/64/200/300",
        postType:"image"

 }
};



