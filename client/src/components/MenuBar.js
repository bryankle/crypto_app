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
          Cryptotrace
        </Menu.Item>

        <Menu.Item
        position='right'
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuBar
