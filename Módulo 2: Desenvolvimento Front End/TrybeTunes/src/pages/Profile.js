import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      isRequisitionOk: false,
      user: '',
    };
  }

  componentDidMount() {
    this.getUserFromLocalStorage();
  }

  getUserFromLocalStorage = async () => {
    const user = await getUser();
    this.setState({
      user,
      isRequisitionOk: true,
    });
  }

  render() {
    const { isRequisitionOk, user: { description, email, image, name } } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {
          isRequisitionOk
            ? (
              <div className="profile">
                <h1>Profile</h1>
                <img data-testid="profile-image" src={ image } alt={ name } />
                <p>{name}</p>
                <p>{email}</p>
                <p>{description}</p>
                <Link to="/profile/edit">Editar perfil</Link>
              </div>
            )
            : <Loading />
        }
      </div>
    );
  }
}

export default Profile;
