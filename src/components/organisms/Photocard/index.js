import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavButton } from '../../atoms/FavButton';
//import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useNearScreen } from '../../../hooks/useNearScreen';
import { useMutationToggleLike } from '../../../hooks/useMutationToggleLike';
import { Article, ImgWrapper, Img, Button } from './styles';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg';

export const Photocard = (
  { id, liked, likes = 0, src = DEFAULT_IMAGE },
  props,
) => {
  //const key = `liked-${id}`;
  //const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();
  const { mutation, mutationLoading, mutationError } = useMutationToggleLike();

  const handleFavClick = () => {
    //!liked &&
    mutation({
      variables: {
        input: { id },
      },
    });
    //setLiked(!liked)
  };
  //console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </Fragment>
      )}
    </Article>
  );
};
