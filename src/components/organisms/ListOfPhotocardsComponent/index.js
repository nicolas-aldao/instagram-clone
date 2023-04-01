import React from 'react';
import { Photocard } from '../Photocard';
//import { PhotocardSkeleton } from "../../../skeletons/PhotocardSkeleton";

export const ListOfPhotocardsComponent = ({ data = [] }) => {
  // temporal
  return (
    <ul>
      {data.map(photo => (
        <Photocard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>
  );
};
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
