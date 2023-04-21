import type { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from '@/components/core-components/imageCarousel/ImageCasourel';
// import { sampleData } from '@/components/core-components/imageCarousel/SampleData';
import UserPost from '@/components/features/dashboard/userPost';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const imageGallery = [
  { id: 1, src: "https://picsum.photos/id/58/780.webp" },
  { id: 2, src: "https://picsum.photos/id/56/780.webp" },
  { id: 3, src: "https://picsum.photos/id/278/780.webp" },
  { id: 4, src: "https://picsum.photos/id/458/780.webp" },
  { id: 5, src: "https://picsum.photos/id/23/780.webp" },
  { id: 6, src: "https://picsum.photos/id/75/780.webp" },
  { id: 7, src: "https://picsum.photos/id/70/780.webp" },
];
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
    imageArray:imageGallery
     },
};



