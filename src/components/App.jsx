import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/Movies/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Reviews } from 'pages/Movies/MovieDetails/Reviews/Reviews';
import { Cast } from 'pages/Movies/MovieDetails/Cast/Cast';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies/" element={<Movies />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
};
