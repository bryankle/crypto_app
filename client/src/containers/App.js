import React, { Component } from 'react'
import axios from 'axios'
import { Header, Container } from 'semantic-ui-react'
import InfoCard from '../components/InfoCard'
import SignUp from './auth/Signup'
import Router from './Router'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <Container>
          <Router />
        </Container>
    )
  }
}

const headerStyle = {
  textAlign: 'center'
}

export default App
