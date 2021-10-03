import React, { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';

import LOGO from '../../assets/img/menuLogo.png';
import CLOSE from '../../assets/img/cancelGrey.svg';

import './styles.scss';

const Menu = ({ close }) => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="menu">
      <div className="menu-header">
        <img src={LOGO} alt="logo" />
        <img src={CLOSE} alt="close" onClick={close} className="cursor-pointer" />
      </div>
      <div className="mb-65 d-flex align-center justify-center">
        <NavLink
          onClick={close}
          exact={true}
          activeClassName="menu-item-active"
          className="menu-item"
          to="/">
          JOGS
        </NavLink>
      </div>
      <div className="mb-65 d-flex align-center justify-center">
        <NavLink
          onClick={close}
          activeClassName="menu-item-active"
          className="menu-item"
          to="/info">
          INFO
        </NavLink>
      </div>
      <div className="mb-65 d-flex align-center justify-center">
        <NavLink
          onClick={close}
          activeClassName="menu-item-active"
          className="menu-item"
          to="/contact-us">
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
