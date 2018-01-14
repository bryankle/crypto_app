import React, { Component } from 'react'
import InfoCard from '../components/InfoCard'
import axios from 'axios'

class PricePage extends Component {
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
      return(
          <InfoCard prices={this.state.prices} />
      )
  }
}

export default PricePage;