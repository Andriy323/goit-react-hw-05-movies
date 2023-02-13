import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import css from '../components/routes.module.css'
const Cast = lazy(() => import('./page/CastPage/Cast'));
const Home = lazy(() => import('./page/HomePage/Home'));
const Movies = lazy(() => import('./page/MoviesPage/Movies'));
const MovieDetails = lazy(() =>
  import('./page/MoviesDetailsPage/MovieDetails')
);
const Reviews = lazy(() => import('./page/ReviewsPage/Reviews'));
const UseRoutes = () => {
  return (
    <Suspense fallback={<span className={css.loader}></span>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </Suspense>
  );
};
export default UseRoutes;
