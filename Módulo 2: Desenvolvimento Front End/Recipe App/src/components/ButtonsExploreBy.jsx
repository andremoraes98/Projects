import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ButtonsExploreBy = () => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const redirectToExploreBy = ({ target }) => {
    history.push(`${pathname}/${target.value}`);
  };

  const surpriseMe = async () => {
    if (pathname === '/explore/foods') {
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      const response = await fetch(url);
      const { meals } = await response.json();
      history.push(`/foods/${meals[0].idMeal}`);
    }
    if (pathname === '/explore/drinks') {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
      const response = await fetch(url);
      const { drinks } = await response.json();
      history.push(`/drinks/${drinks[0].idDrink}`);
    }
  };

  return (
    <section className="explore-container">
      <Button
        data-testid="explore-by-ingredient"
        value="ingredients"
        onClick={ (e) => redirectToExploreBy(e) }
        variant="secondary"
      >
        By Ingredient
      </Button>
      {
        pathname === '/explore/foods'
          ? (
            <Button
              data-testid="explore-by-nationality"
              value="nationalities"
              onClick={ (e) => redirectToExploreBy(e) }
              variant="secondary"
            >
              By Nationality
            </Button>
          )
          : null
      }
      <Button
        data-testid="explore-surprise"
        onClick={ () => surpriseMe() }
        variant="secondary"
      >
        Surprise me!
      </Button>
    </section>
  );
};

export default ButtonsExploreBy;
