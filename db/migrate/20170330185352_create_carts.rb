class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.string :token
      t.references :shipping, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
