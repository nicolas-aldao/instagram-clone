import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Photocard } from "../../organisms/Photocard";
//import { PhotocardSkeleton } from "../skeletons/PhotocardSkeleton";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotocardWithQuery = ({ id }) => {
  console.log("🚀 ~ file: index.js:20 ~ PhotocardWithQuery ~ id", id)
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: { id: id }
  });
  {
    if (loading) return <p>Cargando...</p>;
    else if (error) return <p>Oops, something happened</p>;
  }
  return <Photocard {...data.photo} />;
};
