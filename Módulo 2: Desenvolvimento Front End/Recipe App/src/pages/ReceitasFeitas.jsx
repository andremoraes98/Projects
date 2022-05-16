import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import DoneFood from '../components/DoneFood';

const ReceitasFeitas = () => {
  const [type, setType] = useState('all');
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];

  console.log(doneRecipes);

  const renderRecipes = type === 'all'
    ? doneRecipes
    : doneRecipes.filter((food) => food.type === type);

  return (
    <section>
      <header>
        <Header pageTitle="Done Recipes" isSearch={ false } />
      </header>

      <div className="done-recipe-buttons">
        <Button
          data-testid="filter-by-all-btn"
          onClick={ () => setType('all') }
          variant="dark"
        >
          All
        </Button>

        <Button
          data-testid="filter-by-food-btn"
          onClick={ () => setType('food') }
          variant="dark"
        >
          Foods
        </Button>

        <Button
          data-testid="filter-by-drink-btn"
          onClick={ () => setType('drink') }
          variant="dark"
        >
          Drinks
        </Button>
      </div>

      <section>
        { renderRecipes.length === 0
          ? (
            <div className="done-recipe-non-recipe">
              <h3>Você não concluiu nenhuma receita ainda...</h3>
            </div>
          )
          : (
            <DoneFood
              food={ renderRecipes }
            />
          ) }
      </section>

    </section>
  );
};

ReceitasFeitas.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

export default ReceitasFeitas;
