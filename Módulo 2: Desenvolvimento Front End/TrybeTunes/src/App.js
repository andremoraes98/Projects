import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
/* import searchAlbumsAPI from './services/searchAlbumsAPI';
import { getUser, createUser } from './services/userAPI';
import { getFavoriteSongs, addSong, removeSong } from './services/favoriteSongsAPI';
import getMusics from './services/musicsAPI'; */

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      requisitionOk: false,
    };
  }

  changeRequisitionStatus = () => {
    this.setState((prevState) => ({
      requisitionOk: !prevState.requisitionOk,
    }));
  }

  render() {
    const { requisitionOk } = this.state;
    return (
      <Switch>
        <Route path="/search" component={ Search } />

        <Route exact path="/album/:id" component={ Album } />

        <Route path="/favorites" component={ Favorites } />

        <Route exact path="/profile/edit" component={ ProfileEdit } />

        <Route path="/profile" component={ Profile } />

        <Route exact path="/">
          <Login
            APIRequisition={ requisitionOk }
            changeRequisitionStatus={ this.changeRequisitionStatus }
          />
        </Route>

        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
