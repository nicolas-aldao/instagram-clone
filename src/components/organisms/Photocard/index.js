import React from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../../atoms/FavButton';
import { useNearScreen } from '../../../hooks/useNearScreen';
import { Article, ImgWrapper, Img, Button } from './styles';

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
          {includeDetails && title && <h4>{title}</h4>}
          {includeDetails && author && <h5>{author}</h5>}
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
