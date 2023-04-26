import React from 'react';
import { TagImg, TagMain, TagTitle, TagClose } from './Tag.style';

interface TagProps {
  id: number;
  title: string;
  img_url: string;
  onClick: (id: number) => void;
}

const Tag = ({ id, title, img_url, onClick }: TagProps) => {
  return (
    <TagMain>
      <TagImg src={img_url} alt={title} />
      <TagTitle>{title}</TagTitle>
      <TagClose onClick={() => onClick(id)}>x</TagClose>
    </TagMain>
  );
};

export default Tag;
