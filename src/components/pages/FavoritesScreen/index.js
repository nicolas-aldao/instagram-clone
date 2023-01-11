import React from 'react';
import { Layout } from '../../layouts/BasicLayout';
import useGetFavorites from '../../../hooks/useGetFavorites';
import { Grid, Link, Image } from './styles';

export const FavoritesScreen = () => {
  const { data, loading, error } = useGetFavorites();

  if (loading) return 'Cargando...';
  if (error) return <pre>{error.message}</pre>;

  const { favs } = data;
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos">
      <Grid>
        {favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image key={fav.id} src={fav.src} />
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};
