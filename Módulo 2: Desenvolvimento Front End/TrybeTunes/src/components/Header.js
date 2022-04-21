import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isRequisitionOk: false,
      name: '',
    };
  }

  componentDidMount() {
    getUser().then((user) => (
      this.setState({
        isRequisitionOk: true,
        name: user.name,
      })
    ));
  }

  render() {
    const { isRequisitionOk, name } = this.state;
    return isRequisitionOk
      ? (
        <header className="header" data-testid="header-component">
          <div className="header-user">
            <h1 data-testid="header-user-name">{ name }</h1>
          </div>
          <div className="links">
            <div>
              <Link data-testid="link-to-search" to="/search">Pesquisar</Link>
            </div>
            <div>
              <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
            </div>
            <div>
              <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
            </div>
          </div>
        </header>
      )
      : <Loading />;
  }
}

export default Header;
