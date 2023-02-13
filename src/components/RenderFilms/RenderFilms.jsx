import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import notImage from '../image/notImage.jpg'
import css from './render-flms.module.css'
const RenderFilms = ({items, location}) => {

    const item = items.map(({ id, title, poster_path, adult, release_date }, index) => {
        const urlImage = poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : notImage
        return (
            <li key={index} className={css.items}>
          <Link state={{ from: location }} className={css.link} to={`/movies/${id}`}>
            <div className={css.imgContainer+ " " + css.maskOne + " " + css.maskOneFrame}>
            <img
             
            className={css.image}
              src={urlImage}
              alt={title}
            /></div>
      
            <div>
            <h1 className={css.title}>{title}</h1>
            {adult && <p className={css.pretitle}>+18</p>}
            <p className={css.pretitle}>{release_date}</p>
            </div>
          </Link>
        </li>
        )
    }


        
      );
    return(
        <div className={css.container}>
        <ul className={css.list}>{item}</ul>
      </div>
    )
}

export default RenderFilms

RenderFilms.propTypes = {
    items: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
  };
  RenderFilms.defaultProps = {
    items: []
  }