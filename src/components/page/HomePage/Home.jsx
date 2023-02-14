import { getTraidingFilms } from 'components/shared/shared';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';
import RenderFilms from 'components/RenderFilms/RenderFilms';
import Loader from 'components/shared/Loader/Loader';
const Home = () => {
  const [state, setState] = useState({
    error: null,
    films: [],
    loader: false,
  });

  const location = useLocation();
  useEffect(() => {
    const fetchTraidingFilms = async () => {
      try {
        setState(prevState => ({ ...prevState, loader: true }));

        const { results } = await getTraidingFilms();
        setState(prevState => {
          return { ...prevState, films: [...prevState.films, ...results] };
        });
      } catch (error) {
        toast.error(
          ` An error occurred. Go to the main page or repeat the request.`
        );
      } finally {
        setState(prevState => ({ ...prevState, loader: false }));
      }
    };
    fetchTraidingFilms();
  }, []);
  return (
    <>
      {state.loader && <Loader />}
      <ToastContainer />
      <RenderFilms items={state.films} location={location} />
    </>
  );
};

export default Home;
