import React, { useState, useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../../AuthContext';
import { getFavsAPI } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import NotRegisteredUserScreen from '../NotRegisteredUserScreen';
import { Grid, Link, Image } from './styles';

export default () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { state } = useContext(AuthContext);
  console.log('🚀 ~ file: index.js:14 ~ state:', state);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getFavsAPI();
      console.log('🚀 ~ file: index.js:17 ~ fetchMyAPI ~ res:', res);
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

  if (loading) return 'Cargando...';
  if (error) return <pre>{error.message}</pre>;

  const favs = datos;
  const Page = () => state.isAuth ? (
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
  ) : (
    <NotRegisteredUserScreen />
  );
  return <Page />;
};
