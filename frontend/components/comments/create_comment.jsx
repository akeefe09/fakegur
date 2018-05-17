import React from 'react';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state: {
      body:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.loggedIn)
  }

  render() {
    return(

    );
  }

}

export default CreateComment;
