json.post do
  json.comment_ids @post.comments.ids
  json.partial! 'api/posts/post', post: @post
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.votes do
  @post.votes.each do |vote|
    json.set! vote.id do
      json.partial! 'api/votes/new', vote: vote
    end
  end
end

json.user do
  json.set! @post.user_id do
    json.partial! 'api/users/user', user: @post.user
  end
end
