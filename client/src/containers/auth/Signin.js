import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { Form, Segment, Button, Grid, Header, Message } from 'semantic-ui-react'

class Signin extends Component {
  constructor(props) {
    super(props)
  }

  handleFormSubmit({email, password}) {
    console.log(email, password);
    // Need to do something to log user in
  }

  render() {

    const { handleSubmit, fields: { email, password }} = this.props;

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
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                {...email}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                {...password}
              />

              <Button color="teal" fluid size="large">
                Login
              </Button>
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
})(Signin);
