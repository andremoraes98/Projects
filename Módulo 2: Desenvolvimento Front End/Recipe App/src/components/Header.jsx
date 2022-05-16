import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import BarraDeBusca from './BarraDeBusca';

const Header = ({ pageTitle, isSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { location: { pathname } } = useHistory();

  return (
    <header>
      <div className="header">
        <Link to="/profile">
          <BsFillPersonLinesFill
            size={ 40 }
            color={ pathname === '/profile' ? '#F24B0F' : '#0D0D0D' }
          />
        </Link>

        <h4 data-testid="page-title">{pageTitle}</h4>

        {isSearch && (
          <button
            className="btn-search"
            type="button"
            onClick={ () => setShowSearch(!showSearch) }
          >
            <BiSearchAlt
              size={ 40 }
              color={ showSearch ? '#F24B0F' : '#0D0D0D' }
            />
          </button>
        )}
      </div>

      {showSearch && (
        <BarraDeBusca />
      )}
    </header>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  isSearch: PropTypes.bool.isRequired,
};

export default Header;
