class InventorySerializer < ActiveModel::Serializer
  attributes :id, :product, :SKU, :price, :year, :description, :category
end
