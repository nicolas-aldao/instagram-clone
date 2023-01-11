import { useQuery } from '@apollo/client';
import qgl from 'graphql-tag';

const GET_FAVORITES = qgl`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

const useGetFavorites = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES,  {
    fetchPolicy: 'network-only',
  });
  return { data, loading, error };
};

export default useGetFavorites;
