import React from 'react';
import classNames from 'classnames';
import Header from '../components/Header.jsx';
import { Link } from 'react-router';

function NotLogged() {
  return (
    <div >
    <Link to="/" className={classNames('no-underline')}>Volver</Link>
    <h1>Ops! Debes iniciar sesión para poder visitar esta página</h1>
    </div>
  );
}

export default NotLogged;
