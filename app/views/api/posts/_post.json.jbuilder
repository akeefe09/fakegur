json.image_url asset_path(post.image.url)
json.extract! image, :id, :user_id, :comment_ids, :like_ids, :created_at, :updated_at
