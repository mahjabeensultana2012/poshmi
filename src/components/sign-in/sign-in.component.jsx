import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account</h2>
        <span>Sign in with your email and password</span>
      </div>
    );
  }
}
