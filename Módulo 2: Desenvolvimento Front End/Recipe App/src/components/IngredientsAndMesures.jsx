import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, ListGroup, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipesContext';

const IngredientsAndMesures = ({ id, pathFood }) => {
  const { dataRecipe, setAllIngredients } = useContext(RecipeContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [inLocalStorage, setLocalStorage] = useState([]);

  const keysFromDataRecipe = Object.keys(dataRecipe[0]);

  const ingredients = keysFromDataRecipe
    .filter((element) => element.includes('strIngredient'))
    .map((element) => dataRecipe[0][element])
    .filter((element) => element !== null && element !== '');

  const measures = keysFromDataRecipe
    .filter((element) => element.includes('strMeasure'))
    .map((element) => dataRecipe[0][element]);

  const handleClick = (target) => {
    const recipeInProgress = JSON.parse(localStorage
      .getItem('inProgressRecipes'))
        || { meals: { }, cocktails: {} };

    const keyOfRecipeInProgress = pathFood ? 'meals' : 'cocktails';
    const object = {
      ...recipeInProgress,
    };

    if (target.checked) {
      object[keyOfRecipeInProgress][id] = object[keyOfRecipeInProgress][id]
        ? [...object[keyOfRecipeInProgress][id], target.id]
        : [target.id];
    } else {
      object[keyOfRecipeInProgress][id] = object[keyOfRecipeInProgress][id]
        .filter((element) => element !== target.id);
    }
    localStorage.setItem('inProgressRecipes', JSON.stringify(object));
    if (object[keyOfRecipeInProgress][id].length === ingredients.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const getFromLocalStorage = () => {
    const keyOfRecipeInProgress = pathFood ? 'meals' : 'cocktails';
    const object = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || { meals: { [id]: [''] }, cocktails: { [id]: [''] } };
    setLocalStorage(object[keyOfRecipeInProgress][id] || []);
  };

  useEffect(() => {
    setAllIngredients(ingredients);
    getFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFinish = () => {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    const stringOfTags = dataRecipe[0].strTags || '';
    const tags = stringOfTags.split(',') || null;

    const doneRecipe = [
      {
        id,
        type: pathFood ? 'food' : 'drink',
        nationality: dataRecipe[0].strArea,
        category: dataRecipe[0].strCategory || '',
        alcoholicOrNot: dataRecipe[0].strAlcoholic || '',
        name: dataRecipe[0].strMeal || dataRecipe[0].strDrink,
        image: dataRecipe[0].strMealThumb || dataRecipe[0].strDrinkThumb,
        doneDate: `${dia}/${mes}/${ano}`,
        tags,
      }];
    const savedOnLocalStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const toLocalStorage = savedOnLocalStorage.concat(doneRecipe);

    const isGoingToLocalStorage = savedOnLocalStorage
      .some((element) => element.id === doneRecipe[0].id);

    if (!isGoingToLocalStorage) {
      localStorage.setItem('doneRecipes', JSON.stringify(toLocalStorage));
    }
  };

  return (
    <div>
      <ListGroup className="ingredients-in-progress details-ingredients">
        {ingredients.map((element, index) => (
          <Form.Group
            key={ index }
          >
            <ListGroup.Item>
              <Form.Check
                id={ element }
                name={ element }
                onClick={ ({ target }) => {
                  handleClick(target);
                  getFromLocalStorage();
                } }
                checked={ inLocalStorage.includes(element) }
                label={ ` ${element} - ${measures[index] || ''}` }
              />
            </ListGroup.Item>
          </Form.Group>))}
      </ListGroup>
      <Link to="/done-recipes">
        <Button
          disabled={ isDisabled }
          data-testid="finish-recipe-btn"
          className="finish-recipe-btn"
          onClick={ handleFinish }
          variant="info"
        >
          Finish Recipe
        </Button>
      </Link>
    </div>
  );
};

IngredientsAndMesures.propTypes = {
  id: PropTypes.string.isRequired,
  pathFood: PropTypes.bool.isRequired,
};

export default IngredientsAndMesures;
