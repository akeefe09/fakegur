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
    if (this.props.loggedIn) {
      body: this.state.body,
    } else {
      return window.alert("Must be logged in to comment")
    }
  }

  render() {
    return(
      <div className="create-comment-form-container">
        <form className="create-comment-form">
          <div className="">
            <input type="text" className="comment-body-text"
              placeholder="Write a comment"
              onChange={this.update('body')}
              value={this.state.body}></input>

            <div className="comment-button-div">
              <button onClick={this.handleSubmit}
                className="create-comment-button">Post</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default CreateComment;
