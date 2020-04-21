import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  onSubmit: (username, email, password) => {
    const payload = agent.Auth.register(username, email, password);
    dispatch({ type: REGISTER, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends React.Component {
  constructor() {
    super();
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.submitForm = (username, email, password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;
    const username = this.props.username;

    const colorText = {
      color: 'white',
    }

    const heading = {
      paddingTop: '30px',
      fontWeight: 'bold',
      fontFamily: 'Arial',
      color: 'black',
    }

    const sizeText = {
      fontSize: '20px',
      paddingLeft: '40px',
      paddingRight: '40px',
    }

    const btnColor = {
      backgroundColor: '#188FC8',
      borderColor: '#188FC8',
      padding: '.75rem 6.1rem',
    }

    const btnStyle = {
      backgroundColor: '#188FC8',
      borderColor: '#188FC8',
      padding: '.75rem 3.4rem',
      marginTop: '30px',
    }

    const pSubmit = {
      fontSize: '13px',
      paddingLeft: '1.2rem',
      paddingRight: '1.2rem',
      marginTop: '2px',
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
              <h2 className="text-xs-center" style={heading}>Set up your SociTag!</h2>
              <p className="text-xs-center" style={sizeText}>Enter your information below to set up your SociTag</p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(username, email, password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={this.props.username}
                      onChange={this.changeUsername} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={this.props.email}
                      onChange={this.changeEmail} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={this.props.password}
                      onChange={this.changePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    style={btnColor}
                    disabled={this.props.inProgress}>
                    Link Your SociTag
                  </button>

                </fieldset>
              </form>

              <p style={pSubmit}>
              By registering, you agree to our Terms and Privacy Policy</p>

              <button
                className="btn btn-lg btn-primary pull-xs-right"
                style={btnStyle}
                onClick={handleClick}>
                <Link to="/login" style={colorText}>
                Already Set Up? Log in here!
                </Link>
              </button>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
