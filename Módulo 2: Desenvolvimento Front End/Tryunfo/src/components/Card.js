import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div className="card">
        <p
          data-testid="name-card"
          className="card-title"
        >
          { cardName }
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <div className="attributes">
          <p data-testid="attr1-card">Vitalidade: { cardAttr1 }</p>
          <p data-testid="attr2-card">Destreza: { cardAttr2 }</p>
          <p data-testid="attr3-card">Inteligência: { cardAttr3 }</p>
        </div>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo ? (
          <p
            className="tryunfo"
            data-testid="trunfo-card"
          >
            Super Trunfo
          </p>
        ) : ''}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
