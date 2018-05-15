json.post do
  json.partial! 'api/posts/post', image: @image
end

json.comments do
  @images.each do |image|
    image.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end
