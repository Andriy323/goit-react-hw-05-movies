import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormSearch from 'components/formSearch/FormSearch';
import { getFilmsSearch } from 'components/shared/shared';
import { Link } from 'react-router-dom';
const Movies = () => {
  //   const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  console.log(search, 'namee');
const location = useLocation()
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
  const link = items.map(({id,title}, index) => (
<li key={index}>
    <Link state={{from:location}} to={`/movies/${id}`}>{title}</Link>
</li>
  ))
  return(
    <div>
    <FormSearch onHangleSubmit={onHangleSubmit} />
<ul>
    {link}
</ul>
    </div>
    
  )
  
};

export default Movies;
