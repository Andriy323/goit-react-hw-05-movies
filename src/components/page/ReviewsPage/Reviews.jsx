import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFilmsReviews } from 'components/shared/shared';
import css from './reviews.module.css';
const Reviews = () => {
  const [state, setState] = useState({
    data: [],
    loader: false,
    error: null,
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchFilmsRevievs = async () => {
      try {
        const { results } = await getFilmsReviews(movieId);
        if (!results.length) {
          toast.warning(`
No reviews!`);
        }

        setState(prevState => {
          return { prevState, data: [...results] };
        });
      } catch (error) {}
    };
    fetchFilmsRevievs();
  }, [movieId]);

  const item = state.data.map(({ content, author, created_at }, index) => (
    <li className={css.item} key={index}>
      <h2 className={css.title}>
        Author: {author} created {new Date(created_at).toDateString()}{' '}
      </h2>
      <p className={css.pretitle}>{content}</p>
    </li>
  ));
  return (
    <div>
      <ToastContainer />
      <ul className={css.list}>{item}</ul>
    </div>
  );
};

export default Reviews;
