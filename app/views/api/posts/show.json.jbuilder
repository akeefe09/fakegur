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
  @post.votes.each do
    json.set! vote.id do

    end
  end
end
