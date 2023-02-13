import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FormSearch from 'components/formSearch/FormSearch';
import RenderFilms from 'components/RenderFilms/RenderFilms';
import { getFilmsSearch } from 'components/shared/shared';
import { Link } from 'react-router-dom';
import css from './movies-page.module.css'
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
//   const link = items.map(({id,title}, index) => (
// <li key={index}>
//     <Link state={{from:location}} to={`/movies/${id}`}>{title}</Link>
// </li>
//   ))
// const item = items.map(({ id, title, poster_path, adult, release_date }, index) => (
//   <li key={index} className={css.items}>
//     <Link  state={{ from: location }} className={css.link} to={`/movies/${id}`}>
//       <div className={css.imgContainer+ " " + css.maskOne + " " + css.maskOneFrame}>
//       <img
//       className={css.image}
//         src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
//         alt={title}
//       /></div>

//       <div>
//       <h1 className={css.title}>{title}</h1>
//       {!adult && <p className={css.pretitle}>+18</p>}
//       <p className={css.pretitle}>{release_date}</p>
//       </div>
//     </Link>
//   </li>
// ));
  return(
    <div>
    <FormSearch onHangleSubmit={onHangleSubmit} />
    <RenderFilms items={items} location={location} />
{/* <ul>
    {item}
</ul> */}
    </div>
    
  )
  
};

export default Movies;
