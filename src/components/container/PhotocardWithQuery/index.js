import React, { useState, useEffect } from 'react';
import { getPhotoAPI } from '../../../services/apiPetgram';
import { Photocard } from '../../organisms/Photocard';
//import { PhotocardSkeleton } from "../skeletons/PhotocardSkeleton";

export const PhotocardWithQuery = ({ id }) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotoAPI(id.toString());
      console.log('🚀 ~ file: index.js:17 ~ fetchMyAPI ~ res:', res.data[0]);
      setDatos(res.data[0]);
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

  {
    if (loading) return <p>Cargando...</p>;
    else if (error) return <p>Oops, something happened</p>;
  }
  return <Photocard {...datos} title={datos.title}/>;
};
