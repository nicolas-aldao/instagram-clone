import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context as AuthContext } from '../../../AuthContext';
import { addLikeAPI, addDislikeAPI } from '../../../services/apiPetgram';
import { FavButton } from '../../atoms/FavButton';
import { useNearScreen } from '../../../hooks/useNearScreen';
import { Article, ImgWrapper, Img, Title, Subtitle } from './styles';

export const Photocard = ({
  id,
  liked,
  likes = 0,
  src,
  title,
  author,
  includeDetails = false,
}) => {
  const [show, element] = useNearScreen();
  const { state } = useContext(AuthContext);
  const [likeFront, setLikeFront] = useState(false);
  const [likeNumber, setLikeNumber] = useState(0);
  // console.log('🚀 ~ file: index.js:13 ~ SOLO state:', state);
  // state.userId && console.log('🚀 ~ file: index.js:13 ~ SOLO EL ID state:', state.userId);

  const handleLike = async () => {
    if (state.userId) {
      try {
        await addLikeAPI(state.userId, id);
        setLikeFront(true);
        setLikeNumber(1);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('User is not logged');
    }
  };

  const handleDislike = async () => {
    if (state.userId) {
      try {
        await addDislikeAPI(state.userId, id);
        setLikeFront(false);
        setLikeNumber(0);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('User is not logged');
    }
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
          <FavButton liked={liked || likeFront} likes={likes + likeNumber} onClick={(liked || likeFront) ? handleLike : handleDislike} />
        </>
      )}
    </Article>
  );
};
