import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  const handleClick = e => onClick(e);

    return (
       <div className={css.wrapper}>
    <button type="button" onClick={handleClick} className={css.Button}>
      Load more
            </button>
            </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};