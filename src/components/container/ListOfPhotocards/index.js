import React, { useState, useEffect } from 'react';
import { getPhotosAPI } from '../../../services/apiPetgram';
import { useQuery, gql } from '@apollo/client';
import { GET_PHOTOS } from '../../../hoc/withPhotos';
import { ListOfPhotocardsComponent } from '../../organisms/ListOfPhotocardsComponent';

export const ListOfPhotocards = ({ categoryId }) => {
  // in this container we fetch the data and we show it in the presentational structure that ListOfPhotocardsComponent
  // has
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotosAPI();
      setDatos(res.data);
      setLoading(false);
      return;
    }

    try {
      fetchMyAPI();
      return;
    } catch (err) {
      console.log(err);
      setError(err);
    }
  }, []);

  // const { data, loading, error } = useQuery(
  //   GET_PHOTOS,
  //   {
  //     variables: { categoryId },
  //   },
  //   { fetchPolicy: 'network-only' },
  // );

  if (loading) return 'Cargando...';
  if (error) return <pre>{error.message}</pre>;
  return <ListOfPhotocardsComponent data={datos} />;
};
