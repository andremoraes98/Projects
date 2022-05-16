import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';
import { GiCompass } from 'react-icons/gi';
import { MdOutlineFoodBank } from 'react-icons/md';

const MenuInferior = () => {
  const { location: { pathname } } = useHistory();

  return (
    <footer className="footer-container" data-testid="footer">
      <div className="footer">
        <Link to="/drinks">
          <BiDrink
            size={ 40 }
            color={ pathname === '/drinks' ? '#F24B0F' : '#0D0D0D' }
          />
        </Link>
        <Link to="/explore">
          <GiCompass
            size={ 40 }
            color={ pathname === '/explore' ? '#F24B0F' : '#0D0D0D' }
          />
        </Link>
        <Link to="/foods">
          <MdOutlineFoodBank
            size={ 40 }
            color={ pathname === '/foods' ? '#F24B0F' : '#0D0D0D' }
          />
        </Link>
      </div>
    </footer>
  );
};

export default MenuInferior;
