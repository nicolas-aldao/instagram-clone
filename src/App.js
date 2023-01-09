import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Context, Provider as ContextProvider} from './Context';
import { Header } from './components/organisms/Header';
import { ListOfCategories } from './components/organisms/ListOfCategories';
import { NavBar } from './components/organisms/NavBar';
import { HomeScreen } from './components/pages/HomeScreen';
import DetailsScreen from './components/pages/DetailsScreen';
import { FavoritesScreen } from './components/pages/FavoritesScreen';
import { UserScreen } from './components/pages/UserScreen';
import { NotRegisteredUserScreen } from './components/pages/NotRegisteredUserScreen';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  //const isAuth = true;
  const { isAuth } = useContext(Context);
  console.log("🚀 ~ file: App.js:17 ~ App ~ isAuth", isAuth)
  //console.log("🚀 ~ file: App.js:17 ~ App ~ value", value)
  //console.log('🚀 ~ file: App.js:17 ~ App ~ isAuth', isAuth);

  const AppLayout = () => (
    <>
      <Header />
      <ListOfCategories />
    </>
  );

  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppLayout />
      {/* <Context.Consumer>
        {({ isAuth }) => ( */}
      <>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/pet/:id" element={<HomeScreen />} />
          <Route path="/detail/:detailId" element={<DetailsScreen />} />
          {/* <Route
          path="/favs"
          element={isAuth ? <FavoritesScreen /> : <NotRegisteredUserScreen />}
        />
        <Route
          path="/user"
          element={isAuth ? <UserScreen /> : <NotRegisteredUserScreen />}
        /> */}
          <Route
            path="/favs"
            element={isAuth ? <FavoritesScreen /> : <NotRegisteredUserScreen />}
          />
          <Route
            path="/user"
            element={isAuth ? <UserScreen /> : <NotRegisteredUserScreen />}
          />
        </Routes>
      </>
      {/* )}
      </Context.Consumer> */}

      {/* <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <FavoritesScreen path='/favs' />
                <UserScreen path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUserScreen path='/favs' />
                <NotRegisteredUserScreen path='/user' />
              </Router>
        }
      </UserLogged> */}

      <NavBar />
    </BrowserRouter>
  );
};
