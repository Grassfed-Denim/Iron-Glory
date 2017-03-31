class CartSerializer < ActiveModel::Serializer
  attributes :id, :token, :status
  has_one :shipping
  has_many :orderings
  
end
