class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.boolean "main_image", null: false, default: true
      t.text "description"
      

      t.timestamps
    end
  end
end
