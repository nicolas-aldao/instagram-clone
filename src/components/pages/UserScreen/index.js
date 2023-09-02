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

  function formatWordList(words) {
    const length = words.length;

    if (length === 1) {
      return `Your favorite genre is ${words[0]}`;
    } else if (length === 2) {
      return `Your favorite genres are ${words[0]} and ${words[1]}`;
    } else if (length === 4) {
      return `You like all genres of art! 🎉`;
    } else {
      const formattedWords = words.slice(0, -1).join(', ');
      return `Your favorite genres are ${formattedWords}, and ${words[length - 1]}`;
    }
  }

  useEffect(() => {
    if (favoriteGenres.length > 0) {
      setGenresString(formatWordList(favoriteGenres));
    } else {
      setGenresString(`You don't have any favorite artistic genre yet 😔\n
        You can take a look to the paintings and give a like if you like some!`);
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
        Fullname: {state.firstname ? state.firstname : state.email}{' '}
        {` ${state.lastname}`}
      </h4>
      {genresString ? <h5>{genresString}</h5> : null}
      <SubmitButton text="Logout" onClick={() => signOut()} />
    </BasicLayout>
  ) : (
    <NotRegisteredUserScreen />
  );
};
