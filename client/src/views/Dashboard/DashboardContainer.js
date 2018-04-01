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

import Dashboard from './Dashboard';
import TopCoins from './TopCoins';

import { Content, Navbar, Main, CryptoIcon } from './style';

class DashboardController extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        // console.log(this.state)
        // console.log(Object.keys(this.state.prices))
        return (
            <Dashboard>
                <TopCoins />
            </Dashboard>
        )
    }
}

export default DashboardController;
