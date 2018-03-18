import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Sign extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return(
            <div>Signout</div>
        )
    }
}

export default connect(null, actions)(Sign);