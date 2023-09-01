import React from 'react';
import { TitleStyle, SubtitleStyle, BasicTypoStyle } from './styles';

export const Title = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export const Subtitle = ({ children }) => {
  return <SubtitleStyle>{children}</SubtitleStyle>;
};

export const BasicTypo = ({ children }) => {
  return <BasicTypoStyle>{children}</BasicTypoStyle>;
};


