import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';

const ReceitasFavoritas = () => {
  const [updateState, setUpdateState] = useState(true);
  const getStorageFavoriteRecipes = JSON.parse(
    localStorage.getItem('favoriteRecipes'),
  ) || [];

  const [filter, setFilter] = useState('all');
  const favoritesRecipes = filter === 'all'
    ? getStorageFavoriteRecipes
    : getStorageFavoriteRecipes.filter(
      (favorites) => favorites.type === filter,
    );

  return (
    <>
      <Header pageTitle="Favorite Recipes" isSearch={ false } />

      <main>
        <section className="favorite-buttons">
          <Button
            data-testid="filter-by-all-btn"
            onClick={ () => setFilter('all') }
            variant="dark"
          >
            All
          </Button>
          <Button
            data-testid="filter-by-food-btn"
            onClick={ () => setFilter('food') }
            variant="dark"
          >
            Food
          </Button>
          <Button
            data-testid="filter-by-drink-btn"
            onClick={ () => setFilter('drink') }
            variant="dark"
          >
            Drinks
          </Button>
        </section>

        <section>
          {favoritesRecipes.map(
            (
              { id, image, category, name, type, nationality, alcoholicOrNot },
              index,
            ) => (
              <article key={ id }>
                <section className="recipe-detail favorite-recipes">
                  <Link to={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }>
                    <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
                  </Link>

                  <div className="done-recipe-img">
                    <Link to={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }>
                      <img
                        data-testid={ `${index}-horizontal-image` }
                        src={ image }
                        alt={ name }
                      />
                    </Link>

                    <p data-testid={ `${index}-horizontal-top-text` }>
                      {alcoholicOrNot === ''
                        ? `${nationality} - ${category}`
                        : alcoholicOrNot}
                    </p>
                  </div>

                  <div
                    onClick={ () => setUpdateState(!updateState) }
                    role="button"
                    tabIndex={ 0 }
                    onKeyPress={ () => {} }
                  >
                    <ShareButton
                      dataId={ `${index}-horizontal-share-btn` }
                      URL={ type === 'food' ? `/foods/${id}` : `/drinks/${id}` }
                    />

                    <FavoriteButton
                      dataId={ `${index}-horizontal-favorite-btn` }
                      path={ false }
                      id={ id }
                    />
                  </div>
                </section>
              </article>
            ),
          )}
        </section>
      </main>
    </>
  );
};

export default ReceitasFavoritas;
