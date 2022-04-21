import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Collection extends Component {
  render() {
    const {
      imgLink,
      artistName,
      collectionName,
      collectionPrice,
      collectionId,
    } = this.props;
    return (
      <div className="collection">
        <img src={ imgLink } alt={ collectionName } />
        <p>{ `Artista: ${artistName}` }</p>
        <p>{ `Nome: ${collectionName}` }</p>
        <p>{ `Preço: $${collectionPrice}` }</p>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          Get it!
        </Link>
      </div>
    );
  }
}

Collection.propTypes = {
  imgLink: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  collectionPrice: PropTypes.number.isRequired,
  collectionId: PropTypes.number.isRequired,
};

export default Collection;
