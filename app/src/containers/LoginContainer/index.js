import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet/components/Section';
import LoginForm from 'grommet/components/LoginForm';
import Box from 'grommet/components/Box';
import { AuthFormFooter } from 'components';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }
  render() {
    return (
      <Section
        size="medium"
        pad={{ horizontal: 'large' }}
        align="center"
        justify="center"
        className={styles.login}
      >
        <Box
          size="medium"
          className={styles.loginFormWrapper}
          colorIndex="light-1"
          align="center"
          pad={{ horizontal: 'small', vertical: 'small' }}
        >
          <LoginForm
            title="Code Reviewer"
            secondaryText="Enter your credentials to Login"
            rememberMe
            forgotPassword={
              <AuthFormFooter text="Not a member?" link="/signup" />
            }
            onSubmit={this.handleSubmit}
          />
        </Box>
      </Section>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errors: state.loginContainer.errors,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LoginActionCreators,
    dispatch
  ),
});

const Container = cssModules(Login, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
