import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button>
      <Icon
        size="32px"
        color={liked ? '#ff2f40' : 'black'}
        style={{ cursor: 'pointer' }}
        onClick={onClick}
      />
      {likes} like{likes > 1 ? 's' : ''}
    </Button>
  );
};
