import React from 'react';
import { BROKEN_IMAGE_URL } from '../../../constants';
import { Image } from './styles';

const imageOnError = event => {
  event.currentTarget.src = BROKEN_IMAGE_URL;
  event.currentTarget.style.maxWidth = '75px';
  event.currentTarget.style.maxHeight = '75px';
  event.currentTarget.style.objectFit = 'none';
};

export const Category = ({ cover }) => (
  <Image src={cover} onError={imageOnError} />
);
