import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
/* import Loading from './Loading'; */
import MusicCard from '../components/MusicCard';

class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      /* isRequisitionOk: true, */
      favoriteMusics: [],
    };
  }

  componentDidMount() {
    this.putFavoriteMusicsInState();
  }

  putFavoriteMusicsInState = async () => {
    // this.toggleRequisitioOkFromFavorites();
    const newFavoriteMusics = await getFavoriteSongs();
    this.setState({
      favoriteMusics: newFavoriteMusics,
      /* isRequisitionOk: true, */
    });
  }

  /*   toggleRequisitioOkFromFavorites = () => {
    this.setState({
      isRequisitionOk: false,
    });
  } */

  render() {
    const { favoriteMusics } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <div className="favorites">
          <h1>Favorites</h1>
          <MusicCard
            musics={ favoriteMusics }
            putFavoriteMusicsInState={ this.putFavoriteMusicsInState }
          />
        </div>
      </div>
    );
  }
}

export default Favorites;
