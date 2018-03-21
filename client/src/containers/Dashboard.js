import React, { Component } from 'react';
import styled from 'styled-components';
// import {
//     Button,
//     Container,
//     Divider,
//     Grid,
//     Header,
//     Icon,
//     Image,
//     List,
//     Menu,
//     Responsive,
//     Segment,
//     Sidebar,
//     Visibility,
// } from 'semantic-ui-react'

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

const SidebarItem = styled.li`
    list-style-type: none;
    background-color: red;
    width: 50px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 20px;
    border-radius: 5px;
    width: 220px;
    height: 40px;
    cursor: pointer;
    &:hover ${SidebarItem} {
        opacity: 0.5;
    }
`
const SidebarText = styled.p`
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

const SidebarWrapper = styled.ul`
    background-color: yellow;
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
    }

    render() {
        return (
            <div>
                <Sidebar>

                    <SidebarWrapper>
                        <SidebarItem>
                            <SidebarText>Element 1</SidebarText>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarText>Element 2</SidebarText>
                        </SidebarItem>
                    </SidebarWrapper>
                <Button>Hello</Button>
                </Sidebar>
                <div class='content' style={contentStyle}>This is the content</div>
            </div>
        )
    }

}

export default Dashboard;
