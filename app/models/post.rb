class Post < ApplicationRecord
  include Votable
  validates :title, presence: true

  belongs_to :user

  has_many :comments

  has_attached_file :image, default_url: "https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
