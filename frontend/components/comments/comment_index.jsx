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
          <div className="comment-item-spacer">
            <div className="comment-item-body">{comment.body}</div>
          </div>
        </div>
      )
    });

    return (
      <div className="comment-spacer">
        <div className="comment-container">COMMENTS
          <div>
            { allComments }
          </div>
        </div>
      </div>
    )

  }
}

export default CommentIndex;
