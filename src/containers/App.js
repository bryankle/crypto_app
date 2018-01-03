import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      prices: {}
    }
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,IOTA,XRP,LTC&tsyms=BTC,USD,ETH,LTC')
      .then((res) => this.setState({ prices: res.data }))
  }

  printPrices(cryptoType) {
    console.log(cryptoType)
  }

  render() {

    console.log(this.state.prices);
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

export default App;
