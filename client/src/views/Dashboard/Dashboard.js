import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import styled, { css } from 'styled-components';
import {
    Divider,
    Icon,
    Container,
    Segment,
    Grid,
    Header
} from 'semantic-ui-react'

import SidebarBackground from '../../assets/images/wave.jpg';
import UserImage from '../../assets/images/face.jpg';

const Sidebar = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 260px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    background-image: url(${SidebarBackground}), linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5));
    background-blend-mode: overlay;
`
// const SidebarProfile = styled.

const SidebarListItem = styled.li`
    list-style-type: none;
    width: 50px;
    margin-top: 5px;
    padding-bottom: 5px;
    margin-left: 15px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    cursor: pointer;
    &:hover ${SidebarListItem} {
        transition: background-color 0.3s ease;
        background-color: rgba(255,255,255,0.3);
    }
    ${props => props.user && css`
        padding-left: 10px;
        color: white;
    `}
`

const SidebarListLink = styled.a`
    position: relative;
    margin-left: 5%;
    top: 25%;
`

const SidebarText = styled.p`
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline;
    padding-left: 15px;
    ${props => props.user && css`
        bottom: 7px;
        position: relative;
        font-weight: 100
    `}
`

const SidebarWrapper = styled.ul`
    padding-left: 0;
    margin: 0;
`

const User = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-image: url(${UserImage});
    margin-left: 15px;
`
const Content = styled.main`
    margin-left: 30px;
`

const Navbar = styled.header`
    height: 70px;
    background-color: #ffffff;
    border-bottom: 1px solid #e7e7e7;
`

const Main = styled.div`
    margin-left: 260px;
    height: 100vh;
    background-color: #f8f8f8;
`

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return (
            <div>
                <Sidebar>

                    <SidebarListLink onClick={this.toggle}>
                        <User />
                        <SidebarText user>
                            Benjamin Franklin
                        </ SidebarText>
                    </SidebarListLink>
                    <Collapse isOpen={this.state.collapse}>
                        <SidebarWrapper>
                            <SidebarListItem user>
                                <SidebarListLink>
                                    <span>MP</span>
                                    <SidebarText>My Profile</SidebarText>
                                </SidebarListLink>
                            </SidebarListItem>
                            <SidebarListItem user>
                                <SidebarListLink>
                                    <span>EP</span>
                                    <SidebarText>Edit Profile</SidebarText>
                                </SidebarListLink>
                            </SidebarListItem>
                            <SidebarListItem user>
                                <SidebarListLink>
                                    <span> S </span>
                                    <SidebarText>Settings</SidebarText>
                                </SidebarListLink>
                            </SidebarListItem>
                        </SidebarWrapper>
                    </Collapse>

                    <Divider />

                    <SidebarWrapper>
                        <SidebarListItem>
                            <SidebarListLink>
                                <Icon size='large' inverted name='pie graph' />
                                <SidebarText>Dashboard</SidebarText>
                            </SidebarListLink>
                        </SidebarListItem>
                        <SidebarListItem>
                            <SidebarListLink>
                                <Icon size='large' inverted name='user circle' />
                                <SidebarText>User Profile</SidebarText>
                            </SidebarListLink>
                        </SidebarListItem>
                        <SidebarListItem>
                            <SidebarListLink>
                                <Icon size='large' inverted name='newspaper' />
                                <SidebarText>News</SidebarText>
                            </SidebarListLink>
                        </SidebarListItem>
                    </SidebarWrapper>
                </Sidebar>
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
                                <Grid.Column>
                                    <Segment />
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment />
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

}

export default Dashboard;
