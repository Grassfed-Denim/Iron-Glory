class AddPhotoToInventory < ActiveRecord::Migration[5.0]
  def change
    add_column :inventories, :photo, :string
  end
end
