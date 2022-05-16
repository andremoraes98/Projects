import React, { useContext } from 'react';
import { InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap';
import RecipeContext from '../context/RecipesContext';

const BarraDeBusca = () => {
  const {
    setFilter, textFilter, setTextFilter, requestAPIByFilter,
  } = useContext(RecipeContext);

  return (
    <form onSubmit={ (e) => requestAPIByFilter(e) }>
      <section className="input-search">
        <ButtonGroup>
          <InputGroup>
            <FormControl
              data-testid="search-input"
              placeholder="Pesquisar..."
              type="text"
              value={ textFilter }
              onChange={ ({ target }) => setTextFilter(`${target.value}`) }
            />
          </InputGroup>
          <Button
            data-testid="exec-search-btn"
            type="submit"
            variant="dark"
          >
            Search
          </Button>
        </ButtonGroup>
      </section>
      <div className="filter-search">
        <label htmlFor="ingredient">
          <input
            name="filter"
            id="ingredient"
            value="i"
            data-testid="ingredient-search-radio"
            type="radio"
            onChange={ ({ target }) => setFilter(`${target.value}`) }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            name="filter"
            id="name"
            value="s"
            data-testid="name-search-radio"
            type="radio"
            onChange={ ({ target }) => setFilter(`${target.value}`) }
          />
          Name
        </label>
        <label htmlFor="first-letter">
          <input
            name="filter"
            id="first-letter"
            value="f"
            data-testid="first-letter-search-radio"
            type="radio"
            onChange={ ({ target }) => setFilter(`${target.value}`) }
          />
          First Letter
        </label>
      </div>
    </form>
  );
};

export default BarraDeBusca;
