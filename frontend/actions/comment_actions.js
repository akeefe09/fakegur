import * as CommentUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = (comments) => {
  return ({
    type: RECEIVE_COMMENTS,
    comments
  });
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const removeComment = (comment, id) => {
  return ({
    type: REMOVE_COMMENT,
    comment,
    id,
  });
};

export const requestAllComments = id => dispatch => {
  return CommentUtil.fetchComments(id).then(comments =>
     dispatch(receiveComments(comments)));
};

export const requestComment = (id) => (dispatch) => {
  return CommentUtil.fetchComment(id).then(comment => {
    return dispatch(receiveComment(comment));
  });
};

export const createComment = (comment) => (dispatch) => (
  CommentUtil.createComment(comment).then(comment => {
    return dispatch(receiveOneComment(comment));
  }).fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);

export const deleteComment = (id) => (dispatch) => {
  return APIUtil.deleteComment(id).then(comment =>
    dispatch(destroyComment(id)));
};
