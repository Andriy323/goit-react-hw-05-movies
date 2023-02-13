import { getTraidingFilms } from 'components/shared/shared';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './home.module.css';
const Home = () => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    films: [],
  });
  const location = useLocation();
  useEffect(() => {
    const fetchTraidingFilms = async () => {
      try {
        const { results } = await getTraidingFilms();
        console.log(results);
        setState(prevState => {
          return { ...prevState, films: [...prevState.films, ...results] };
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTraidingFilms();
  }, []);

  const item = state.films.map(({ id, title, poster_path, adult, release_date }, index) => (
    <li key={index} className={css.items}>
      <Link state={{ from: location }} className={css.link} to={`/movies/${id}`}>
        <div className={css.imgContainer+ " " + css.maskOne + " " + css.maskOneFrame}>
        <img
        className={css.image}
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        /></div>

        <div>
        <h1 className={css.title}>{title}</h1>
        {!adult && <p className={css.pretitle}>+18</p>}
        <p className={css.pretitle}>{release_date}</p>
        </div>
      </Link>
    </li>
  ));
  return (
    <div className={css.container}>
      <ul className={css.list}>{item}</ul>
    </div>
  );
};

export default Home;
