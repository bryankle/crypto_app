import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import styled from 'styled-components';
import {
    Divider,
    Icon
} from 'semantic-ui-react'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Sidebar = styled.div`
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 260px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #cccccc; /* Black */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;

`
// const SidebarProfile = styled.

const SidebarListItem = styled.li`
    list-style-type: none;
    width: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    cursor: pointer;
    &:hover ${SidebarListItem} {
        opacity: 0.5;
        background-color: red;
    }
`

const SidebarListLink = styled.a`
    position: relative;
    margin-left: 15%;
    top: 25%;
`

const SidebarText = styled.p`
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    display: inline;
`

const SidebarWrapper = styled.ul`
    padding-left: 0;
`

const contentStyle = {
    marginLeft: '260px', /* Same as the width of the sidebar */
    padding: '0px 10px'
}

const buttonStyle = {
    opacity: '0.2'
}

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
                        <SidebarText>
                            Bryan Le
                        </ SidebarText>
                    </SidebarListLink>
                    <Collapse isOpen={this.state.collapse}>
                        <SidebarWrapper>
                            <SidebarListItem>
                                <SidebarListLink>
                                    <Icon name='pie graph' />
                                    <SidebarText>Dashboard</SidebarText>
                                </SidebarListLink>
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarListLink>
                                    <Icon name='user circle' />
                                    <SidebarText>User Profile</SidebarText>
                                </SidebarListLink>
                            </SidebarListItem>
                            <SidebarListItem>
                                <SidebarListLink>
                                    <Icon name='newspaper' />
                                    <SidebarText>News</SidebarText>
                                </SidebarListLink>
                            </SidebarListItem>
                        </SidebarWrapper>
                    </Collapse>
                    
                    <Divider />
                    
                    <SidebarWrapper>
                        <SidebarListItem>
                            <SidebarListLink>
                                <Icon name='pie graph' />
                                <SidebarText>Dashboard</SidebarText>
                            </SidebarListLink>
                        </SidebarListItem>
                        <SidebarListItem>
                            <SidebarListLink>
                                <Icon name='user circle' />
                                <SidebarText>User Profile</SidebarText>
                            </SidebarListLink>
                        </SidebarListItem>
                        <SidebarListItem>
                            <SidebarListLink>
                                <Icon name='newspaper' />
                                <SidebarText>News</SidebarText>
                            </SidebarListLink>
                        </SidebarListItem>
                    </SidebarWrapper>
                    <Button>Hello</Button>
                </Sidebar>
                <div class='content' style={contentStyle}>This is the content</div>
            </div>
        )
    }

}

export default Dashboard;
