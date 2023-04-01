import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotoAPI } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import { Photocard } from '../../organisms/Photocard';

export default (props) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const params = useParams();
  console.log("🚀 ~ file: index.js:12 ~ params:", params)

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotoAPI(params.detailId.toString());
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
  return (
    <BasicLayout>
      <Photocard {...datos} title={datos.title} author={datos.author} includeDetails/>
    </BasicLayout>
  );
};
