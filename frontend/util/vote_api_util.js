export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: `/api/${vote.votable_type}/${vote.votable_id}/votes/`,
    data: vote
  })
);

export const deleteVote = ({id}) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/${vote.votable_type}/${vote.votable_id}/votes/${vote.id}`
  })
);

// export const editVote = vote => (
//   $.ajax({
//     method: 'PATCH',
//     url: `/api/votes/${vote.vote.id}`,
//     data: vote
//   })
// );
