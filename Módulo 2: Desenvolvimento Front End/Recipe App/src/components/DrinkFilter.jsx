import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import RecipeContext from '../context/RecipesContext';

const RecipeFilter = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [buttonName, setButtonName] = useState('');
  const {
    filterRecipe,
    requestDrinkByButtonFilter,
    requestAPIInitial } = useContext(RecipeContext);
  const MAX_FILTERS = 5;

  const requestDrink = (category, button) => {
    if (!isFiltered || button !== buttonName) {
      requestDrinkByButtonFilter(category);
      setIsFiltered(true);
      setButtonName(button);
    } else {
      requestAPIInitial();
      setIsFiltered(false);
    }
  };

  return (
    <section className="filters">
      <Button
        data-testid="All-category-filter"
        onClick={ () => requestAPIInitial() }
        className="m-1"
        variant="dark"
      >
        All
      </Button>
      {
        filterRecipe
          .map((filter, index) => {
            if (index < MAX_FILTERS) {
              return (
                <Button
                  data-testid={ `${filter.strCategory}-category-filter` }
                  key={ filter.strCategory }
                  onClick={ ({ target }) => requestDrink(
                    filter.strCategory, target.innerHTML,
                  ) }
                  className="m-1 text-truncate"
                  variant="dark"
                >
                  { filter.strCategory }
                </Button>
              );
            } return null;
          })
      }
    </section>
  );
};

export default RecipeFilter;
