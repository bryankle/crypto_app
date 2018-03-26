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

import Sidebar from '../../components/Sidebar/Sidebar'
import BTC from '../../assets/images/btc.png';
import ETH from '../../assets/images/eth.png';
import LTC from '../../assets/images/ltc.png';

import { Content, Navbar, Main, CryptoIcon } from './style';


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prices: {}
        }
    }

    componentDidMount() {
        axios
            .get(
                'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'
            )
            .then(res => this.setState({ prices: res.data }))
    }

    render() {
        console.log(this.state.prices)
        console.log(Object.keys(this.state.prices))
        if (Object.keys(this.state.prices).length > 0) {
            return (
                <div>
                <Sidebar />

                <Main>

                    <Navbar />

                    <Content>
                        <Grid padded stackable>
                            <Grid.Row columns={4}>
                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <Icon style={{ float: 'left' }} size='huge' name='bitcoin' color='yellow' />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Total Balance</p>
                                                <h3>$1,234</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated just now</p>
                                    </Segment>
                                </Grid.Column>
                                {/* <Grid.Column>
                                    <Segment>
                                        <div>
                                            <Icon style={{ float: 'left' }} size='huge' name='percent' color='green' />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Change</p>
                                                <h3>34.12</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated 10 minutes ago</p>
                                    </Segment>
                                </Grid.Column> */}
                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <CryptoIcon src={BTC} />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Bitcoin</p>
                                                <h3>${this.state.prices['BTC']['USD']}</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated 10 minutes ago</p>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <CryptoIcon src={ETH} />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Ethereum</p>
                                                <h3>${this.state.prices['ETH']['USD']}</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated 10 minutes ago</p>
                                    </Segment>
                                </Grid.Column>

                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <CryptoIcon src={LTC} />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Litecoin</p>
                                                <h3>${this.state.prices['LTC']['USD']}</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated 10 minutes ago</p>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>


                            <Grid.Row columns={2}>
                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <Icon style={{ float: 'left' }} size='huge' name='bitcoin' color='yellow' />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Total Balance</p>
                                                <h3>$1,234</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated just now</p>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <Icon style={{ float: 'left' }} size='huge' name='bitcoin' color='yellow' />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Total Balance</p>
                                                <h3>$1,234</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated 10 minutes ago</p>
                                    </Segment>
                                </Grid.Column>

                            </Grid.Row>

                            <Grid.Row columns={1}>
                                <Grid.Column>
                                    <Segment>
                                        <div>
                                            <Icon style={{ float: 'left' }} size='huge' name='bitcoin' color='yellow' />
                                            <span style={{ textAlign: 'right' }}>
                                                <p>Total Balance</p>
                                                <h3>$1,234</h3>
                                            </span>
                                        </div>
                                        <Divider />
                                        <p style={{ color: '#a9a9a9', fontSize: '12px' }}>Updated just now</p>
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>

                        </Grid>
                    </Content>
                </Main>
            </div>
            )

        }

        return (
            <div></div>
        )
    }

}

export default Dashboard;
