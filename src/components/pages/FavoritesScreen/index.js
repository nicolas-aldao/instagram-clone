import React, { useState, useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../../AuthContext';
import { getFavsAPI } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import LoadingScreen from '../LoadingScreen';
import NotRegisteredUserScreen from '../NotRegisteredUserScreen';
import { Grid, Link, Image } from './styles';

export default () => {
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { state } = useContext(AuthContext);
  console.log('🚀 ~ file: index.js:14 ~ state:', state);

  useEffect(() => {
    async function fetchMyAPI(id) {
      setLoading(true);
      let res = await getFavsAPI(state.userId);
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

  if (loading) return <LoadingScreen/>
  if (error) return <pre>{error.message}</pre>;

  const favs = datos;
  const Page = () => state.isAuth ? (
    <BasicLayout
      title="Favorites"
      subtitle="Here are your favorite photos">
      <Grid>
        {favs.map(fav => (
          <Link key={fav._id} to={`/detail/${fav._id}`}>
            <Image key={fav._id} src={fav.src} />
          </Link>
        ))}
      </Grid>
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
  return <Page />;
};
