class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer "user_id", null: false, index: true
      t.integer "post_id", null: false
      t.integer "parent_id"
      t.string "parent_type"
      t.text "body", null: false

      t.timestamps
    end
    add_index :comments, :parent_id
    add_index :comments, :post_id
    
  end
end
