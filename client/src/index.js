import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import PricePage from './containers/PricePage'
import Signup from './containers/auth/Signup'
import Signin from './containers/auth/Signin'
import MenuBar from './components/MenuBar'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStore(reducers, composeWithDevTools(
  // applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MenuBar />
        <Container>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route exact path="/" component={PricePage} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
