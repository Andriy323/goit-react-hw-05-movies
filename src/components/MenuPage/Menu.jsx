import { NavLink } from 'react-router-dom'
import css from './menu.module.css'
const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;

  return className;
};
const Menu = () => {
    return(
        <div className={css.container}>
          <ul className={css.list}>
            <li className={css.item}>
                <NavLink className={getClassName} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={getClassName} to="/movies">Movies</NavLink>
            </li>
          </ul>
        </div>
        
    )
}

export default Menu