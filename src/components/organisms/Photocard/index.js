import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BROKEN_IMAGE_URL } from '../../../constants';
import { Context } from '../../../Context';
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
  const { state } = useContext(Context);
  const [likeFront, setLikeFront] = useState(liked);
  const [likeNumber, setLikeNumber] = useState(likes);
  const { setNotRegisteredModal } = useContext(Context);

  const imageOnError = event => {
    event.currentTarget.src = BROKEN_IMAGE_URL;
  };

  const handleLike = async () => {
    if (state.userId) {
      try {
        await addLikeAPI(state.userId, id);
        setLikeFront(true);
        setLikeNumber(likeNumber + 1);
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
        setLikeNumber(likeNumber - 1);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('User is not logged');
    }
  };

  const showModalFunction = async () => {
    setNotRegisteredModal(true);
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
              <Img src={src} onError={imageOnError} />
            </ImgWrapper>
          </Link>
          {includeDetails && title && <Title>{title}</Title>}
          {includeDetails && author && <Subtitle>{author}</Subtitle>}
          <FavButton
            liked={likeFront}
            likes={likeNumber}
            onClick={
              state.userId
                ? likeFront
                  ? handleDislike
                  : handleLike
                : showModalFunction
            }
          />
        </>
      )}
    </Article>
  );
};
