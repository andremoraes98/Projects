import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/Game';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Rancking from './pages/Rancking';

export default function App() {
  return (
    <Switch>
      <Route path="/game" component={ Game } />
      <Route path="/settings" component={ Settings } />
      <Route path="/feedback" component={ Feedback } />
      <Route path="/rancking" component={ Rancking } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}
