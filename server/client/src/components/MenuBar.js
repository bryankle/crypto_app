import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu stackable>
        <Menu.Item>
          {/* <img src='/logo.png' /> */}
          KyptoBook
        </Menu.Item>

        <Menu.Item
        position='right'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuBar
