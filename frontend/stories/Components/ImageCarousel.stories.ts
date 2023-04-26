import type { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from '@/components/core-components/imageCarousel/ImageCasourel';
import { sampleData } from '@/components/core-components/imageCarousel/sampleData';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction


const meta: Meta<typeof ImageCarousel> = {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],

  
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    imageArray:sampleData.imageArray
     },
};



