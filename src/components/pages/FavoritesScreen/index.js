import React, { useState, useEffect } from 'react';
import { BasicLayout } from '../../layouts/BasicLayout';
import useGetFavorites from '../../../hooks/useGetFavorites';
import { getFavsAPI } from '../../../services/apiPetgram';
import { Grid, Link, Image } from './styles';

export default () => {

  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getFavsAPI();
      console.log("🚀 ~ file: index.js:17 ~ fetchMyAPI ~ res:", res)
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

  // const { data, loading, error } = useGetFavorites();

  if (loading) return 'Cargando...';
  if (error) return <pre>{error.message}</pre>;

  const favs = datos;
  return (
    <BasicLayout
      title="Tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos">
      <Grid>
        {favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image key={fav.id} src={fav.src} />
          </Link>
        ))}
      </Grid>
    </BasicLayout>
  );
};
