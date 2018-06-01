json.set! vote.id do
  json.extract! votes, :value, :votable_id, :votable_type, :id, :user_id
end
