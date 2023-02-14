import Iframe from 'react-iframe';
import css from './trailer.module.css';

const Trailer = ({ keyTrailer }) => {
  return (
    <div className={css.trailer}>
      <Iframe
        url={`https://www.youtube.com/embed/${keyTrailer}?origin=${window.location.host}?autoplay=1`}
        width="640px"
        height="320px"
        className=""
        display="block"
        position="relative"
        allow="autoplay; "
      />
    </div>
  );
};

export default Trailer;
