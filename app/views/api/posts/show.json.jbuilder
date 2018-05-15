json.images do
  @post.images.each do |image|
    json.set! image.id do
      json.image_url image.image.url
    end
  end
end

# json.comments do
#   @images.each do |image|
#     image.comments.each do |comment|
#       json.set! comment.id do
#         json.partial! 'api/comments/comment', comment: comment
#       end
#     end
#   end
# end
