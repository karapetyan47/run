import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../routesCode';
import useUserAuth from '../../hooks/useUserAuth';
import UserApi from '../../api/userApi';
import { loginSuccess } from '../../store/user/actions';
import AuthLayout from '../../layouts/AuthLayout';

const userApi = new UserApi();

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useUserAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    async function onLoad() {
      try {
        const res = await userApi.getUser();
        dispatch(loginSuccess(res.data.response));
      } catch (e) {
        localStorage.removeItem('token');
        dispatch(push(routes.signIn.path));
      }
    }
    if (localStorage.token && !isAuthenticated) {
      onLoad();
    } else if (!localStorage.token) {
      dispatch(push(routes.signIn.path));
    }
  }, [dispatch, isAuthenticated]);

  return isAuthenticated ? (
    <AuthLayout>
      <Route {...rest} render={(...renderProps) => <Component {...renderProps} />} />
    </AuthLayout>
  ) : null;
};

export default AuthRoute;
