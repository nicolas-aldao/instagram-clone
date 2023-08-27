import React from 'react';
import { LoadingPhotocard } from '../LoadingPhotocard';
import { Photocard } from '../Photocard';

export const ListOfPhotocardsComponent = ({ data = [], isLoading = false }) => {
  const loadingCards = [1, 2, 3, 4, 5];

  // temporal
  if (isLoading) {
    return (
      <ul>
        {loadingCards.map(photo => (
          <LoadingPhotocard />
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {data.map(photo => (
        <Photocard key={photo._id} id={photo._id} liked={photo.liked} {...photo} />
      ))}
    </ul>
  );
};
