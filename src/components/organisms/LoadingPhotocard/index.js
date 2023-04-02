import React from 'react';
import { FavButton } from '../../atoms/FavButton';
import { Article, ImgWrapper, LoadingPhoto } from './styles';

export const LoadingPhotocard = () => {
  const handleFavClick = () => {};
  return (
    <Article>
      <ImgWrapper>
        <LoadingPhoto />
      </ImgWrapper>
      <FavButton liked={false} likes={'?'} onClick={handleFavClick} />
    </Article>
  );
};
