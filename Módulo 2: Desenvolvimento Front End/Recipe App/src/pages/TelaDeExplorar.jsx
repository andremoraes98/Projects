import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const TelaDeExplorar = () => (
  <div>
    <Header pageTitle="Explore" isSearch={ false } />

    <div className="explore-container">
      <Link data-testid="explore-foods" to="/explore/foods">
        <Button variant="dark">Explore Foods</Button>
      </Link>
      <Link data-testid="explore-drinks" to="/explore/drinks">
        <Button variant="dark">Explore Drinks</Button>
      </Link>
    </div>

    <MenuInferior />
  </div>
);

export default TelaDeExplorar;
