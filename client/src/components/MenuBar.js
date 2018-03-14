import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item>
          {/* <img src='/logo.png' /> */}
          <Link to="/">Cryptotrace</Link>
        </Menu.Item>

        <Menu.Item
          position="right"
          name="register"
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          <Link to="/signup">Register</Link>
        </Menu.Item>

        <Menu.Item
          name="sign-in"
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          <Link to="/signin">Login</Link>
        </Menu.Item>

        <Menu.Item
          name="sign-out"
          active={activeItem === 'sign-out'}
          onClick={this.handleItemClick}
        >
          <Link to="/sign">Sign!</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default MenuBar
