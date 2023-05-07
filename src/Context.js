import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import apiAuth from './services/apiAuth';

const contextReducer = (state, action) => {
  switch (action.type) {
    case 'signin-or-signup':
      return {
        error: { type: '', msg: ''},
        token: action.payload.token,
        userId: action.payload.userId,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    case 'add_error':
      return { ...state, error: { type: action.payload.type, msg: action.payload.msg} };
    case 'clear_error_message':
      return { ...state, error: '' };
    case 'signout':
      return { token: null, error: '' };
    case 'is_auth':
      return { ...state, isAuth: true };
    case 'is_not_auth':
      return { ...state, isAuth: false };
      case 'set_screen_type':
        return { ...state, screenType: action.payload };
    default:
      return state;
  }
};

const signUp = dispatch => {
  return async ({ email, password, firstname, lastname }, callback) => {
    try {
      const response = await apiAuth.post('/signup', {
        email,
        password,
        firstname,
        lastname,
      });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin-or-signup',
        payload: {
          token: response.data.token,
          userId: response.data.userId,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        },
      });
      dispatch({ type: 'is_auth' });
      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: { type: 'signup', msg: err.response.data.error },
      });
    }
  };
};

const signIn = dispatch => {
  return async ({ email, password }, callback) => {
    try {
      const response = await apiAuth.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({
        type: 'signin-or-signup',
        payload: {
          token: response.data.token,
          userId: response.data.userId,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        },
      });
      dispatch({ type: 'is_auth' });
      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: 'add_error',
        payload: { type: 'login', msg: err.response.data.error },
      });
    }
  };
};

const signOut = dispatch => async callback => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    dispatch({ type: 'is_not_auth' });
    callback();
  } catch (err) {
    console.log('🚀 ~ file: AuthContext.js:73 ~ signOut ~ err', err);
  }
};

const clearErrorMessages = dispatch => {
  return () => {
    dispatch({
      type: 'clear_error_message',
    });
  };
};

const tryLocalSignIn = dispatch => {
  return async (firstNavigate, secondNavigate) => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        dispatch({ type: 'signin-or-signup', payload: token });
        dispatch({ type: 'is_auth' });
        firstNavigate();
      } else {
        secondNavigate();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const setScreenType = dispatch => {
  return async (screenType) => {
      dispatch({
        type: 'set_screen_type',
        payload: screenType,
      });
  };
};

export const { Provider, Context } = createDataContext(
  contextReducer,
  { signUp, signIn, signOut, clearErrorMessages, tryLocalSignIn, setScreenType },
  {
    token: null,
    error: { type: '', msg: ''},
    isAuth: false,
    userId: null,
    firstname: null,
    lastname: null,
    screenType: {}
  },
);
