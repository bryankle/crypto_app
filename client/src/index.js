import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import RequireAuth from './containers/auth/require_auth';

import PricePage from './containers/PricePage';
import Signup from './containers/auth/Signup';
import Signin from './containers/auth/Signin';
import Sign from './containers/auth/Sign';
import LandingPage from './views/Homepage/LandingPage';

// import Signout from './containers/auth/Signout';
import MenuBar from './components/MenuBar';
import Dashboard from './views/Dashboard/Dashboard';
import { AUTH_USER } from './actions/types';

import 'bootstrap/dist/css/bootstrap.css';

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk),
  // other store enhancers if any
));

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER })
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {/* <MenuBar /> */}
        <Switch>
          {/* <IndexRoute /> */}
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/sign" component={Sign} />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          {/* <Route path="/signout" component={Signout} /> */}
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
