import React, { Component } from 'react';
import propTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from '../pages/Loading';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      isRequisitionOk: true,
      favoriteMusics: [],
    };
  }

  componentDidMount() {
    this.getFavoriteIdMusicFromLocalStorage();
  }

  getFavoriteIdMusicFromLocalStorage = async () => {
    this.toggleRequisitionState();
    const localStorageFavoriteMusics = await getFavoriteSongs();
    const musicsID = localStorageFavoriteMusics.map((music) => music.trackId);
    this.setState({
      favoriteMusics: musicsID,
      isRequisitionOk: true,
    });
  }

  removeMusicToFavorite = async (target) => {
    const { putFavoriteMusicsInState, isComingFromFavoritesPage } = this.props;
    if (!isComingFromFavoritesPage) {
      this.toggleRequisitionState();
    }
    const { favoriteMusics } = this.state;
    const music = await getMusics(target.id);
    const requisitionAddSong = await removeSong(music[0]);
    const isRequisitionOk = requisitionAddSong === 'OK';
    const newFavorite = favoriteMusics
      .filter((favoriteMusic) => favoriteMusic !== parseFloat(target.id));
    if (putFavoriteMusicsInState) {
      putFavoriteMusicsInState();
    }
    this.setState({
      isRequisitionOk,
      favoriteMusics: newFavorite,
    });
  }

  addMusicToFavorite = async (target) => {
    this.toggleRequisitionState();
    const music = await getMusics(target.id);
    const requisitionAddSong = await addSong(music[0]);
    const isRequisitionOk = requisitionAddSong === 'OK';
    this.setState((prevState) => ({
      isRequisitionOk,
      favoriteMusics: [...prevState.favoriteMusics, parseFloat(target.id)],
    }));
  }

  handleMusicToFavorite = async ({ target }) => {
    if (target.checked) {
      this.addMusicToFavorite(target);
    } else {
      this.removeMusicToFavorite(target);
    }
  }

  toggleRequisitionState = () => {
    this.setState((prevState) => ({
      isRequisitionOk: !prevState.isRequisitionOk,
    }));
  }

  render() {
    const { musics, isComingFromFavoritesPage } = this.props;
    const { isRequisitionOk, favoriteMusics } = this.state;
    return isRequisitionOk || isComingFromFavoritesPage
      ? (
        musics.map((music) => {
          if (music.trackName) {
            return (
              <div className="music-card" key={ music.trackName }>
                <p className="music-name">{ music.trackName }</p>
                <audio
                  data-testid="audio-component"
                  src={ music.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  <code>audio</code>
                </audio>
                <label htmlFor={ music.trackId }>
                  Favorita
                  <input
                    data-testid={ `checkbox-music-${music.trackId}` }
                    type="checkbox"
                    name="favorite"
                    id={ music.trackId }
                    onChange={ this.handleMusicToFavorite }
                    checked={ favoriteMusics.includes(music.trackId) }
                  />
                </label>
              </div>
            );
          } return null;
        })
      ) : <Loading />;
  }
}

MusicCard.propTypes = {
  musics: propTypes.arrayOf(propTypes.object).isRequired,
  putFavoriteMusicsInState: propTypes.func.isRequired,
  isComingFromFavoritesPage: propTypes.bool.isRequired,
};

export default MusicCard;
