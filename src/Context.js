import createDataContext from "./createDataContext";
import apiAuth from "./services/apiAuth";

const contextReducer = (state, action) => {
  switch (action.type) {
    case "signin-or-signup":
      return {
        error: { type: "", msg: "" },
        token: action.payload.token,
        userId: action.payload.userId,
        email: action.payload.email,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    case "add_error":
      return {
        ...state,
        error: { type: action.payload.type, msg: action.payload.msg },
      };
    case "clear_error_message":
      return { ...state, error: "" };
    case "signout":
      return { token: null, error: "" };
    case "is_auth":
      return { ...state, isAuth: true };
    case "is_not_auth":
      return { ...state, isAuth: false };
    case "set_screen_type":
      return { ...state, screenType: action.payload };
    case "set_category_id":
      return { ...state, categorySelected: action.payload };
    case "set_not_registered_modal":
      return { ...state, showNotRegisteredModal: action.payload };
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return async ({ email, password, firstname, lastname }, callback) => {
    try {
      const response = await apiAuth.post("/signup", {
        email,
        password,
        firstname,
        lastname,
      });
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin-or-signup",
        payload: {
          token: response.data.token,
          userId: response.data.userId,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        },
      });
      dispatch({ type: "is_auth" });
      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: { type: "signup", msg: err.response.data.error },
      });
    }
  };
};

const signIn = (dispatch) => {
  return async ({ email, password }, callback) => {
    try {
      const response = await apiAuth.post("/signin", { email, password });
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "signin-or-signup",
        payload: {
          token: response.data.token,
          userId: response.data.userId,
          email: response.data.email,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
        },
      });
      dispatch({ type: "is_auth" });
      if (callback) {
        callback();
      }
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: { type: "login", msg: err.response.data.error },
      });
    }
  };
};

const signOut = (dispatch) => async (callback) => {
  try {
    localStorage.removeItem("token");
    dispatch({ type: "signout" });
    dispatch({ type: "is_not_auth" });
    callback();
  } catch (err) {
    console.log(err);
  }
};

const clearErrorMessages = (dispatch) => {
  return () => {
    dispatch({
      type: "clear_error_message",
    });
  };
};

const tryLocalSignIn = (dispatch) => {
  return async (firstNavigate, secondNavigate) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        dispatch({ type: "signin-or-signup", payload: token });
        dispatch({ type: "is_auth" });
        firstNavigate();
      } else {
        secondNavigate();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const setScreenType = (dispatch) => {
  return async (screenType) => {
    dispatch({
      type: "set_screen_type",
      payload: screenType,
    });
  };
};

const setCategorySelected = (dispatch) => {
  return async (categoryId) => {
    dispatch({
      type: "set_category_id",
      payload: categoryId,
    });
  };
};

const setNotRegisteredModal = (dispatch) => {
  return async (value) => {
    dispatch({
      type: "set_not_registered_modal",
      payload: value,
    });
  };
};

export const { Provider, Context } = createDataContext(
  contextReducer,
  {
    signUp,
    signIn,
    signOut,
    clearErrorMessages,
    tryLocalSignIn,
    setScreenType,
    setCategorySelected,
    setNotRegisteredModal,
  },
  {
    token: null,
    error: { type: "", msg: "" },
    isAuth: true,
    userId: "65b6d2b2e4ae979c61ad9afc",
    firstname: "Demo",
    lastname: "User",
    categorySelected: null,
    screenType: {},
    showNotRegisteredModal: null,
  }
);
