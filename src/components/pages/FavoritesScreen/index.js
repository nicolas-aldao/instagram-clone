import React, { useState, useEffect, useContext } from 'react';
import { Context as AuthContext } from '../../../AuthContext';
import { getFavsAPI } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import LoadingScreen from '../LoadingScreen';
import NotRegisteredUserScreen from '../NotRegisteredUserScreen';
import { Grid, Link, Image } from './styles';

export default () => {
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    async function fetchMyAPI() {
      setLoading(true);
      let res = await getFavsAPI(state.userId);
      setFavs(res.data);
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

  if (loading) return <LoadingScreen />;
  if (error) return <pre>{error.message}</pre>;

  const Page = () =>
    state.isAuth ? (
      <BasicLayout title="Favorites" subtitle="Here are your favorite photos">
        <Grid>
          {favs.length > 0 ? (
            favs.map(fav => (
              <Link key={fav._id} to={`/detail/${fav._id}`}>
                <Image key={fav._id} src={fav.src} />
              </Link>
            ))) : <p>You don't have favorites yet!</p>}
            <p>You don't have favorites yet!</p>
        </Grid>
      </BasicLayout>
    ) : (
      <NotRegisteredUserScreen />
    );
  return <Page />;
};
