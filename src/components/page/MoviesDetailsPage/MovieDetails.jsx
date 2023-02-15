import {
  useParams,
  Link,
  useNavigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState, memo, Suspense } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notImage from '../../image/notImage.jpg';
import { getFilmsId, getTrailerKey } from 'components/shared/shared';
import PropTypes from 'prop-types';
import css from './movies-details.module.css';
import Loader from 'components/shared/Loader/Loader';
import Trailer from 'components/Trailer/Trailer';
const MovieDetails = () => {
  const [state, setState] = useState({
    item: {},
    loader: false,
    keyTrailer: '',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';

  const { movieId } = useParams();
  useEffect(() => {
    const fetchTraidingFilmsId = async () => {
      try {
        setState(prevLoader => ({ ...prevLoader, loader: true }));
        const result = await getFilmsId(movieId);
        setState(prevState => {
          return { ...prevState, item: { ...result } };
        });

        const key = await getTrailerKey(movieId);
        setState(prev => ({ ...prev, keyTrailer: key }));
      } catch (error) {
        toast.error(
          ` An error occurred. Go to the main page or repeat the request.`
        );
      } finally {
        setState(prevLoader => ({ ...prevLoader, loader: false }));
      }
    };
    fetchTraidingFilmsId();
  }, [movieId]);
  const Back = () => {
    navigate(from);
  };
  const { original_title, overview, poster_path, vote_average } = state.item;
  const urlImage = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : notImage;
  return (
    <>
      <ToastContainer />
      {state.loader && <Loader />}
      <button className={css.btnBack} onClick={Back}>
        {'<== Back'}
      </button>
      <div className={css.containerImage}>
        <img
          className={css.image}
          src={urlImage}
          alt={original_title}
          width="450"
        />

        <div>
          <ul className={css.list}>
            <li className={css.item}>
              <h1 className={css.title}>{original_title}</h1>
            </li>
            <li className={css.item}>
              <p className={css.pretitle}>{overview}</p>
            </li>
            <li className={css.item}>
              <p className={css.pretitle}>
                Rating: {Number(vote_average).toFixed(1)}
              </p>
            </li>
          </ul>
          {state.keyTrailer && <Trailer keyTrailer={state.keyTrailer} />}

          <Link
            className={css.link}
            state={{ from }}
            to={`/movies/${movieId}/cast`}
          >
            Cast
          </Link>
          <Link
            className={css.link}
            state={{ from }}
            to={`/movies/${movieId}/reviews`}
          >
            Reviews
          </Link>
        </div>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(MovieDetails);

MovieDetails.propTypes = {
  itemRevievs: PropTypes.array,
  itemCast: PropTypes.array,
};
