# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Vote.destroy_all

u1 = User.create!(
  username: 'guest',
  password: 'password',
  email: 'guest@guest.com',
)

u2 = User.create!(
  username: 'user1',
  password: 'password',
  email: 'user1@user1.com',
)

u3 = User.create!(
  username: 'user2',
  password: 'password',
  email: 'user2@user2.com'
)

20.times do |arg|
  Post.create!(
    title: "#{arg}",
    description: "also test",
    user_id: User.first.id,
    view_count: 0,
  )
end

v1 = Vote.create!(
  user_id: User.first.id,
  value: 1,
  votable_id: Post.second.id,
  votable_type: "Post",
)

v2 = Vote.create!(
  user_id: User.first.id,
  value: 1,
  votable_id: Post.first.id,
  votable_type: "Post",
)
