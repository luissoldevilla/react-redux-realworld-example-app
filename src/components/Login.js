import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    const colorText = {
      color: 'white',
    }

    const heading = {
      paddingTop: '30px',
      fontWeight: 'bold',
      fontFamily: 'Arial',
      color: 'black',
      paddingBottom: '10px',
    }

    const sizeText = {
      fontSize: '20px',
      paddingLeft: '30px',
      paddingRight: '30px',
      paddingBottom: '25px',
      color: 'black',
    }

    const btnColor = {
      backgroundColor: '#188FC8',
      borderColor: '#188FC8',
      padding: '.75rem 9.2rem',
      fontWeight: 'bold',
    }

    const btnStyle = {
      backgroundColor: '#188FC8',
      borderColor: '#188FC8',
      padding: '.75rem 2.5rem',
      marginTop: '30px',
      fontWeight: 'bold',
    }

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center" style={heading}>Welcome back!</h1>
              <h2 className="text-xs-center" style={sizeText}>Enter your email and password to login to your SociTag profile!</h2>


              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(email, password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    style={btnColor}
                    disabled={this.props.inProgress}>
                    Login
                  </button>

                </fieldset>
              </form>

              <button
                className="btn btn-lg btn-primary pull-xs-right"
                style={btnStyle}
                onClick={handleClick}>
                <Link to="/register" style={colorText}>
                Dont have a profile? Join here
                </Link>
              </button>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
