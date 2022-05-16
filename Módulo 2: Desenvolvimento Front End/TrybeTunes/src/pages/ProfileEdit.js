import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import Loading from './Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      isRequisitionOk: false,
      name: '',
      image: '',
      email: '',
      description: '',
      wasButtonClicked: false,
    };
  }

  componentDidMount() {
    this.getUserFromLocalStorage();
  }

  handleChangeInputs = ({ target }) => {
    const name = target.id;
    const { value } = target;
    this.setState({
      [name]: value,
    });
  }

  getUserFromLocalStorage = async () => {
    const { description, email, image, name } = await getUser();
    this.setState({
      name,
      image,
      email,
      description,
      isRequisitionOk: true,
    });
  }

  sendUserToLocalStorage = async () => {
    this.setState({
      wasButtonClicked: true,
    });
    const { description, email, image, name } = this.state;
    const user = {
      description,
      email,
      name,
      image,
    };
    await updateUser(user);
  }

  render() {
    const {
      isRequisitionOk, description, email, image, name, wasButtonClicked,
    } = this.state;
    const isButtonDisabled = description
      ? !(
        (description.length > 0)
        && (email.length > 0)
        && (image.length > 0)
        && (name.length > 0)
      )
      : true;
    return (
      <div className="profile-edit" data-testid="page-profile-edit">
        <Header />
        {
          isRequisitionOk
            ? (
              <section>
                {
                  !wasButtonClicked
                    ? (
                      <form>
                        <label htmlFor="image">
                          Imagem:
                          <input
                            type="text"
                            id="image"
                            value={ image }
                            data-testid="edit-input-image"
                            onChange={ this.handleChangeInputs }
                          />
                        </label>

                        <label htmlFor="name">
                          Nome:
                          <input
                            type="text"
                            id="name"
                            value={ name }
                            data-testid="edit-input-name"
                            onChange={ this.handleChangeInputs }
                          />
                        </label>

                        <label htmlFor="email">
                          Email:
                          <input
                            type="text"
                            id="email"
                            value={ email }
                            data-testid="edit-input-email"
                            onChange={ this.handleChangeInputs }
                          />
                        </label>

                        <label htmlFor="description">
                          Descrição:
                          <textarea
                            id="description"
                            value={ description }
                            data-testid="edit-input-description"
                            onChange={ this.handleChangeInputs }
                          />
                        </label>

                        <button
                          data-testid="edit-button-save"
                          type="button"
                          disabled={ isButtonDisabled }
                          onClick={ this.sendUserToLocalStorage }
                        >
                          Salvar
                        </button>
                      </form>
                    ) : <Redirect to="/profile" />
                }
              </section>
            )
            : <Loading />
        }
      </div>
    );
  }
}

export default ProfileEdit;
