import React from 'react';
import { BadgeContainer } from './styles';

export const Badge = ({ content, fontColor, backgroundColor}) => {
  return (
    <BadgeContainer fontColor={fontColor} backgroundColor={backgroundColor}>
      {content ? content : 'This is a badge.'}
    </BadgeContainer>
  );
};
