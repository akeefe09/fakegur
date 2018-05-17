import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllComments();
  }

  render() {
    
    if (isEmpty(this.props.comments)) {
      return null;
    }

    let allComments = this.props.comments.map((comment, index) => {
      return (
        <div key={comment.id} className="comment-item">
          <div className="comment-item-body">{comment.body}</div>
        </div>
      )
    });

    return (
      <div className="comment-container">
        <ul>
          { allComments }
        </ul>
      </div>
    )

  }
}

export default CommentIndex;
