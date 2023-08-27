import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../../Context';
import { getPhotosAPI } from '../../../services/apiPetgram';
import { ListOfPhotocardsComponent } from '../../organisms/ListOfPhotocardsComponent';

export const ListOfPhotocards = ({ categoryId }) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const {
    state: { userId },
  } = useContext(Context);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotosAPI(userId);
      setDatos(res.data);
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

  useEffect(() => {
    if (datos.length > 0) {
      setLoading(false);
    }
  }, [datos]);

  if (error) return <pre>{error.message}</pre>;
  return (
    <ListOfPhotocardsComponent
      data={loading ? [] : datos}
      isLoading={loading}
    />
  );
};
