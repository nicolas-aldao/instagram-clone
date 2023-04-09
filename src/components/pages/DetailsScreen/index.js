import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as AuthContext } from '../../../AuthContext';
import { getPhotoAPI } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import { Photocard } from '../../organisms/Photocard';
import LoadingScreen from '../LoadingScreen';

export default () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const params = useParams();
  const {
    state: { userId },
  } = useContext(AuthContext);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotoAPI(params.detailId, userId);
      console.log('🚀 ~ file: index.js:20 ~ fetchMyAPI ~ res:', res);
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

  {
    if (loading) return <LoadingScreen />;
    else if (error) return <p>Oops, something happened</p>;
  }
  return (
    <BasicLayout>
      <Photocard
        {...datos}
        title={datos.title}
        author={datos.author}
        id={datos._id}
        liked={datos.liked}
        includeDetails
      />
    </BasicLayout>
  );
};
