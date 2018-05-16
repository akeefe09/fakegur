import React from 'react';

class User extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPosts();
    this.props.fetchUser(parseInt(this.props.match.params.id));
  }

  handleClick(e) {
    
  }

}
