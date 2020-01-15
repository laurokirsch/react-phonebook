import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/auth-context';
import ContactContext from '../../context/contact/contact-context';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>Olá, {user && user.name}</li>
      <i>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Sair</span>
        </a>
      </i>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Cadastrar</Link>
      </li>
      <li>
        <Link to='/login'>Entrar</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Phonr',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
