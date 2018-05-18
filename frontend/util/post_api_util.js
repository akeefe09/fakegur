export const fetchPost = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`,
  });
};

export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts`,
  });
};

export const deletePost = (id) => {
  return $.ajax({
   method: 'DELETE',
   url: `/api/posts/${id}`,
  });
  // return fetch(`/api/posts/${id}`, {
  //   method: 'DELETE'
  // }).then(res => res.json());
};

export const editPost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  });
};

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: post,
  });
};
