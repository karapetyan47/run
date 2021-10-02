import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../routesCode';
import useUserAuth from '../../hooks/useUserAuth';
import UserApi from '../../api/userApi';
import { loginSuccess } from '../../store/user/actions';

const userApi = new UserApi();

const GuestRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useUserAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    async function onLoad() {
      try {
        const res = await userApi.getUser();
        dispatch(loginSuccess(res.data.response));
      } catch (e) {
        localStorage.removeItem('token');
      }
    }
    if (localStorage.token && !isAuthenticated) {
      onLoad();
    } else if (isAuthenticated && localStorage.token) {
      dispatch(push(routes.jogs.path));
    }
  }, [dispatch, isAuthenticated]);

  return !isAuthenticated ? (
    <Route {...rest} render={(...renderProps) => <Component {...renderProps} />} />
  ) : null;
};

export default GuestRoute;
