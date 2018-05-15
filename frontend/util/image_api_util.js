export const fetchImage = (id) => (
  $.ajax({
    method: 'GET',
    url: '/api/images',
  });
);

export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: `/api/images/${id}`,
  });
);

// export const uploadImage = (image) => (
//   $.ajax({
//     method: 'POST',
//     url: '/api/images',
//     processData
//   });
// );
