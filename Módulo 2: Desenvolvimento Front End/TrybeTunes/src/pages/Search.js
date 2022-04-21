import React, { Component } from 'react';
import Collection from '../components/Collection';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: '',
      albums: [],
      isRequisitionOk: true,
      artistName: '',
    };
  }

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  togleRequisition = () => {

  }

  getAlbumFromSearch = async () => {
    const { searchInput } = this.state;
    const artistName = `Resultado de álbuns de: ${searchInput}`;
    const albums = await searchAlbumsAPI(searchInput);
    const isAlbumsValid = albums.length > 0;
    this.setState({
      searchInput: '',
      albums,
      artistName,
      isRequisitionOk: isAlbumsValid,
    });
  }

  render() {
    const { isRequisitionOk, searchInput, albums, artistName } = this.state;
    const minCharacterWord = 2;
    const disabledButton = true;
    return (
      <div className="centered" data-testid="page-search">
        <Header />
        <input
          type="text"
          name="searchInput"
          className="search-input"
          placeholder="Pesquisar..."
          data-testid="search-artist-input"
          value={ searchInput }
          onChange={ this.onInputChange }
        />

        <button
          data-testid="search-artist-button"
          type="button"
          className="search-button"
          onClick={ this.getAlbumFromSearch }
          disabled={
            searchInput.length >= minCharacterWord
              ? !disabledButton
              : disabledButton
          }
        >
          Pesquisar
        </button>

        { isRequisitionOk
          ? (
            <div className="all-musics">
              <p className="artist-result">{ artistName }</p>
              { albums.map((album, index) => (
                <Collection
                  key={ index }
                  imgLink={ album.artworkUrl100 }
                  artistName={ album.artistName }
                  collectionName={ album.collectionName }
                  collectionPrice={ album.collectionPrice }
                  collectionId={ album.collectionId }
                />
              ))}
            </div>
          )
          : <h1>Nenhum álbum foi encontrado</h1>}
      </div>
    );
  }
}

export default Search;
