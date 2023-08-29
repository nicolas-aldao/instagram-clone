import React from 'react';
import { Image } from './styles';
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpeg';
const BrokenImage =
  'https://developers.google.com/static/maps/documentation/maps-static/images/error-image-generic.png';
const imageOnError = event => {
  event.currentTarget.src = BrokenImage;
  event.currentTarget.style.maxWidth = '75px';
  event.currentTarget.style.maxHeight = '75px';
  event.currentTarget.style.objectFit = 'none';
};

export const Category = ({ cover = DEFAULT_IMAGE }) => (
  <Image src={cover} onError={imageOnError} />
);
