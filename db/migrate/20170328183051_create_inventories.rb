class CreateInventories < ActiveRecord::Migration[5.0]
  def change
    create_table :inventories do |t|
      t.string :product
      t.string :SKU
      t.integer :price
      t.integer :available
      t.string :year
      t.text :description
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
