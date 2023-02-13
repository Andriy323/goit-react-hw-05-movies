import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsCredits } from 'components/shared/shared';
const Cast = () => {
  const [state, setState] = useState({
    item: [],
    loader: false,
    error: null,
  });

  const { movieId } = useParams();
  useEffect(() => {
    const fetchFilmsCast = async () => {
      try {
        const { cast } = await getFilmsCredits(movieId);
        setState(prevState => {
          return { prevState, item: [...cast] };
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilmsCast();
  }, [movieId]);
  const items = state.item.map(({ name, character, profile_path }, index) => (
    <li key={index}>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <p>Name: {name}</p>
      <p>Character: {character}</p>
    </li>
  ));
  return (
    <div>
      <ul>
      {items}
      </ul>
    </div>
  );
};

export default Cast;
