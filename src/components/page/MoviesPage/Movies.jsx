import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from 'components/shared/Loader/Loader';
import FormSearch from 'components/formSearch/FormSearch';
import RenderFilms from 'components/RenderFilms/RenderFilms';
import { getFilmsSearch } from 'components/shared/shared';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const search = searchParams.get('search');
  const location = useLocation();
  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchSearch = async () => {
      try {
        setLoader(prev => !prev);
        const { results } = await getFilmsSearch(search);
        setItems([...results]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(prev => !prev);
      }
    };
    fetchSearch();
  }, [search]);

  const onHangleSubmit = query => {
    setSearchParams({ search: query });
  };
  return (
    <div>
      {loader && <Loader />}
      <FormSearch onHangleSubmit={onHangleSubmit} />
      <RenderFilms items={items} location={location} />
    </div>
  );
};

export default Movies;
