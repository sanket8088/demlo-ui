import type { Meta, StoryObj } from '@storybook/react';


import UserPost from '@/components/features/dashboard/userPost';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof UserPost> = {
  title: 'Components/UserPostCard',
  component: UserPost,
  tags: ['autodocs'],

  
};

export default meta;
type Story = StoryObj<typeof UserPost>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
 
};



