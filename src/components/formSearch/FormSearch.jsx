import { useState } from 'react';
import PropTypes from 'prop-types';
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
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor=""></label>
        <input type="text" onChange={hangleChange} value={state} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default FormSearch;

FormSearch.propTypes ={
  onHangleSubmit: PropTypes.func.isRequired,

}