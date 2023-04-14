import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from '@/components/core-components/button/ButtonComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],

  
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
 size:"medium",
 variant:"contained",
 label:"Button",
 disabled:false,
 fullWidth:false
  },
};



