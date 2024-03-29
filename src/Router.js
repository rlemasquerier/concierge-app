// @flow

import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Dashboard, Login, FeedTheCat } from './pages';

type Props = {
  auth: Object,
};

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const isAuthenticated = !!auth;
  return (
    <Route
      {...rest}
      render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};

class Router extends Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <PrivateRoute exact auth={this.props.auth} path="/" component={Dashboard} />
          <PrivateRoute exact auth={this.props.auth} path="/feed-the-cat" component={FeedTheCat} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
