import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';



class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (event) => {
      this.setState({
        [field]: event.currentTarget.value,
      });
    };
  }

  guestLogin(event) {
    event.preventDefault();
    const guest = { user: {
      username: 'guest',
      password: 'password',
    }};
  }

  render() {
    return (
      <div className="session-container">
        <div className="back-to-link">
          <img className="back-to-img" src={window.backTo}/>
          <Link className="back-link" to="/">back to fakegur</Link>
        </div>

        <div className="about-footer" >
          <a className="about-link"
            href="https://github.com/akeefe09/fakegur/blob/master/README.md">
            about
          </a>
        </div>

        <a href="https://fakegur.herokuapp.com/">
          <div className="sign-in-img">
          </div>
        </a>

        <ul className="errors">
          {this.renderErrors()}
        </ul>

        <div className="signup-text">
          Register with fakegur
        </div>

        <div className="signup-form">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <br/>
            <div className="br5">
              <input placeholder="Username" type="text"
                value={this.state.username}
                onChange={this.update('username')} />

              <input placeholder="Email" type="text"
                value={this.state.email}
                onChange={this.update('email')} />

              <input placeholder="Password" type="password"
                value={this.state.password}
                onChange={this.update('password')} />
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <div className="session-text">By registering you agree to our terms of service</div>
              </a>
            </div>

            <div className="form-footer">
              <div>
                <Link className="sign-in-footer" to='/login'>sign in</Link>
              <input type="submit" value="Next" className='login-button'/>
								<div className="right signin-register-link text-shadow">
              </div>
            </div>
          </div>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
