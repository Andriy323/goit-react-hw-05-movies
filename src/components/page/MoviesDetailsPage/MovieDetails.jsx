import { useParams, Link, useNavigate, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFilmsId } from 'components/shared/shared';
import PropTypes from 'prop-types';
const MovieDetails = ({itemRevievs, itemCast}) => {
  const [state, setState] = useState({
    item: {},
    error: null,
    loading: false,
  });
  console.log(state);
const navigate = useNavigate()
const location = useLocation()
console.log(location, "----------")
const from = location.state?.from || "/movies"

  const { movieId } = useParams();
  useEffect(() => {
    const fetchTraidingFilmsId = async () => {
      try {
        const result = await getFilmsId(movieId);
        setState(prevState => {
          return { ...prevState, item: { ...result } };
        });
      } catch (error) {
      }
    };
    fetchTraidingFilmsId();
  }, [movieId]);
  const Back = () => {
    navigate(from)
  }
  const { original_title, overview, popularity, poster_path, } =
    state.item;
  return (
   <div>
        <button onClick={Back}>Back</button>

     <ul>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={original_title}
        />
      </li>
      <li>Name:{original_title}</li>
      <li>Title: {overview}</li>
      <li>Popularity: {popularity}</li>
    </ul>
    <Link state={{from}} to={`/movies/${movieId}/cast`}><button>Cast</button></Link>
    <Link state={{from}} to={`/movies/${movieId}/reviews`}><button>Reviews</button></Link>
     {itemRevievs}
     {itemCast}
   </div>
  );
};

export default MovieDetails;

MovieDetails.propTypes ={
  itemRevievs: PropTypes.array,
  itemCast: PropTypes.array

}