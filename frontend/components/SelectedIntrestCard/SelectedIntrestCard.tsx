import React from 'react';
import {
  CardImg,
  CardTitle,
  CardClose,
  IntrestCard,
} from './SelectedIntrestCard.style';

const SelectedIntrestCard = () => {
  return (
    <IntrestCard>
      <CardImg src="https://img.freepik.com/free-vector/cartoon-galaxy-background_23-2148973052.jpg" />
      <CardTitle>Science</CardTitle>
      <CardClose>x</CardClose>
    </IntrestCard>
  );
};

export default SelectedIntrestCard;
