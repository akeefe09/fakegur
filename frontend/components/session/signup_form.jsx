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
    const errors = this.props.errors.map(event => {
      return (
        <li>{event}</li>
      );
    });
    return (
      <div className="session-container">
        <div className="sign-in-img">
          <img src={window.logo} />
        </div>

        <div className="sign-up-text">
          Register with fakegur
        </div>

        <div className="signup-form">
          <form onSubmit={this.handleSubmit} className="signup-form form signup">
            <br/>
            <span>
              <input placeholder="Username" type="text"
                value={this.state.username}
                onChange={this.update('username')} />
            </span>

            <br/>
            <span>
              <input placeholder="Email" type="text"
                value={this.state.email}
                onChange={this.update('email')} />
            </span>
            <br/>
            <span>
              <input placeholder="Password" type="password"
                value={this.state.password}
                onChange={this.update('password')} />
            </span>


            <div className="login-form toggle">
              <span>
                <Link to='/login'>sign in</Link>
              </span>
              <input type="submit" value="Next" className='submit-button right'/>
								<div className="right signin-register-link text-shadow">
            </div>
          </div>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
