import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="nav">

          <div className="nav_left">
            <Link className="home-link" to='/'>
                fakegur
            </Link>
          </div>



          <div className="secondary-nav">
            <Link className="nav-link" to='/signup' >sign up</Link>
            <br/>
            <Link className="nav-link" to='/login' >sign in</Link>
            <br/>
            <button onClick={this.props.logout}>Log Out</button>
          </div>

        </div>
    );
  }

}

export default NavBar;
