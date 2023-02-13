import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './form-search.module.css'
const FormSearch = ({ onHangleSubmit }) => {
  const [state, setState] = useState('');

  const hangleChange = e => {
    setState(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    onHangleSubmit(state);
    setState('');
  };
  return (
      <form onSubmit={onSubmit} className={css.formContainer}>
        <label htmlFor=""></label>
        <input className={css.search} type="text" placeholder='Search' onChange={hangleChange} value={state} />
        <button className={css.btn}>Search</button>
      </form>
  );
};

export default FormSearch;

FormSearch.propTypes ={
  onHangleSubmit: PropTypes.func.isRequired,

}