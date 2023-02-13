import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmsId } from 'components/shared/shared';
import PropTypes from 'prop-types';
import css from './movies-details.module.css';
const MovieDetails = ({ itemRevievs, itemCast }) => {
  const [state, setState] = useState({
    item: {},
    error: null,
    loading: false,
  });
  console.log(state);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, '----------');
  const from = location.state?.from || '/movies';

  const { movieId } = useParams();
  useEffect(() => {
    const fetchTraidingFilmsId = async () => {
      try {
        const result = await getFilmsId(movieId);
        setState(prevState => {
          return { ...prevState, item: { ...result } };
        });
      } catch (error) {}
    };
    fetchTraidingFilmsId();
  }, [movieId]);
  const Back = () => {
    navigate(from);
  };
  const { original_title, overview, popularity, poster_path } = state.item;
  return (
    <div className={css.container}>
      <button className={css.btnBack} onClick={Back}>
        {'<== Back'}
      </button>
      <div className={css.containerImage}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
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
              <p className={css.pretitle}>Popularity: {popularity}</p>
            </li>
          </ul>
          <Link state={{ from }} to={`/movies/${movieId}/cast`}>
            <button className={css.btn}>Cast</button>
          </Link>
          <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
            <button className={css.btn}>Reviews</button>
          </Link>
        </div>
      </div>

      {itemRevievs}
      {itemCast}
    </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  itemRevievs: PropTypes.array,
  itemCast: PropTypes.array,
};
