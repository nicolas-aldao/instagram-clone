import React from 'react';
import { TitleStyle, SubtitleStyle } from './styles';

export const Title = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export const Subtitle = ({ children }) => {
  return <SubtitleStyle>{children}</SubtitleStyle>;
};
