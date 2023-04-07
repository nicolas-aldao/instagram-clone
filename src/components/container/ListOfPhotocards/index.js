import React, { useState, useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../../AuthContext';
import { getPhotosAPI } from '../../../services/apiPetgram';
import { ListOfPhotocardsComponent } from '../../organisms/ListOfPhotocardsComponent';

export const ListOfPhotocards = ({ categoryId }) => {
  // in this container we fetch the data and we show it in the presentational structure that ListOfPhotocardsComponent
  // has
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { state: { userId } } = useContext(AuthContext);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotosAPI(userId);
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

  // if (loading) return 'Cargando...';
  if (error) return <pre>{error.message}</pre>;
  return (
    <ListOfPhotocardsComponent
      data={loading ? [] : datos}
      isLoading={loading}
    />
  );
};
