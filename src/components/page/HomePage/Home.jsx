import { getTraidingFilms } from 'components/shared/shared';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Home = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    films: [],
    page: 1
  });
  const location = useLocation();
  useEffect(() => {
    const fetchTraidingFilms = async () => {
      try {
        const { results } = await getTraidingFilms(state.page);
        setState(prevState => {
          return { ...prevState, films: [...prevState.films, ...results] };
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTraidingFilms();
  }, [state.page]);

  const loadFilms = () => {
    setState(prevState =>{
      return {...prevState, page:  + 1}
    });
  };

  const item = state.films.map(({ id, title }, index) => (
    <li key={index}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));
  return (
    <div>
      <h2>Home</h2>
      <ul>{item}</ul>
      <button onClick={loadFilms}>Load</button>
    </div>
  );
};

export default Home;
