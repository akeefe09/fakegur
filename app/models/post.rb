class Post < ApplicationRecord
  validates :title, presence: true

  belongs_to :user

  has_many :comments

  has_many :votes

  has_attached_file :image, default_url: "logo.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
