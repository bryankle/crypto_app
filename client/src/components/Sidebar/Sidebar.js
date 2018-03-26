import React, { Component } from 'react';
import { SidebarContainer, SidebarListItem, SidebarListLink, SidebarText, SidebarWrapper, User } from './style';
import { Icon, Divider } from 'semantic-ui-react';
import { Collapse } from 'reactstrap';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse })
    }

    render() {
        return (

            <SidebarContainer>
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
            </SidebarContainer>

        )
    }
}

export default Sidebar;