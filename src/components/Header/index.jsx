import React from 'react';

import LOGO from '../../assets/img/fullLogo.svg';
import useUserAuth from '../../hooks/useUserAuth';
import NavBar from '../NavBar';
import './styles.scss';

const Header = () => {
  const isAuthenticated = useUserAuth();
  return (
    <div className="header d-flex align-center justify-between">
      <div className="logo">
        <img className="logo-image" src={LOGO} alt="logo" />
      </div>
      {isAuthenticated && <NavBar />}
    </div>
  );
};

export default Header;
