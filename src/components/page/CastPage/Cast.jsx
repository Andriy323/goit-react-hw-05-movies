import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmsCredits } from 'components/shared/shared';
import notImage from '../../image/notImageProfil.png'
import css from './cast.module.css'
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
  const items = state.item.map(({ name, character, profile_path }, index) => {
    const urlImage =  profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : notImage
    return(
      <li key={index} className={css.item}>
      <img src={urlImage} alt={name} width="120"  className={css.image}/>
      <p className={css.pretitle}>Name: {name}</p>
      <p className={css.pretitle}>Character: {character}</p>
    </li>
    )
  }
  
  );
  return (
    <div>
      <ul className={css.list}>
      {items}
      </ul>
    </div>
  );
};

export default Cast;
