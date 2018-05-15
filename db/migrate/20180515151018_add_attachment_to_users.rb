class AddAttachmentToUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :profile_pic_url
    change_table :users do |t|
      t.attachment :profile_pic
    end
  end
end
