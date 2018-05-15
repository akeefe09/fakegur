import React from 'react';
import { connect } from 'react-redux';
import LeftDropDown from './menu_left_dropdown_items.jsx';
import { displayDropdown, clearDropdowns }
  from '../../actions/dropdown_menu_actions';

class MenuDrop extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.displayDropdown({ leftDropDown: !this.props.visible});
  }

  render() {
    return (
      <span className='link-menu'>
        <div className='info-menu-button'>
        <div className="dropdown">
          <i className="fa fa-chevron-circle-down dropbtn"
            onClick={this.handleClick} aria-hidden="true"></i>
          { this.props.visible ? <LeftDropDown clearDropdowns={clearDropdowns}/> : null }
        </div>
      </div>
      </span>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    visible: Boolean(state.dropdown.leftDropDown)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayDropdown: (obj) => dispatch(displayDropdown(obj)),
    clearDropdowns: () => dispatch(clearDropdowns())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuLeftDropdown);
