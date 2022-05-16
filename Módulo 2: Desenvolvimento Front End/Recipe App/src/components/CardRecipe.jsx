import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeContext from '../context/RecipesContext';
import DrinkFilter from './DrinkFilter';
import FoodFilter from './FoodFilter';

const CardRecipe = () => {
  const { data,
    requestAPIInitial,
    requestAPIByFilter,
    toggleRequestAPI,
  } = useContext(RecipeContext);
  const MAX_RECIPES = 12;
  const history = useHistory();

  useEffect(() => {
    if (toggleRequestAPI) {
      return requestAPIByFilter();
    }
    requestAPIInitial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleRequestAPI]);

  // Caso o Card esteja em /foods, renderiza as chaves de Foods.
  if (history.location.pathname === '/foods') {
    return (
      <div className="container-foods">
        <FoodFilter />
        {
          data.map(({ strMeal, strMealThumb, idMeal }, index) => {
            // Filtra os 12 primeiros resultados.
            if (index < MAX_RECIPES) {
              return (
                <div
                  key={ Math.random() }
                  data-testid={ `${index}-recipe-card` }
                  onClick={ () => history.push(`/foods/${idMeal}`) }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
                  <h6
                    data-testid={ `${index}-card-name` }
                    className="text-truncate"
                  >
                    {strMeal}
                  </h6>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strMealThumb }
                    alt={ strMeal }
                    width="100"
                    height="100"
                  />
                </div>
              );
            } return null;
          })
        }
      </div>
    );
  }

  // Caso o Card esteja em /drinks, renderiza as chaves de Drinks.
  if (history.location.pathname === '/drinks') {
    return (
      <div className="container-foods">
        <DrinkFilter />
        {
          data.map(({ strDrink, strDrinkThumb, idDrink }, index) => {
            if (index < MAX_RECIPES) {
              return (
                <div
                  key={ Math.random() }
                  data-testid={ `${index}-recipe-card` }
                  onClick={ () => history.push(`/drinks/${idDrink}`) }
                  role="button"
                  tabIndex={ 0 }
                  onKeyPress={ () => {} }
                >
                  <h6
                    data-testid={ `${index}-card-name` }
                    className="text-truncate"
                  >
                    {strDrink}
                  </h6>
                  <img
                    data-testid={ `${index}-card-img` }
                    src={ strDrinkThumb }
                    alt={ strDrink }
                    width="100"
                    height="100"
                  />
                </div>
              );
            } return null;
          })
        }
      </div>
    );
  }
};

export default CardRecipe;
