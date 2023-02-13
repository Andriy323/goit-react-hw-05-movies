import { getTraidingFilms } from 'components/shared/shared';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RenderFilms from 'components/RenderFilms/RenderFilms';
const Home = () => {
  const [state, setState] = useState({
    error: null,
    films: [],
  });

  const location = useLocation();
  useEffect(() => {
    const fetchTraidingFilms = async () => {
      try {
        const { results } = await getTraidingFilms();
        setState(prevState => {
          return { ...prevState, films: [...prevState.films, ...results] };
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchTraidingFilms();
  }, []);

  return <RenderFilms items={state.films} location={location} />;
};

export default Home;
