export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: {comment}
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  });
};

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`,
  })
);

export const fetchComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${id}/comments`,
  })
);
