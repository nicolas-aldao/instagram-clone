import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotoAPI } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import { Photocard } from '../../organisms/Photocard';
import LoadingScreen from '../LoadingScreen';

export default (props) => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const params = useParams();

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getPhotoAPI(params.detailId);
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
    if (loading) return <LoadingScreen/>;
    else if (error) return <p>Oops, something happened</p>;
  }
  return (
    <BasicLayout>
      <Photocard {...datos} title={datos.title} author={datos.author} includeDetails/>
    </BasicLayout>
  );
};
