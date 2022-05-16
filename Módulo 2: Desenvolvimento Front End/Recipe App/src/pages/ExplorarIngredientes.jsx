import React from 'react';
import CardIngredient from '../components/CardIngredient';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

const ExplorarIngredientes = () => (
  <div>
    <Header pageTitle="Explore Ingredients" isSearch={ false } />
    <div className="container-foods">
      <CardIngredient />
    </div>
    <MenuInferior />
  </div>
);

export default ExplorarIngredientes;
