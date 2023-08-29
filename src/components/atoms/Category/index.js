import React from 'react';
import { Image } from './styles';
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';
const BrokenImage = 'https://static.thenounproject.com/png/504708-200.png';
const imageOnError = event => {
  event.currentTarget.src = BrokenImage;
  event.currentTarget.className = 'error';
};

export const Category = ({ cover = DEFAULT_IMAGE }) => (
  <Image src={cover} onError={imageOnError} />
);
