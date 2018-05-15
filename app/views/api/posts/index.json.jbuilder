json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial 'api/posts/post', image: image
    end
  end
end

json.users do
  @posts.each do |post|
    json.set! post.user.id do
      json.partial! 'api/users/user', user: post.user
    end
  end
end

json.comments do
  @posts.each do |post|
    post.comments.each do |post|
      json.set! post.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
