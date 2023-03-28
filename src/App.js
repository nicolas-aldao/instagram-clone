import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider as AuthProvider } from './AuthContext';
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

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <AuthProvider>
          <AppLayout />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/pet/:id" element={<HomeScreen />} />
            <Route path="/detail/:detailId" element={<DetailsScreen />} />
            <Route path="/favs" element={<FavoritesScreen />} />
            <Route path="/user" element={<UserScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
          <NavBar />
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
};
