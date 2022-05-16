import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const Perfil = (props) => {
  const getStorage = JSON.parse(localStorage.getItem('user'));
  const user = getStorage !== null ? getStorage.email : '';

  const handleLogout = () => {
    const { history } = props;

    const keysStorage = [
      'user',
      'mealsToken',
      'cocktailsToken',
      'doneRecipes',
      'favoriteRecipes',
      'inProgressRecipes',
    ];

    keysStorage.forEach((key) => {
      localStorage.removeItem(key);
    });

    history.push('/');
  };

  return (
    <>
      <Header pageTitle="Profile" isSearch={ false } />

      <div className="profile-container">
        <h5 data-testid="profile-email">{user}</h5>

        <Link data-testid="profile-done-btn" to="/done-recipes">
          <Button variant="dark">Done Recipes</Button>
        </Link>
        <Link data-testid="profile-favorite-btn" to="/favorite-recipes">
          <Button variant="dark">Favorite Recipes</Button>
        </Link>

        <Button
          onClick={ handleLogout }
          data-testid="profile-logout-btn"
          variant="dark"
        >
          Logout
        </Button>
      </div>

      <MenuInferior />
    </>
  );
};

Perfil.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Perfil;
