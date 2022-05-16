import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

class Album extends Component {
  constructor() {
    super();

    this.state = {
      musics: [],
      isRequisitionOk: false,
    };
  }

  componentDidMount() {
    this.putMusicsOnState();
  }

  putMusicsOnState = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      musics,
      isRequisitionOk: true,
    });
  }

  render() {
    const { musics, isRequisitionOk } = this.state;
    console.log()
    return (
      <div data-testid="page-album">
        <Header />
        { !isRequisitionOk
          ? <Loading />
          : (
            <div className="album">
              <div className="album-artist-name">
                <h1 data-testid="album-name">{ musics[0].collectionName }</h1>
                <h2 data-testid="artist-name">{ musics[0].artistName }</h2>
                <img
                  src={ musics[0].artworkUrl100 }
                  alt="Album-logo"
                  className="album-logo"
                />
              </div>
              <div className="preview-musics">
                <MusicCard musics={ musics } />
              </div>
            </div>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    url: PropTypes.string,
  }).isRequired,
};

export default Album;
