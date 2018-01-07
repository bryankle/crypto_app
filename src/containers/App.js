import React, { Component } from 'react'
import axios from 'axios'
import { Header, Container } from 'semantic-ui-react'
import MenuBar from '../components/MenuBar'
import InfoCard from '../components/InfoCard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prices: {}
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,IOTA,XRP,LTC&tsyms=BTC,USD,ETH,LTC'
      )
      .then(res => this.setState({ prices: res.data }))
  }

  render() {
    // Loop through entire array of prices and print out prices
    console.log(this.state.prices)
    return (
      <div className="App">
        <MenuBar />

        {/* <Container> */}
          <Header as="h1" style={headerStyle}>
            Total Portfolio: $9999
          </Header>
          <InfoCard prices={this.state.prices} />
        {/* </Container> */}
      </div>
    )
  }
}

const headerStyle = {
  textAlign: 'center'
}

export default App
