import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import RecipeContext from '../context/RecipesContext';

const DropDownNationalities = ({ nationalities, setSelected }) => (
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Nationality
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      { nationalities.map((meal) => (
        <Dropdown.Item
          data-testid={ `${meal.strArea}-option` }
          key={ Math.random() }
          value={ meal.strArea }
          onClick={ ({ target }) => setSelected(target.innerHTML) }
        >
          {meal.strArea}
        </Dropdown.Item>
      )) }
    </Dropdown.Menu>
  </Dropdown>
);

DropDownNationalities.propTypes = {
  nationalities: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default DropDownNationalities;
