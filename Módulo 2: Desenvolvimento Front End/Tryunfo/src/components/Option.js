import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  render() {
    const { onInputChange, rarityFilter } = this.props;
    return (
      <label htmlFor="rarityFilter">
        Raridade:
        <select
          name="rarityFilter"
          data-testid="rare-filter"
          value={ rarityFilter }
          onChange={ onInputChange }
        >
          <option value="Todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="Raro">Raro</option>
          <option value="Muito Raro">Muito Raro</option>
        </select>
      </label>);
  }
}

Option.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  rarityFilter: PropTypes.string.isRequired,
};

export default Option;
