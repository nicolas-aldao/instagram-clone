import React from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../../atoms/FavButton';
import { useNearScreen } from '../../../hooks/useNearScreen';
import { Article, ImgWrapper, Img, Title, Subtitle } from './styles';

export const Photocard = (
  { id, liked, likes = 0, src, title, author, includeDetails = false },
) => {
  const [show, element] = useNearScreen();

  const handleFavClick = () => {
  };
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link
            to={{
              pathname: `/detail/${id}`,
              query: { name: 'John Doe' },
            }}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          {includeDetails && title && <Title>{title}</Title>}
          {includeDetails && author && <Subtitle>{author}</Subtitle>}
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
