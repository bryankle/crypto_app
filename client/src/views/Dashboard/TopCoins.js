import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import {
    Divider,
    Icon,
    Container,
    Segment,
    Grid,
    Header,
    Image
} from 'semantic-ui-react'
import { Content, Navbar, Main, CryptoIcon } from './style';

class TopCoins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: {},
            prices: {}
        }
    }

    componentWillMount() {
        // Imports all images from assets foler and assigns to state
        const images = this.importAll(require.context('../../assets/images/logos', false, /\.(png|jpe?g|svg)$/));
        this.setState({ images })
    }

    componentDidMount() {
        axios
            // Uses this API to gather coin prices
            .get('https://api.coinmarketcap.com/v1/ticker/?limit=50')
            .then(res => this.setState({ prices: res.data }))
    }
    // Iterates over coin names from imported images to build complete query for min-api.cryptocompare - this api accepts comma delimited values in query
    buildQuery = () => {
        console.log('Building query')
        const fileName = /[^\\\/]+(?=\.[\w]+$)|[^\\\/]+$/g;
        const coins = Object.keys(this.state.images).map(function (val) {
            return val.match(fileName)[0];
        }).join(',')
        return `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${coins}&tsyms=USD`
    }
    // Used to import images directly from assets folder
    importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }


    renderTopCoins = () => {
        console.log('this.state')
        console.log(this.state.prices)
        let counter = 0;
        let mainElement = [];
        let column = [];
        let row = <Grid.Row columns={4}>
            {[...column]}
        </Grid.Row>

        for (let i = 0; i < 50; i++) {
            console.log('normal')

            if (counter === 4) {
                counter = 0;
                console.log("Four")

                mainElement.push(row);
                row = <Grid.Row columns={4}>
                    {[...column]}
                </Grid.Row>;
                column = [];

            }
            // const [name, price_usd]  = this.state.prices[i];
            column.push(<Grid.Column>
                <Segment>
                    <div>
                        <CryptoIcon src={this.state.images[`${this.state.prices[i].symbol}.png`]} />
                        <span style={{ textAlign: 'right' }}>
                            <p>{this.state.prices[i].name}</p>
                            <h3>${this.state.prices[i].price_usd}</h3>
                        </span>
                    </div>
                    <Divider />
                    <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated 10 minutes ago</p>
                </Segment>
            </Grid.Column>)
            counter++;

        }
        console.log('Main element');
        console.log(mainElement)
        return mainElement;
    }


    render() {
        if (Object.keys(this.state.prices).length > 0) {
        return (
            <Grid padded stackable>{this.renderTopCoins()}</Grid>
        )
    }
    return <div></div>
    }
}

export default TopCoins;
