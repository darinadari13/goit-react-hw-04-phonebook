import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onFilterChange }) => {
  return (
    <div className="filter">
      <h4 className={css.title}>Find contacts by name</h4>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
