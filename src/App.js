import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as ContextProvider } from './Context';
import VariablesContainer from './components/container/VariablesContainer';
import { Header } from './components/organisms/Header';
import { NavBar } from './components/organisms/NavBar';
import { HomeScreen } from './components/pages/HomeScreen';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  const FavoritesScreen = React.lazy(() =>
    import('./components/pages/FavoritesScreen'),
  );
  const UserScreen = React.lazy(() => import('./components/pages/UserScreen'));
  const NotFoundScreen = React.lazy(() =>
    import('./components/pages/NotFoundScreen'),
  );
  const DetailsScreen = React.lazy(() =>
    import('./components/pages/DetailsScreen'),
  );

  const AppLayout = () => (
    <>
      <Header />
    </>
  );
    // TODO: SUFFLE PHOTOS, ADD CATEGORIE ID IN DATA
    // TODO: ADD NUMBER OF PAINTINGS LIKED IN PROFILE INFO
    // TODO: ADD FAVORITE PAINTING GENRE ACCORDING PAINTINGS LIKED
    // TODO: ADD TIMEOUT TO LOGIN/SIGNUP
    // TODO: ADD MODAL REGISTER OR LOGIN WHEN USER TAPS LIKE BUTTON
  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <ContextProvider>
          <VariablesContainer>
            <AppLayout />
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              {/* <Route path="/categories/:id" element={<HomeScreen />} /> */}
              <Route path="/detail/:detailId" element={<DetailsScreen />} />
              <Route path="/favs" element={<FavoritesScreen />} />
              <Route path="/user" element={<UserScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
            <NavBar />
          </VariablesContainer>
        </ContextProvider>
      </BrowserRouter>
    </Suspense>
  );
};
