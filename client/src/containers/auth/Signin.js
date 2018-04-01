import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Form, Segment, Button, Grid, Header, Message } from 'semantic-ui-react';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Reroute user to main page if sign in was successful
    this.props.signinUser({ email, password }, () => {
      this.props.history.push('/dashboard')
    })
  }

  renderInput({ label, ...field }) {
    return (
      <Form.Input
        {...field.input}
        fluid
        icon={label === 'Username' ? 'user' : 'lock'}
        iconPosition='left'
        placeholder={label}
        type={label === 'Password' ? 'password' : ''}
      />
    )
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <Message negative>
            <Message.Header>{this.props.errorMessage}</Message.Header>
          </Message>
        </div>
      )
    }
  }

  render() {

    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large"
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Segment stacked>
              <Field name="email" component={this.renderInput} label="Username" />
              <Field name="password" component={this.renderInput} label="Password" />

              {this.renderAlert()}

              <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/signup'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(connect(mapStateToProps, actions)(Signin));
