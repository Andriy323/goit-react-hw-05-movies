import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFilmsCredits } from 'components/shared/shared';
import notImage from '../../image/noavatar.png';
import css from './cast.module.css';
import Loader from 'components/shared/Loader/Loader';
const Cast = () => {
  const [state, setState] = useState({
    item: [],
    loader: false,
  });
  const [scrol, setScrol] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (scrol) {
      const toScroll = document.getElementById('cast');
      if (toScroll) {
        toScroll.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }, [scrol]);

  useEffect(() => {
    const fetchFilmsCast = async () => {
      try {
        setState(prev => ({ ...prev, loader: true }));
        const { cast } = await getFilmsCredits(movieId);
        setState(prevState => {
          return { prevState, item: [...cast] };
        });
        if (!cast.length) {
          toast.warning(`
No credits!`);
        } else {
          setScrol(true);
        }
      } catch (error) {
        toast.error(
          ` An error occurred. Go to the main page or repeat the request.`
        );
      } finally {
        setState(prev => ({ ...prev, loader: false }));
      }
    };

    fetchFilmsCast();
  }, [movieId]);
  const items = state.item.map(({ name, character, profile_path }, index) => {
    const urlImage = profile_path
      ? `https://image.tmdb.org/t/p/w200/${profile_path}`
      : notImage;
    return (
      <li key={index} className={css.item}>
        <img src={urlImage} alt={name} width="120" className={css.image} />
        <p className={css.pretitle}>Name: {name}</p>
        <p className={css.pretitle}>Character: {character}</p>
      </li>
    );
  });
  return (
    <div id="cast">
      {state.loader && <Loader />}
      <ToastContainer />
      <ul className={css.list}>{items}</ul>
    </div>
  );
};

export default Cast;
