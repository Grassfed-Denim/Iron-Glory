class AddCartIdToOrderings < ActiveRecord::Migration[5.0]
  def change
    add_reference :orderings, :cart, foreign_key: true
  end
end
