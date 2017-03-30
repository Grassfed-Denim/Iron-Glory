class RemoveShippingIdAndOrderingIdFromOrders < ActiveRecord::Migration[5.0]
  def change
    remove_reference :orders, :shipping, foreign_key: true
    remove_reference :orders, :ordering, foreign_key: true
  end
end
