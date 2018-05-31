export const createVote = vote => (
  $.ajax({
    method: 'POST',
    url: '/api/votes',
    data: vote
  })
);

export const deleteVote = ({id}) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/votes/${id}`
  })
);

export const editVote = vote => (
  $.ajax({
    method: 'PATCH',
    url: `/api/votes/${vote.vote.id}`,
    data: vote
  })
);
