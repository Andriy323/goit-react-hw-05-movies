import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormSearch from 'components/formSearch/FormSearch';
import RenderFilms from 'components/RenderFilms/RenderFilms';
import { getFilmsSearch } from 'components/shared/shared';

const Movies = () => {
  //   const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  console.log(search, 'namee');
  const location = useLocation();
  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchSearch = async () => {
      try {
        const { results } = await getFilmsSearch(search);
        setItems([...results]);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSearch();
  }, [search]);

  const onHangleSubmit = query => {
    console.log(query, 'father');
    setSearchParams({ search: query });
  };

  return (
    <div>
      <FormSearch onHangleSubmit={onHangleSubmit} />
      <RenderFilms items={items} location={location} />
    </div>
  );
};

export default Movies;
