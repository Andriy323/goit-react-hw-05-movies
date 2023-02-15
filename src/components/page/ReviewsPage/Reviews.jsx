import { useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFilmsReviews } from 'components/shared/shared';
import css from './reviews.module.css';
import Loader from 'components/shared/Loader/Loader';
import { scrols } from 'components/shared/scrols';
const Reviews = () => {
  const [state, setState] = useState({
    data: [],
    loader: false,
  });
  // const [scrol, setScrol] = useState(false);
  const { movieId } = useParams();
  const refStart = useRef(null);

  // useEffect(() => {
  //   if (scrol) {
  //     scrols(refStart)
  //   }
  // }, [scrol]);



  useEffect(() => {
    const fetchFilmsRevievs = async () => {
      try {
        setState(prev => ({ ...prev, loader: true }));
        const { results } = await getFilmsReviews(movieId);
        setState(prevState => {
          return { prevState, data: [...results] };
        });
        if (!results.length) {
          toast.warning(`
No reviews!`);
        } else {
          scrols(refStart)

          // setScrol(true);
        }
      } catch (error) {
        toast.error(
          ` An error occurred. Go to the main page or repeat the request.`
        );
      } finally {
        setState(prev => ({ ...prev, loader: false }));
      }
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
    <div   ref={refStart}>
      {state.loader && <Loader />}
      <ToastContainer />
      <ul className={css.list}>{item}</ul>
    </div>
  );
};

export default Reviews;
