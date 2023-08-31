import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../Context';
import { getUserFavoriteCategory } from '../../../services/apiPetgram';
import { BasicLayout } from '../../layouts/BasicLayout';
import { SubmitButton } from '../../atoms/SubmitButton';
import NotRegisteredUserScreen from '../NotRegisteredUserScreen';

export default () => {
  const { state, signOut } = useContext(Context);
  const [favoriteGenres, setFavoriteGenres] = useState([]);
  const [genresString, setGenresString] = useState('');

  useEffect(() => {
    if (favoriteGenres.length > 0) {
      favoriteGenres.map((genre, index) =>
        setGenresString(genresString + `${genre} y `),
      );
    } else {
      setGenresString('not genres liked');
    }
  }, [favoriteGenres]);

  useEffect(() => {
    async function fetchMyAPI() {
      let res = await getUserFavoriteCategory(state.userId);
      setFavoriteGenres(res.data);
      return;
    }

    try {
      if (state.userId) {
        fetchMyAPI();
      }
      return;
    } catch (err) {
      console.log(err);
    }
  }, [state.userId]);

  return state.isAuth ? (
    <BasicLayout title="My account" subtitle="Account Information">
      <h4>
        Welcome {state.firstname ? state.firstname : state.email}{' '}
        {` ${state.lastname}`}!
      </h4>
      {genresString ? <h3>{genresString}</h3> : null}
      <SubmitButton text="Logout" onClick={() => signOut()} />
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
};
