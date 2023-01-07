import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { Photocard } from "../Photocard";
//import { PhotocardSkeleton } from "../../../skeletons/PhotocardSkeleton";
import { GET_PHOTOS } from '../../../hoc/withPhotos';
// const GET_PHOTOS = gql`
//   query getPhotos($categoryId: ID) {
//     photos(categoryId: $categoryId) {
//       id
//       categoryId
//       src
//       likes
//       userId
//       liked
//     }
//   }
// `;

export const ListOfPhotocardsComponent = ({ data: { photos = []} }) => {
  // temporal
  // const loading = true;
  // const { loading, error, photos } = useQuery(GET_PHOTOS, {
  //   variables: { categoryId: categoryId }
  // });
  //console.log(photos);
  //if (photos) {
    return (
      <ul>
        {photos.map(photo => (
          <Photocard key={photo.id} id={photo.id} {...photo} />
        ))}
      </ul>
    );
  }
  // if (loading) {
  //   return (
  //     <>
  //       <p>Cargando...</p>
  //       {/* <PhotocardSkeleton />
  //       <PhotocardSkeleton />
  //       <PhotocardSkeleton /> */}
  //     </>
  //   );
  // }
//};
