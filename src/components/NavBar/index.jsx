import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import FILTER from '../../assets/img/filter.svg';
import ACTIVE_FILTER from '../../assets/img/filter-active.svg';
import MENU from '../../assets/img/menu.png';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterVisible } from '../../store/jogs/actions';
import Menu from '../Menu';

const NavBar = () => {
  const filterVisible = useSelector((state) => state.jogs.filterVisible);
  const dispatch = useDispatch();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar d-flex align-center">
      <NavLink exact={true} activeClassName="nav-item-active" className="nav-item" to="/">
        JOGS
      </NavLink>
      <NavLink activeClassName="nav-item-active" className="nav-item" to="/info">
        INFO
      </NavLink>
      <NavLink activeClassName="nav-item-active" className="mr-49 nav-item" to="/contact-us">
        CONTACT US
      </NavLink>
      <div
        onClick={() => {
          if (location.pathname === '/') {
            dispatch(setFilterVisible(!filterVisible));
          }
        }}
        className={`filter cursor-pointer mr-30 ${location.pathname !== '/' ? 'resp-filter' : ''}`}>
        <img src={filterVisible ? ACTIVE_FILTER : FILTER} alt="Filter Icon" />
      </div>
      <img
        className="mr-25 cursor-pointer burger"
        src={MENU}
        alt="menu"
        onClick={() => {
          setMenuOpen(true);
        }}
      />
      {menuOpen && (
        <Menu
          close={() => {
            setMenuOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default NavBar;
