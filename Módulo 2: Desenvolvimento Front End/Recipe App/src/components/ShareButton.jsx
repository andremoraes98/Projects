import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GrShareOption } from 'react-icons/gr';
import { GiShare } from 'react-icons/gi';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareButton({ URL, dataId }) {
  const [isCopy, setIsCopy] = useState(false);

  const handleClick = () => {
    copy(`http://localhost:3000${URL}`);
    setIsCopy(true);
  };

  return (
    <Button
      data-testid={ dataId }
      onClick={ handleClick }
      aria-controls="link"
      aria-expanded={ isCopy }
      src={ shareIcon }
      variant={ isCopy ? 'dark' : 'outline-dark' }
    >
      { isCopy
        ? <GiShare size={ 40 } />
        : <GrShareOption size={ 40 } /> }
    </Button>
  );
}

ShareButton.propTypes = {
  dataId: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
};

export default ShareButton;
