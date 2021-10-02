import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import SubHeader from '../../components/SubHeader';
import { setFilterVisible } from '../../store/jogs/actions';

const AuthLayout = ({ children }) => {
  const filterVisible = useSelector((state) => state.jogs.filterVisible);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filterVisible && pathname !== '/') {
      dispatch(setFilterVisible(false));
    }
  }, [dispatch, filterVisible, pathname]);

  return (
    <>
      {filterVisible && <SubHeader />}
      {children}
    </>
  );
};

export default AuthLayout;
