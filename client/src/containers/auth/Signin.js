import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { Form, Segment, Button, Grid, Header, Message } from 'semantic-ui-react'
import * as actions from '../../actions';

class Signin extends Component {
  constructor(props) {
    super(props)
  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    // Need to do something to log user in
    this.props.signinUser({ email, password }, () => {
      this.props.history.push('/')
    })
  }

  renderInput({ label, ...field }) {
    return (
      <Form.Input
        { ...field.input }
        fluid
        icon={label === 'Username' ? 'user' : 'lock'}
        iconPosition='left'
        placeholder={label}
      />
    )
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <strong>{this.props.errorMessage}</strong>
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
            New to us? <a href="#">Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(connect(null, actions)(Signin));
