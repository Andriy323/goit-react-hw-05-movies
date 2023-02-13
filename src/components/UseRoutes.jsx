import { lazy, Suspense } from 'react';
import Loader from './shared/Loader/Loader';

import { Routes, Route } from 'react-router-dom';
const Cast = lazy(() => import('./page/CastPage/Cast'));
const Home = lazy(() => import('./page/HomePage/Home'));
const Movies = lazy(() => import('./page/MoviesPage/Movies'));
const MovieDetails = lazy(() =>
  import('./page/MoviesDetailsPage/MovieDetails')
);
const Reviews = lazy(() => import('./page/ReviewsPage/Reviews'));
const UseRoutes = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UseRoutes;
