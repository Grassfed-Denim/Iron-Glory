class CreateOrderings < ActiveRecord::Migration[5.0]
  def change
    create_table :orderings do |t|
      t.references :inventory, foreign_key: true
      t.integer :quantity
      t.integer :price

      t.timestamps
    end
  end
end
