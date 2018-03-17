import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMenuItems() {
    const { authenticated } = this.props;
    const { activeItem } = this.state;

    if (!authenticated) {
      return [
        <Menu.Item
          position="right"
          name="register"
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          <Link to="/signup">Register</Link>
        </Menu.Item>,
        <Menu.Item
          name="sign-in"
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          <Link to="/signin">Login</Link>
        </Menu.Item>
      ]
    }
    else {
      return (
        <Menu.Item
          position="right"
          name="sign-out"
          active={activeItem === 'sign-out'}
          onClick={this.handleItemClick}
        >
          <Link to="/sign">Sign!</Link>
        </Menu.Item>
      )
    }
  }

  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          {/* <img src='/logo.png' /> */}
          <Link to="/">Cryptotrace</Link>
        </Menu.Item>
        {this.renderMenuItems()}
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, null)(MenuBar);
