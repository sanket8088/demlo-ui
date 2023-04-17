import React from 'react';
import { TagImg, TagMain, TagTitle, TagClose } from './Tag.style';

const Tag = () => {
  return (
    <TagMain>
      <TagImg src="https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148973052.jpg" />
      <TagTitle>Science</TagTitle>
      <TagClose>x</TagClose>
    </TagMain>
  );
};

export default Tag;
