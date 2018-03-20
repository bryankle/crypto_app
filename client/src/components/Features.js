import React, { Component } from 'react';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

import ThumbImg from '../assets/images/like.png';
import CoinImg from '../assets/images/coins.png';
import ChartImg from '../assets/images/charts.png';

export const Features = () => (
<Segment name='features' style={{ padding: '8em 0em' }} vertical>
<Grid stackable container columns={3} textAlign='center'>
    <Grid.Column>
        <img src={ThumbImg} />
        <h1> Free </h1>
        <p>Cryptotrace is completely free of charge to use and contains no ads.</p>
    </Grid.Column>
    <Grid.Column>
        <img src={CoinImg} />
        <h1>Comprehensive</h1>
        <p>Includes major and alternative cryptocurrencies.</p>
    </Grid.Column>
    <Grid.Column>
        <img src={ChartImg} />
        <h1> Precise </h1>
        <p>Real-time cryptocurrency prices updated regularly.</p>
    </Grid.Column>
  </Grid>
    </Segment>

)

