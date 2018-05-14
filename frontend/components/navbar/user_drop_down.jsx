import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    drop: Boolean(state.dropdown.menuDropDown)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayDropdown: (obj) => dispatch(displayDropdown(obj)),
    clearDropdowns: () => dispatch(clearDropdowns())
  };
};

const UserDropDownContents = ({ clearDropdowns }) => {
  return (
    <ul>
      <li><Link to onClick={this.props.logout}>Log Out</Link></li>
    </ul>
  );
}

class UserDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.displayDropdown({menuDropDown: !this.props.visible});
  }

  render() {
    return (
      <div className='user-menu'>
        <div className='user-menu-btn'>
          <div className='user-dropdown'>
            <i className="fa fa-chevron-circle-down dropbtn"
            onClick={this.handleClick} hidden="true"></i>
          { this.props.visible ? <UserDropDownContents clearDropdowns={clearDropdowns}/> : null }
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown);
