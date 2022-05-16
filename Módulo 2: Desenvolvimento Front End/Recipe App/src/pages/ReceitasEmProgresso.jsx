import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import RecipeContext from '../context/RecipesContext';
import IngredientsAndMesures from '../components/IngredientsAndMesures';

const ReceitasEmProgresso = ({ match: { params: { id } } }) => {
  const history = useHistory();
  const pathFood = history.location.pathname.includes('/foods');
  const { dataRecipe, setDataRecipe } = useContext(RecipeContext);
  const [loading, setLoading] = useState(true);
  const idFood = id;
  const URL = pathFood ? `/foods/${idFood}` : `/drinks/${idFood}`;

  const requestRecipeAPI = async () => {
    const mealURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const drinkURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const url = pathFood ? mealURL : drinkURL;
    const response = await fetch(url);
    const { meals, drinks } = await response.json();
    const data = pathFood ? meals : drinks;
    setDataRecipe(data);
    setLoading(false);
  };

  useEffect(() => {
    requestRecipeAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    loading ? 'Carregando' : (
      <div>
        <section className="recipe-detail">
          <h3
            data-testid="recipe-title"
          >
            {pathFood ? dataRecipe[0].strMeal : dataRecipe[0].strDrink}

          </h3>
          <div>
            <img
              src={ pathFood ? dataRecipe[0].strMealThumb : dataRecipe[0].strDrinkThumb }
              alt="Foto da coisa pronta"
              data-testid="recipe-photo"
              className="detail-photo"
            />
            <h5 data-testid="recipe-category">
              {pathFood
                ? dataRecipe[0].strCategory : dataRecipe[0].strAlcoholic}
            </h5>
          </div>
          <div>
            <ShareButton URL={ URL } dataId="share-btn" />
            <FavoriteButton id={ idFood } path={ pathFood } dataId="favorite-btn" />
          </div>
        </section>
        <p
          data-testid="instructions"
          className="instructions"
        >
          {dataRecipe[0].strInstructions}
        </p>
        <IngredientsAndMesures id={ id } pathFood={ pathFood } />
      </div>));
};

export default ReceitasEmProgresso;

ReceitasEmProgresso.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
