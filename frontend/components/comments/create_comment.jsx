import React from 'react';

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.loggedIn) {
      const comment = {
        body: this.state.body,
        post_id: this.props.postId,
      };
      this.props.createComment(comment);
    } else {
      return window.alert("Must be logged in to comment")
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <div className="create-comment-form-container">
        <form className="create-comment-form">
          <div className="input-c">
            <input type="text" className="comment-body-text"
              placeholder="Write a comment"
              onChange={this.update('body')}
              value={this.state.body}></input>
              <button onClick={this.handleSubmit}
                className="create-comment-button">Post</button>
          </div>
        </form>
      </div>
    );
  }

}

export default CreateComment;
