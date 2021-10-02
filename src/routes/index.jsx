import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

/* Routes Import */
import GuestRoute from './GuestRoute';
import routes from './routesCode';

/* Other Imports */
import suspense from '../hocs/suspense';
import AuthRoute from './AuthRoute';

const NotFound = lazy(() => import('../pages/NotFound'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Jogs = lazy(() => import('../pages/Jogs'));
const AddJog = lazy(() => import('../pages/AddJog'));
const Info = lazy(() => import('../pages/Info'));

const Routes = () => (
  <Switch>
    <AuthRoute path={routes.jogs.path} exact={routes.jogs.exact} component={suspense(Jogs)} />
    <AuthRoute path={routes.addJog.path} exact={routes.addJog.exact} component={suspense(AddJog)} />
    <AuthRoute path={routes.info.path} exact={routes.info.exact} component={suspense(Info)} />

    <GuestRoute
      path={routes.signIn.path}
      exact={routes.signIn.exact}
      component={suspense(SignIn)}
    />

    <Route exact={true} path={'*'} component={suspense(NotFound)} />
  </Switch>
);

export default Routes;
