import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import PricePage from './PricePage'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import MenuBar from '../components/MenuBar'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <MenuBar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route exact path="/" component={PricePage} />
          </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}

export default Router
