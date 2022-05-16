import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'react-bootstrap';

const StartButton = (id, path, url) => {
  const getKey = JSON
    .parse(localStorage
      .getItem('inProgressRecipes')) || {
    cocktails: { empty: '' }, meals: { empty: '' } };

  const isFoodOrDrink = path ? getKey.meals : getKey.cocktails;

  const isInProgress = Object.keys(isFoodOrDrink || [])
    .some((element) => element.includes(id));

  return (
    <Link to={ `${url}/in-progress` }>
      <Button
        data-testid="start-recipe-btn"
        className="start-btn"
        variant="dark"
      >
        {isInProgress ? 'Continue Recipe' : 'Start Recipe' }
      </Button>
    </Link>);
};

export default StartButton;
