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

class UserDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.display
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropDown);
