import React, { Component } from 'react';
import { Form, Segment, Button, Grid, Header, Message } from 'semantic-ui-react';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {

  constructor(props) {
    super(props);
  }

  handleFormSubmit({ email, password }) {
    this.props.signupUser({ email, password }, () => {

      this.props.history.push('/')
    });
  }

  renderInput({ label, input, meta: { touched, error } }) {
    return (
      <span>
        <Form.Input
          fluid
          icon={label === 'Email' ? 'user' : 'lock'}
          iconPosition='left'
          placeholder={label}
          type={label !== 'Email' ? 'password' : ''}
          {...input}
        />
        {touched && error && <span>{error}</span>}
      </span>
    )
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>Oops, {this.props.errorMessage}</strong>
        </div>
      )
    }
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <Grid
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            Create an account
          </Header>
          <Form
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            size='large'>
            <Segment stacked>
              <Field name="email" component={this.renderInput} label="Email" />
              <Field name="password" component={this.renderInput} label="Password" />
              <Field name="passwordConfirm" component={this.renderInput} label="Confirm Password" />
              {this.renderAlert()}
              <Button color='teal' fluid size='large'>Register</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.name = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Password must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({ form: 'signup', validate })(connect(mapStateToProps, actions)(Signup))
