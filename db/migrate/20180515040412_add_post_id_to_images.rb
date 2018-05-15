class AddPostIdToImages < ActiveRecord::Migration[5.1]
  def change
    add_column :images, :post_id, :integer, null: false
  end
end
